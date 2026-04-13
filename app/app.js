// ── State ─────────────────────────────────────────────────────────────────
const state = {
  activeCategory: 'All',
  activePanelId: null,       // ID of the lead record currently shown in panel
  activeVariantIndex: 0,     // tab index within that record's variant group
};

// ── DOM refs ──────────────────────────────────────────────────────────────
const categoryNav    = document.getElementById('category-nav');
const categoryHeading = document.getElementById('category-heading');
const cardGrid       = document.getElementById('card-grid');
const detailPanel    = document.getElementById('detail-panel');
const panelContent   = document.getElementById('panel-content');
const panelBackdrop  = document.getElementById('panel-backdrop');
const panelCloseBtn  = document.getElementById('panel-close');
const lightbox       = document.getElementById('lightbox');
const lightboxImg    = document.getElementById('lightbox-img');
const lightboxClose  = document.getElementById('lightbox-close');
const toast          = document.getElementById('toast');

// ── Helpers ───────────────────────────────────────────────────────────────
function imgSrc(filename) {
  if (!filename) return null;
  return IMAGE_BASE + encodeURIComponent(filename);
}

let toastTimer = null;
function showToast() {
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 1800);
}

function copyText(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    showToast();
    if (btn) {
      const orig = btn.textContent;
      btn.textContent = 'Copied!';
      btn.classList.add('copied');
      setTimeout(() => { btn.textContent = orig; btn.classList.remove('copied'); }, 1600);
    }
  });
}

/** Given a record, resolve the active display record:
 *  if the record is in a variant group, return the correct variant by index. */
function resolveActiveRecord(leadId, variantIndex) {
  const lead = getById(leadId);
  if (!lead || !lead.variantGroup) return lead;
  const group = VARIANT_GROUPS[lead.variantGroup];
  const variantInfo = group.variants[variantIndex] || group.variants[0];
  return getById(variantInfo.id) || lead;
}

// ── Category nav ─────────────────────────────────────────────────────────
function renderCategoryNav() {
  categoryNav.innerHTML = '';
  CATEGORIES.forEach(cat => {
    const count = getCardCount(cat);
    const item = document.createElement('div');
    item.className = 'cat-item' + (cat === state.activeCategory ? ' active' : '');
    item.dataset.cat = cat;
    item.innerHTML = `<span>${cat}</span><span class="cat-count">${count}</span>`;
    item.addEventListener('click', () => selectCategory(cat));
    categoryNav.appendChild(item);
  });
}

function selectCategory(cat) {
  state.activeCategory = cat;
  state.activePanelId = null;
  closePanel();
  renderCategoryNav();
  categoryHeading.textContent = cat === 'All' ? 'All Prompts' : cat;
  renderGrid();
}

// ── Card grid ─────────────────────────────────────────────────────────────
function renderGrid() {
  cardGrid.innerHTML = '';
  const entries = getCardEntries(state.activeCategory);

  if (entries.length === 0) {
    cardGrid.innerHTML = '<p style="color:var(--text-muted);font-size:13px;padding:8px 0">No prompts in this category yet.</p>';
    return;
  }

  entries.forEach(entry => {
    const card = buildCard(entry);
    cardGrid.appendChild(card);
  });
}

function buildCard(entry) {
  const leadId = entry.type === 'group' ? entry.leadId : entry.id;
  const rec = getById(leadId);

  const isGroup = entry.type === 'group';
  const group = isGroup ? VARIANT_GROUPS[entry.groupKey] : null;
  const variantCount = isGroup ? group.variants.length : 0;
  const cardTitle = isGroup ? group.title : rec.title;

  const card = document.createElement('div');
  card.className = 'card' + (state.activePanelId === leadId ? ' active' : '');
  card.dataset.leadId = leadId;
  card.dataset.groupKey = entry.groupKey || '';

  const imageSrc = rec.images && rec.images.length > 0 ? imgSrc(rec.images[0]) : null;

  card.innerHTML = `
    <div class="card-image">
      ${imageSrc
        ? `<img src="${imageSrc}" alt="${rec.title}" loading="lazy" />`
        : `<div class="card-image-placeholder">No example image</div>`
      }
      <div class="badge-row">
        <span class="badge badge-category">${rec.category}</span>
        ${variantCount > 1 ? `<span class="badge badge-variants">${variantCount} variants</span>` : ''}
      </div>
    </div>
    <div class="card-body">
      <div class="card-title">${cardTitle}</div>
      <div class="card-summary">${rec.shortSummary}</div>
      <button class="card-copy-btn">Copy prompt</button>
    </div>
  `;

  // Open panel on card click (except copy button)
  card.addEventListener('click', e => {
    if (e.target.closest('.card-copy-btn')) return;
    openPanel(leadId, 0);
  });

  // Copy the lead record's cleaned prompt
  card.querySelector('.card-copy-btn').addEventListener('click', e => {
    e.stopPropagation();
    const activeRec = resolveActiveRecord(leadId, 0);
    copyText(activeRec.cleanedPrompt, e.currentTarget);
  });

  return card;
}

// ── Panel ─────────────────────────────────────────────────────────────────
function openPanel(leadId, variantIndex) {
  state.activePanelId = leadId;
  state.activeVariantIndex = variantIndex;

  // Mark active card
  document.querySelectorAll('.card').forEach(c => {
    c.classList.toggle('active', c.dataset.leadId === leadId);
  });

  renderPanel();
  detailPanel.removeAttribute('hidden');
  panelBackdrop.removeAttribute('hidden');
  requestAnimationFrame(() => detailPanel.classList.add('open'));
}

function closePanel() {
  state.activePanelId = null;
  detailPanel.classList.remove('open');
  panelBackdrop.setAttribute('hidden', '');
  document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
  setTimeout(() => detailPanel.setAttribute('hidden', ''), 280);
}

function renderPanel() {
  const leadId = state.activePanelId;
  const variantIndex = state.activeVariantIndex;
  const activeRec = resolveActiveRecord(leadId, variantIndex);
  const lead = getById(leadId);

  const isGroup = !!lead.variantGroup;
  const group = isGroup ? VARIANT_GROUPS[lead.variantGroup] : null;
  const panelTitle = isGroup ? group.title : lead.title;

  // Build variant tabs HTML
  let tabsHtml = '';
  if (isGroup && group.variants.length > 1) {
    tabsHtml = `<div class="variant-tabs">` +
      group.variants.map((v, i) => {
        const active = i === variantIndex ? ' active' : '';
        return `<div class="variant-tab${active}" data-vi="${i}">${v.label}</div>`;
      }).join('') +
    `</div>`;
  }

  // Context-dependent warning
  const contextWarn = activeRec.isContextDependent
    ? `<div class="context-warning">This prompt works best as a follow-up in the same chat session — after generating the prior output in this group.</div>`
    : '';

  // Template note
  const templateNote = activeRec.hasTemplate
    ? `<div class="template-note">This prompt contains a fill-in parameter. Replace the bracketed placeholder with your chosen value before submitting.</div>`
    : '';

  // Image
  const imgSrcVal = activeRec.images && activeRec.images.length > 0 ? imgSrc(activeRec.images[0]) : null;
  const imageHtml = imgSrcVal
    ? `<div class="panel-image-wrap" data-src="${imgSrcVal}"><img src="${imgSrcVal}" alt="${activeRec.title}" /></div>`
    : `<div class="panel-image-placeholder">No example image available</div>`;

  // Notes
  const notesHtml = activeRec.notes
    ? `<div class="panel-notes">${activeRec.notes}</div>`
    : '';

  const uncertaintyHtml = activeRec.uncertaintyNotes
    ? `<div class="panel-notes panel-uncertainty">${activeRec.uncertaintyNotes}</div>`
    : '';

  // Tags
  const tagsHtml = activeRec.tags
    ? `<div class="tags-row">${activeRec.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>`
    : '';

  panelContent.innerHTML = `
    <div class="panel-breadcrumb">${activeRec.category}${activeRec.subcategory ? ' › ' + activeRec.subcategory : ''}</div>
    <h2 class="panel-title">${panelTitle}</h2>

    ${tabsHtml}
    ${contextWarn}
    ${imageHtml}

    <p class="panel-summary">${activeRec.shortSummary}</p>

    <div class="panel-usecase-label">Best for</div>
    <p class="panel-usecase">${activeRec.useCase}</p>

    <div class="panel-divider"></div>

    <div class="prompt-section-label">Prompt</div>
    ${templateNote}
    <div class="prompt-block">
      <div class="prompt-text">${escapeHtml(activeRec.cleanedPrompt)}</div>
    </div>

    <button class="panel-copy-btn">Copy prompt</button>

    <button class="original-toggle">
      <span class="original-toggle-arrow">›</span> View original source prompt
    </button>
    <div class="original-prompt-block">${escapeHtml(activeRec.originalPrompt)}</div>

    ${tagsHtml}
    <p class="output-type">Output: <span>${activeRec.recommendedOutputType}</span></p>

    ${notesHtml}
    ${uncertaintyHtml}
  `;

  // Bind variant tabs
  panelContent.querySelectorAll('.variant-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const vi = parseInt(tab.dataset.vi, 10);
      state.activeVariantIndex = vi;
      renderPanel();
    });
  });

  // Bind panel copy
  panelContent.querySelector('.panel-copy-btn').addEventListener('click', e => {
    copyText(activeRec.cleanedPrompt, e.currentTarget);
  });

  // Bind original toggle
  const toggle = panelContent.querySelector('.original-toggle');
  const originalBlock = panelContent.querySelector('.original-prompt-block');
  const arrow = toggle.querySelector('.original-toggle-arrow');
  toggle.addEventListener('click', () => {
    const open = originalBlock.classList.toggle('visible');
    arrow.classList.toggle('open', open);
  });

  // Bind image lightbox
  const imgWrap = panelContent.querySelector('.panel-image-wrap');
  if (imgWrap) {
    imgWrap.addEventListener('click', () => openLightbox(imgWrap.dataset.src));
  }
}

// ── Lightbox ──────────────────────────────────────────────────────────────
function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.setAttribute('hidden', '');
  lightboxImg.src = '';
  document.body.style.overflow = '';
}

// ── Escape HTML ───────────────────────────────────────────────────────────
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ── Event bindings ────────────────────────────────────────────────────────
panelCloseBtn.addEventListener('click', closePanel);
panelBackdrop.addEventListener('click', closePanel);
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (!lightbox.hasAttribute('hidden')) { closeLightbox(); return; }
    if (!detailPanel.hasAttribute('hidden')) { closePanel(); }
  }
});

// ── Boot ─────────────────────────────────────────────────────────────────
renderCategoryNav();
renderGrid();
