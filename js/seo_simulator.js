/**
 * Digital-Marketing-SVGDC: SEO SERP Snippet & On-Page Meta Tag Simulator
 * Department of Physics, S.V.A. Govt. Degree College, Srikalahasti
 */

(function() {
  'use strict';

  function mount(container) {
    if (!container) return;

    container.innerHTML = `
      <div class="interactive-tool-card">
        <div class="tool-header-badge">
          <i class="fa-brands fa-google"></i> Live Google SERP Simulator
        </div>
        <h3 class="tool-title"><i class="fa-solid fa-magnifying-glass"></i> SERP Snippet &amp; On-Page Meta Tag Auditor</h3>
        <p class="tool-desc">
          Test how your website appears on Google Desktop and Mobile search result pages. Audit Title tag pixel width, meta description length, URL slug optimization, and keyword placement in real time.
        </p>

        <div class="serp-device-toggle">
          <button type="button" class="serp-toggle-btn active" id="serp-btn-desktop"><i class="fa-solid fa-desktop"></i> Desktop View</button>
          <button type="button" class="serp-toggle-btn" id="serp-btn-mobile"><i class="fa-solid fa-mobile-screen"></i> Mobile View</button>
        </div>

        <div class="tool-two-col">
          <!-- Left Column: Input Controls -->
          <div class="tool-inputs-col">
            <div class="tool-form-group">
              <label class="tool-label" for="seo-target-kw">
                <span>Focus Target Keyword:</span>
                <span class="tool-label-hint">Primary query</span>
              </label>
              <input type="text" class="tool-input" id="seo-target-kw" value="digital marketing course" placeholder="e.g. digital marketing course">
            </div>

            <div class="tool-form-group">
              <label class="tool-label" for="seo-page-title">
                <span>SEO Page Title (&lt;title&gt;):</span>
                <span class="tool-label-hint" id="seo-title-count">0 / 60 chars</span>
              </label>
              <input type="text" class="tool-input" id="seo-page-title" value="Complete Digital Marketing Course 2026 | S.V.A. Govt Degree College" placeholder="Enter engaging page title...">
              <div class="char-counter-bar">
                <div class="char-counter-fill" id="seo-title-fill"></div>
              </div>
            </div>

            <div class="tool-form-group">
              <label class="tool-label" for="seo-page-slug">
                <span>URL Slug / Permalink:</span>
                <span class="tool-label-hint">Short, hyphenated</span>
              </label>
              <input type="text" class="tool-input" id="seo-page-slug" value="digital-marketing-course-guide" placeholder="e.g. digital-marketing-syllabus">
            </div>

            <div class="tool-form-group">
              <label class="tool-label" for="seo-meta-desc">
                <span>Meta Description:</span>
                <span class="tool-label-hint" id="seo-desc-count">0 / 160 chars</span>
              </label>
              <textarea class="tool-textarea" id="seo-meta-desc" placeholder="Write compelling 155-character summary that maximizes organic click-through rate...">Master emerging digital marketing trends, SEO, WordPress development, Facebook Ads, and GA4 analytics with hands-on college practicals and certification tests.</textarea>
              <div class="char-counter-bar">
                <div class="char-counter-fill" id="seo-desc-fill"></div>
              </div>
            </div>

            <div class="tool-form-group" style="display: flex; align-items: center; gap: 0.75rem; margin-top: 0.5rem;">
              <input type="checkbox" id="seo-rich-snippet-toggle" checked style="width: 18px; height: 18px; accent-color: #ea580c; cursor: pointer;">
              <label for="seo-rich-snippet-toggle" style="font-size: 0.82rem; font-weight: 600; cursor: pointer;">
                Show Rich Snippets (Star Ratings &amp; Academic Schema)
              </label>
            </div>
          </div>

          <!-- Right Column: Live SERP Simulation & Diagnostic Checklist -->
          <div class="tool-preview-col">
            <div style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.5rem; letter-spacing: 0.05em;">
              <i class="fa-solid fa-eye"></i> Google SERP Preview
            </div>

            <div class="serp-preview-box" id="serp-preview-card">
              <div class="serp-meta-url">
                <span class="serp-favicon"><i class="fa-solid fa-globe"></i></span>
                <span id="serp-display-url">https://svagdc.edu.in &rsaquo; digital-marketing-course-guide</span>
              </div>
              <h4 class="serp-title" id="serp-display-title">Complete Digital Marketing Course 2026 | S.V.A. Govt Degree College</h4>
              <p class="serp-description" id="serp-display-desc">
                Master emerging digital marketing trends, SEO, WordPress development, Facebook Ads, and GA4 analytics with hands-on college practicals and certification tests.
              </p>
              <div class="serp-rich-snippet" id="serp-display-rich">
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>
                <span style="font-weight: 700; color: #4d5156; margin-left: 0.25rem;">4.9</span> &bull; <span>(1,248 student reviews) &bull; Free Skill Enhancement Course</span>
              </div>
            </div>

            <!-- SEO Health Checklist -->
            <div style="margin-top: 1.25rem; background: var(--bg-primary); border: 1px solid var(--border-medium); border-radius: var(--radius-md); padding: 1rem;">
              <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem; display: flex; justify-content: space-between;">
                <span><i class="fa-solid fa-list-check"></i> On-Page Optimization Audit</span>
                <span id="seo-health-score" style="color: #10b981; font-weight: 800;">100% Optimized</span>
              </div>
              <ul class="seo-check-list">
                <li class="seo-check-item passed" id="chk-kw-title">
                  <i class="fa-solid fa-circle-check"></i> <span>Keyword found in Page Title</span>
                </li>
                <li class="seo-check-item passed" id="chk-title-len">
                  <i class="fa-solid fa-circle-check"></i> <span>Title length is within optimal 50-60 character limit</span>
                </li>
                <li class="seo-check-item passed" id="chk-kw-desc">
                  <i class="fa-solid fa-circle-check"></i> <span>Keyword found in Meta Description</span>
                </li>
                <li class="seo-check-item passed" id="chk-desc-len">
                  <i class="fa-solid fa-circle-check"></i> <span>Meta description length within recommended 120-160 characters</span>
                </li>
                <li class="seo-check-item passed" id="chk-kw-slug">
                  <i class="fa-solid fa-circle-check"></i> <span>Clean, hyphenated URL slug contains target keyword</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `;

    // Elements
    const kwInput = container.querySelector('#seo-target-kw');
    const titleInput = container.querySelector('#seo-page-title');
    const slugInput = container.querySelector('#seo-page-slug');
    const descInput = container.querySelector('#seo-meta-desc');
    const richToggle = container.querySelector('#seo-rich-snippet-toggle');

    const dispUrl = container.querySelector('#serp-display-url');
    const dispTitle = container.querySelector('#serp-display-title');
    const dispDesc = container.querySelector('#serp-display-desc');
    const dispRich = container.querySelector('#serp-display-rich');
    const previewCard = container.querySelector('#serp-preview-card');

    const titleCount = container.querySelector('#seo-title-count');
    const titleFill = container.querySelector('#seo-title-fill');
    const descCount = container.querySelector('#seo-desc-count');
    const descFill = container.querySelector('#seo-desc-fill');
    const scoreElem = container.querySelector('#seo-health-score');

    const btnDesktop = container.querySelector('#serp-btn-desktop');
    const btnMobile = container.querySelector('#serp-btn-mobile');

    let isMobile = false;

    btnDesktop.addEventListener('click', () => {
      isMobile = false;
      btnDesktop.classList.add('active');
      btnMobile.classList.remove('active');
      previewCard.style.maxWidth = '100%';
      updatePreview();
    });

    btnMobile.addEventListener('click', () => {
      isMobile = true;
      btnMobile.classList.add('active');
      btnDesktop.classList.remove('active');
      previewCard.style.maxWidth = '380px';
      updatePreview();
    });

    function updatePreview() {
      const kw = (kwInput.value || '').trim().toLowerCase();
      const title = titleInput.value || 'Untitled Page';
      let slug = (slugInput.value || '').trim().toLowerCase().replace(/[^a-z0-9-]/g, '-');
      const desc = descInput.value || '';
      const showRich = richToggle.checked;

      // Update Preview Text
      dispTitle.textContent = title;
      dispDesc.textContent = desc;
      dispUrl.innerHTML = `https://svagdc.edu.in &rsaquo; ${slug || 'page'}`;
      dispRich.style.display = showRich ? 'flex' : 'none';

      // Title metrics
      const tLen = title.length;
      titleCount.textContent = `${tLen} / 60 chars`;
      const tPct = Math.min(100, Math.round((tLen / 60) * 100));
      titleFill.style.width = `${tPct}%`;
      titleFill.className = 'char-counter-fill' + (tLen > 65 ? ' danger' : (tLen > 55 ? '' : (tLen < 30 ? ' warning' : '')));

      // Desc metrics
      const dLen = desc.length;
      descCount.textContent = `${dLen} / 160 chars`;
      const dPct = Math.min(100, Math.round((dLen / 160) * 100));
      descFill.style.width = `${dPct}%`;
      descFill.className = 'char-counter-fill' + (dLen > 165 ? ' danger' : (dLen >= 120 ? '' : (dLen < 70 ? ' warning' : '')));

      // Truncation simulation for SERP preview
      if (tLen > 60) {
        dispTitle.textContent = title.substring(0, 58) + '...';
      }
      if (dLen > 160) {
        dispDesc.textContent = desc.substring(0, 155) + '...';
      }

      // Audit Checklist
      let passedCount = 0;

      // 1. Keyword in Title
      const chkKwTitle = container.querySelector('#chk-kw-title');
      const hasKwTitle = kw && title.toLowerCase().includes(kw);
      setCheckItem(chkKwTitle, hasKwTitle, 'Keyword found in Page Title', 'Focus keyword missing from Title Tag');
      if (hasKwTitle) passedCount++;

      // 2. Title length
      const chkTitleLen = container.querySelector('#chk-title-len');
      const isTitleOptimal = tLen >= 40 && tLen <= 60;
      setCheckItem(chkTitleLen, isTitleOptimal, 'Title length is within optimal 40-60 character limit', tLen > 60 ? 'Title exceeds 60 chars (will be truncated in SERP)' : 'Title is too short (<40 chars)');
      if (isTitleOptimal) passedCount++;

      // 3. Keyword in Desc
      const chkKwDesc = container.querySelector('#chk-kw-desc');
      const hasKwDesc = kw && desc.toLowerCase().includes(kw);
      setCheckItem(chkKwDesc, hasKwDesc, 'Keyword found in Meta Description', 'Focus keyword missing from Meta Description');
      if (hasKwDesc) passedCount++;

      // 4. Desc length
      const chkDescLen = container.querySelector('#chk-desc-len');
      const isDescOptimal = dLen >= 120 && dLen <= 160;
      setCheckItem(chkDescLen, isDescOptimal, 'Meta description length within optimal 120-160 range', dLen > 160 ? 'Meta description exceeds 160 chars' : 'Meta description is too short (<120 chars)');
      if (isDescOptimal) passedCount++;

      // 5. Keyword in Slug
      const chkKwSlug = container.querySelector('#chk-kw-slug');
      const cleanKwSlug = kw.replace(/\s+/g, '-');
      const hasKwSlug = kw && slug.includes(cleanKwSlug);
      setCheckItem(chkKwSlug, hasKwSlug, 'Clean URL slug contains target keyword', 'URL slug should include hyphenated focus keyword');
      if (hasKwSlug) passedCount++;

      // Overall Score
      const scorePct = Math.round((passedCount / 5) * 100);
      scoreElem.textContent = `${scorePct}% Optimized (${passedCount}/5 Checks)`;
      scoreElem.style.color = scorePct >= 80 ? '#10b981' : (scorePct >= 60 ? '#f59e0b' : '#ef4444');
    }

    function setCheckItem(item, passed, passText, failText) {
      if (!item) return;
      item.className = 'seo-check-item ' + (passed ? 'passed' : 'failed');
      item.innerHTML = `<i class="fa-solid fa-${passed ? 'circle-check' : 'circle-xmark'}"></i> <span>${passed ? passText : failText}</span>`;
    }

    [kwInput, titleInput, slugInput, descInput, richToggle].forEach(el => {
      el.addEventListener('input', updatePreview);
      el.addEventListener('change', updatePreview);
    });

    updatePreview();
  }

  window.SeoSimulatorEngine = { mount };

})(window);