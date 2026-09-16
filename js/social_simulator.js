/**
 * Digital-Marketing-SVGDC: Social Media Ad Creative & Engagement Simulator
 * Department of Physics, S.V.A. Govt. Degree College, Srikalahasti
 */

(function() {
  'use strict';

  function mount(container) {
    if (!container) return;

    container.innerHTML = `
      <div class="interactive-tool-card">
        <div class="tool-header-badge">
          <i class="fa-solid fa-share-nodes"></i> Multi-Platform Creative Studio
        </div>
        <h3 class="tool-title"><i class="fa-brands fa-facebook"></i> Social Media Ad Creative &amp; Engagement Simulator</h3>
        <p class="tool-desc">
          Craft high-converting ad copy and visual assets across Facebook, Instagram, LinkedIn, and Twitter/X. Experiment with hooks, emojis, CTA buttons, and simulate engagement rates under algorithmic distribution.
        </p>

        <!-- Platform Tabs -->
        <div class="social-platform-tabs">
          <button type="button" class="platform-tab-btn active" data-platform="facebook"><i class="fa-brands fa-facebook" style="color: #1877f2;"></i> Meta Facebook Feed</button>
          <button type="button" class="platform-tab-btn" data-platform="instagram"><i class="fa-brands fa-instagram" style="color: #e4405f;"></i> Instagram Feed</button>
          <button type="button" class="platform-tab-btn" data-platform="linkedin"><i class="fa-brands fa-linkedin" style="color: #0a66c2;"></i> LinkedIn Sponsored</button>
          <button type="button" class="platform-tab-btn" data-platform="twitter"><i class="fa-brands fa-x-twitter"></i> X / Twitter Post</button>
        </div>

        <div class="tool-two-col">
          <!-- Left Column: Copy & Creative Controls -->
          <div class="tool-inputs-col">
            <div class="tool-form-group">
              <label class="tool-label" for="soc-brand-name">
                <span>Brand / Organization Name:</span>
              </label>
              <input type="text" class="tool-input" id="soc-brand-name" value="S.V.A. Govt. Degree College" placeholder="Brand name">
            </div>

            <div class="tool-form-group">
              <label class="tool-label" for="soc-ad-copy">
                <span>Ad Primary Text / Caption:</span>
                <span class="tool-label-hint" id="soc-copy-count">0 chars</span>
              </label>
              <textarea class="tool-textarea" id="soc-ad-copy" placeholder="Hook your audience with benefits, social proof, and a clear call-to-action...">🚀 Ready to launch your career in Digital Marketing? Join the Department of Physics Skill Enhancement Course! Master SEO, Google Analytics 4, WordPress website creation, and Facebook ad campaigns with live college practicals. 🎓 Enrolment is now open for Semester-III!</textarea>
            </div>

            <div class="tool-form-group">
              <label class="tool-label" for="soc-headline">
                <span>Creative Headline:</span>
              </label>
              <input type="text" class="tool-input" id="soc-headline" value="Digital Marketing Skill Course 2026" placeholder="Catchy headline">
            </div>

            <div class="tool-form-group">
              <label class="tool-label" for="soc-cta-type">
                <span>Call-to-Action (CTA) Button:</span>
              </label>
              <select class="tool-select" id="soc-cta-type">
                <option value="Learn More" selected>Learn More</option>
                <option value="Apply Now">Apply Now</option>
                <option value="Download Syllabus">Download Syllabus</option>
                <option value="Sign Up">Sign Up</option>
                <option value="Contact Us">Contact Us</option>
              </select>
            </div>

            <div class="tool-form-group">
              <label class="tool-label" for="soc-banner-theme">
                <span>Banner Visual Palette:</span>
              </label>
              <select class="tool-select" id="soc-banner-theme">
                <option value="gradient-marketing" selected>Vibrant Marketing Coral &amp; Violet</option>
                <option value="gradient-tech">Deep Tech Indigo &amp; Cyan</option>
                <option value="gradient-emerald">Growth Emerald &amp; Mint</option>
                <option value="gradient-dark">Executive Midnight Dark</option>
              </select>
            </div>
          </div>

          <!-- Right Column: Live Mockup -->
          <div class="tool-preview-col">
            <div style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.5rem; letter-spacing: 0.05em;">
              <i class="fa-solid fa-mobile-screen"></i> Live Creative Rendering
            </div>

            <div class="social-mockup-card" id="social-mock-card">
              <!-- Author Header -->
              <div class="social-author-row">
                <div class="social-author-avatar" id="soc-avatar">SVA</div>
                <div class="social-author-info">
                  <h4 id="soc-disp-brand">S.V.A. Govt. Degree College</h4>
                  <p id="soc-disp-sub">Sponsored &bull; <i class="fa-solid fa-earth-americas"></i></p>
                </div>
              </div>

              <!-- Post Copy -->
              <div class="social-ad-copy" id="soc-disp-copy">
                🚀 Ready to launch your career in Digital Marketing? Join the Department of Physics Skill Enhancement Course! Master SEO, Google Analytics 4, WordPress website creation, and Facebook ad campaigns with live college practicals. 🎓 Enrolment is now open for Semester-III!
              </div>

              <!-- Visual Creative Banner -->
              <div class="social-ad-visual-banner" id="soc-disp-banner" style="background: linear-gradient(135deg, #f97316, #8b5cf6);">
                <span style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.08em; background: rgba(0,0,0,0.3); padding: 0.2rem 0.6rem; border-radius: 99px; margin-bottom: 0.5rem;">Skill Enhancement Course</span>
                <h3 id="soc-disp-headline">Digital Marketing Skill Course 2026</h3>
                <p style="font-size: 0.82rem; opacity: 0.95; max-width: 90%;">S.V.A. Govt. Degree College, Srikalahasti &bull; Dept of Physics</p>
              </div>

              <!-- CTA Bottom Bar -->
              <div class="social-cta-bar">
                <div>
                  <span style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase;">svagdc.edu.in</span>
                  <div style="font-size: 0.82rem; font-weight: 700; color: var(--text-primary);" id="soc-disp-footer-title">Official Portal</div>
                </div>
                <button type="button" class="social-cta-btn" id="soc-disp-cta">Learn More</button>
              </div>

              <!-- Social Engagement Row -->
              <div class="social-actions-bar">
                <span><i class="fa-regular fa-thumbs-up"></i> 1,428 Likes</span>
                <span><i class="fa-regular fa-comment"></i> 184 Comments</span>
                <span><i class="fa-solid fa-share"></i> 96 Shares</span>
              </div>
            </div>

            <!-- Estimated Engagement Benchmark -->
            <div style="margin-top: 1rem; background: var(--bg-primary); border: 1px solid var(--border-medium); border-radius: var(--radius-md); padding: 0.85rem; display: flex; justify-content: space-between; align-items: center;">
              <div>
                <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600;">Simulated Engagement Rate</div>
                <div style="font-size: 1.15rem; font-weight: 800; color: #ea580c;" id="soc-eng-rate">3.42% (High Performing)</div>
              </div>
              <div style="font-size: 0.75rem; color: var(--text-secondary); text-align: right;">
                Benchmark: 1.5% - 2.5%<br><span style="color: #10b981; font-weight: 700;">+36% above industry avg</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Elements
    const brandInput = container.querySelector('#soc-brand-name');
    const copyInput = container.querySelector('#soc-ad-copy');
    const headInput = container.querySelector('#soc-headline');
    const ctaSelect = container.querySelector('#soc-cta-type');
    const themeSelect = container.querySelector('#soc-banner-theme');

    const dispBrand = container.querySelector('#soc-disp-brand');
    const dispSub = container.querySelector('#soc-disp-sub');
    const dispCopy = container.querySelector('#soc-disp-copy');
    const dispHead = container.querySelector('#soc-disp-headline');
    const dispCta = container.querySelector('#soc-disp-cta');
    const dispBanner = container.querySelector('#soc-disp-banner');
    const copyCount = container.querySelector('#soc-copy-count');
    const avatar = container.querySelector('#soc-avatar');

    let currentPlatform = 'facebook';

    const themes = {
      'gradient-marketing': 'linear-gradient(135deg, #f97316, #8b5cf6)',
      'gradient-tech': 'linear-gradient(135deg, #1e3a8a, #0284c7)',
      'gradient-emerald': 'linear-gradient(135deg, #065f46, #10b981)',
      'gradient-dark': 'linear-gradient(135deg, #0f172a, #334155)'
    };

    function updateView() {
      const brand = brandInput.value || 'Organization';
      const copy = copyInput.value || '';
      const head = headInput.value || 'Headline';
      const cta = ctaSelect.value;
      const theme = themeSelect.value;

      dispBrand.textContent = brand;
      dispCopy.textContent = copy;
      dispHead.textContent = head;
      dispCta.textContent = cta;
      copyCount.textContent = `${copy.length} chars`;

      dispBanner.style.background = themes[theme] || themes['gradient-marketing'];

      // Initials for avatar
      const initials = brand.split(' ').map(w => w[0]).filter(Boolean).slice(0, 3).join('').toUpperCase();
      avatar.textContent = initials || 'AD';

      // Platform specific tweaks
      if (currentPlatform === 'facebook') {
        dispSub.innerHTML = 'Sponsored &bull; <i class="fa-solid fa-earth-americas"></i>';
      } else if (currentPlatform === 'instagram') {
        dispSub.innerHTML = 'Sponsored &bull; Original audio';
      } else if (currentPlatform === 'linkedin') {
        dispSub.innerHTML = 'Promoted &bull; Higher Education';
      } else if (currentPlatform === 'twitter') {
        dispSub.innerHTML = '@svagdc &bull; Promoted';
      }
    }

    container.querySelectorAll('.platform-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('.platform-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentPlatform = btn.dataset.platform;
        updateView();
      });
    });

    [brandInput, copyInput, headInput, ctaSelect, themeSelect].forEach(el => {
      el.addEventListener('input', updateView);
      el.addEventListener('change', updateView);
    });

    updateView();
  }

  window.SocialSimulatorEngine = { mount };

})(window);