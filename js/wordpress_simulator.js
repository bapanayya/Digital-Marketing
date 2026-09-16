/**
 * Digital-Marketing-SVGDC: WordPress Architecture & Plugin Ecosystem Sandbox
 * Department of Physics, S.V.A. Govt. Degree College, Srikalahasti
 */

(function() {
  'use strict';

  function mount(container) {
    if (!container) return;

    container.innerHTML = `
      <div class="interactive-tool-card">
        <div class="tool-header-badge">
          <i class="fa-brands fa-wordpress"></i> CMS Architecture Simulator
        </div>
        <h3 class="tool-title"><i class="fa-solid fa-gears"></i> WordPress Core &amp; Plugin Ecosystem Sandbox</h3>
        <p class="tool-desc">
          Explore the inner architecture of a production WordPress deployment. Toggle core plugins (SEO, Lead Forms, Security, Caching) and examine how Posts differ fundamentally from Pages in modern web development.
        </p>

        <div class="wp-admin-mockup">
          <!-- Top WordPress Admin Bar -->
          <div class="wp-admin-bar">
            <span><i class="fa-brands fa-wordpress" style="font-size: 1.1rem; color: #ffffff;"></i></span>
            <span><i class="fa-solid fa-house"></i> S.V.A. Govt Degree College Portal</span>
            <span><i class="fa-solid fa-rotate"></i> 0</span>
            <span style="margin-left: auto;"><i class="fa-solid fa-user"></i> Admin &bull; Physics Dept</span>
          </div>

          <div class="wp-admin-split">
            <!-- Left WordPress Admin Sidebar -->
            <div class="wp-admin-sidebar">
              <div class="wp-nav-item active" data-tab="plugins"><i class="fa-solid fa-plug"></i> Plugins (Active: <span id="wp-active-count">0</span>/4)</div>
              <div class="wp-nav-item" data-tab="postsvspages"><i class="fa-solid fa-layer-group"></i> Posts vs Pages</div>
              <div class="wp-nav-item" data-tab="gutenberg"><i class="fa-solid fa-cube"></i> Block Hierarchy</div>
            </div>

            <!-- Main Content Pane -->
            <div class="wp-admin-content" id="wp-tab-content">
              <!-- Tab 1: Plugins Management (Default) -->
              <div id="tab-pane-plugins">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                  <h4 style="font-size: 1rem; font-weight: 700; color: var(--text-primary);">Installed Core Plugins</h4>
                  <div style="font-size: 0.8rem; font-weight: 600; color: var(--text-muted);" id="wp-health-summary">
                    Site Health: <strong style="color: #f59e0b;">Fair (Need Essential Plugins)</strong>
                  </div>
                </div>

                <!-- Plugin 1: Yoast SEO -->
                <div class="plugin-toggle-card">
                  <div class="plugin-info">
                    <h5><i class="fa-solid fa-magnifying-glass" style="color: #ea580c;"></i> Yoast SEO / Rank Math</h5>
                    <p>Enables XML sitemaps, on-page meta tag auditing, title rewriting, and Google snippet preview.</p>
                  </div>
                  <button type="button" class="btn-wp-toggle" data-plugin="seo">Activate</button>
                </div>

                <!-- Plugin 2: WPForms -->
                <div class="plugin-toggle-card">
                  <div class="plugin-info">
                    <h5><i class="fa-solid fa-envelope-open-text" style="color: #0284c7;"></i> WPForms (Contact &amp; Lead Gen)</h5>
                    <p>Drag-and-drop contact form builder for customer inquiries, lead capture, and survey submissions.</p>
                  </div>
                  <button type="button" class="btn-wp-toggle" data-plugin="forms">Activate</button>
                </div>

                <!-- Plugin 3: Wordfence Security -->
                <div class="plugin-toggle-card">
                  <div class="plugin-info">
                    <h5><i class="fa-solid fa-shield-halved" style="color: #10b981;"></i> Wordfence Security &amp; Firewall</h5>
                    <p>Web application firewall (WAF), malware scanner, brute-force login shielding, and IP blocklisting.</p>
                  </div>
                  <button type="button" class="btn-wp-toggle" data-plugin="security">Activate</button>
                </div>

                <!-- Plugin 4: WP Super Cache -->
                <div class="plugin-toggle-card">
                  <div class="plugin-info">
                    <h5><i class="fa-solid fa-bolt" style="color: #f59e0b;"></i> WP Super Cache / WP Rocket</h5>
                    <p>Generates static HTML files to bypass heavy PHP/MySQL queries and accelerate Core Web Vitals.</p>
                  </div>
                  <button type="button" class="btn-wp-toggle" data-plugin="cache">Activate</button>
                </div>

                <!-- Real-Time Metrics Bar -->
                <div style="margin-top: 1.25rem; display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.65rem; text-align: center;">
                  <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); border-radius: var(--radius-md); padding: 0.65rem;">
                    <div style="font-size: 0.7rem; color: var(--text-muted); font-weight: 700;">SEO SCORE</div>
                    <div style="font-size: 1.15rem; font-weight: 800; color: #ef4444;" id="wp-stat-seo">42%</div>
                  </div>
                  <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); border-radius: var(--radius-md); padding: 0.65rem;">
                    <div style="font-size: 0.7rem; color: var(--text-muted); font-weight: 700;">LEAD FORMS</div>
                    <div style="font-size: 1.15rem; font-weight: 800; color: #ef4444;" id="wp-stat-forms">Disabled</div>
                  </div>
                  <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); border-radius: var(--radius-md); padding: 0.65rem;">
                    <div style="font-size: 0.7rem; color: var(--text-muted); font-weight: 700;">FIREWALL</div>
                    <div style="font-size: 1.15rem; font-weight: 800; color: #ef4444;" id="wp-stat-sec">Basic</div>
                  </div>
                  <div style="background: var(--bg-surface); border: 1px solid var(--border-medium); border-radius: var(--radius-md); padding: 0.65rem;">
                    <div style="font-size: 0.7rem; color: var(--text-muted); font-weight: 700;">PAGE SPEED</div>
                    <div style="font-size: 1.15rem; font-weight: 800; color: #f59e0b;" id="wp-stat-speed">1.95s</div>
                  </div>
                </div>
              </div>

              <!-- Tab 2: Posts vs Pages (Hidden by default) -->
              <div id="tab-pane-postsvspages" style="display: none;">
                <h4 style="font-size: 1rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.75rem;">WordPress Posts vs Pages Matrix</h4>
                <div style="overflow-x: auto;">
                  <table style="width: 100%; font-size: 0.82rem; border-collapse: collapse;">
                    <thead>
                      <tr style="background: var(--bg-surface); border-bottom: 2px solid var(--border-medium);">
                        <th style="padding: 0.5rem; text-align: left;">Architectural Dimension</th>
                        <th style="padding: 0.5rem; text-align: left; color: #ea580c;">Posts (Articles / News)</th>
                        <th style="padding: 0.5rem; text-align: left; color: #0284c7;">Pages (Static Documents)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style="border-bottom: 1px solid var(--border-subtle);">
                        <td style="padding: 0.5rem; font-weight: 600;">Time Sensitivity</td>
                        <td style="padding: 0.5rem;">Time-sensitive; reverse chronological order</td>
                        <td style="padding: 0.5rem;">Timeless / evergreen content</td>
                      </tr>
                      <tr style="border-bottom: 1px solid var(--border-subtle);">
                        <td style="padding: 0.5rem; font-weight: 600;">Taxonomy Organization</td>
                        <td style="padding: 0.5rem;">Categorized using Categories &amp; Tags</td>
                        <td style="padding: 0.5rem;">Hierarchical (Parent &amp; Child pages)</td>
                      </tr>
                      <tr style="border-bottom: 1px solid var(--border-subtle);">
                        <td style="padding: 0.5rem; font-weight: 600;">Social Syndication</td>
                        <td style="padding: 0.5rem;">Included in RSS feed; pingbacks enabled</td>
                        <td style="padding: 0.5rem;">Excluded from standard RSS feeds</td>
                      </tr>
                      <tr style="border-bottom: 1px solid var(--border-subtle);">
                        <td style="padding: 0.5rem; font-weight: 600;">College Portal Examples</td>
                        <td style="padding: 0.5rem;">"Admissions Notice 2026", "Guest Lecture Event"</td>
                        <td style="padding: 0.5rem;">"About Department", "Syllabus", "Contact Us"</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- Tab 3: Gutenberg Block Hierarchy -->
              <div id="tab-pane-gutenberg" style="display: none;">
                <h4 style="font-size: 1rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem;">Modern Gutenberg Modular Block Model</h4>
                <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 1rem;">
                  Since WordPress 5.0, content is constructed using standalone modular blocks rather than monolithic text boxes.
                </p>
                <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                  <div style="border: 1px dashed #0284c7; padding: 0.5rem 0.85rem; border-radius: var(--radius-sm); font-size: 0.8rem; background: rgba(2,132,199,0.05);">
                    <i class="fa-solid fa-heading" style="color: #0284c7;"></i> <strong>Core / Heading Block (H1 / H2):</strong> SEO-critical heading semantics
                  </div>
                  <div style="border: 1px dashed #ea580c; padding: 0.5rem 0.85rem; border-radius: var(--radius-sm); font-size: 0.8rem; background: rgba(234,88,12,0.05);">
                    <i class="fa-solid fa-paragraph" style="color: #ea580c;"></i> <strong>Core / Paragraph Block:</strong> Fluid typography and inline formatting
                  </div>
                  <div style="border: 1px dashed #10b981; padding: 0.5rem 0.85rem; border-radius: var(--radius-sm); font-size: 0.8rem; background: rgba(16,185,129,0.05);">
                    <i class="fa-solid fa-image" style="color: #10b981;"></i> <strong>Core / Image &amp; Media Block:</strong> WebP compression, lazy loading &amp; Alt tags
                  </div>
                  <div style="border: 1px dashed #8b5cf6; padding: 0.5rem 0.85rem; border-radius: var(--radius-sm); font-size: 0.8rem; background: rgba(139,92,246,0.05);">
                    <i class="fa-solid fa-square-check" style="color: #8b5cf6;"></i> <strong>Core / Buttons Block:</strong> High-contrast CTA conversion triggers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // State for plugins
    const plugins = {
      seo: false,
      forms: false,
      security: false,
      cache: false
    };

    const countElem = container.querySelector('#wp-active-count');
    const healthElem = container.querySelector('#wp-health-summary');
    const statSeo = container.querySelector('#wp-stat-seo');
    const statForms = container.querySelector('#wp-stat-forms');
    const statSec = container.querySelector('#wp-stat-sec');
    const statSpeed = container.querySelector('#wp-stat-speed');

    function updatePluginStats() {
      const activeCount = Object.values(plugins).filter(Boolean).length;
      countElem.textContent = activeCount;

      statSeo.textContent = plugins.seo ? '98% (Yoast)' : '42%';
      statSeo.style.color = plugins.seo ? '#10b981' : '#ef4444';

      statForms.textContent = plugins.forms ? 'Active (WPForms)' : 'Disabled';
      statForms.style.color = plugins.forms ? '#10b981' : '#ef4444';

      statSec.textContent = plugins.security ? 'WAF Armed' : 'Basic';
      statSec.style.color = plugins.security ? '#10b981' : '#ef4444';

      statSpeed.textContent = plugins.cache ? '0.38s (Fast)' : '1.95s';
      statSpeed.style.color = plugins.cache ? '#10b981' : '#f59e0b';

      if (activeCount === 4) {
        healthElem.innerHTML = 'Site Health: <strong style="color: #10b981;"><i class="fa-solid fa-circle-check"></i> Excellent (Production Ready)</strong>';
      } else if (activeCount >= 2) {
        healthElem.innerHTML = 'Site Health: <strong style="color: #f59e0b;"><i class="fa-solid fa-circle-half-stroke"></i> Good (Optimize Further)</strong>';
      } else {
        healthElem.innerHTML = 'Site Health: <strong style="color: #ef4444;"><i class="fa-solid fa-triangle-exclamation"></i> Critical Gaps</strong>';
      }
    }

    container.querySelectorAll('.btn-wp-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const pKey = btn.dataset.plugin;
        plugins[pKey] = !plugins[pKey];
        if (plugins[pKey]) {
          btn.classList.add('active');
          btn.textContent = 'Deactivate';
        } else {
          btn.classList.remove('active');
          btn.textContent = 'Activate';
        }
        updatePluginStats();
      });
    });

    // Tab switching
    container.querySelectorAll('.wp-nav-item').forEach(item => {
      item.addEventListener('click', () => {
        container.querySelectorAll('.wp-nav-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        const tab = item.dataset.tab;

        container.querySelector('#tab-pane-plugins').style.display = tab === 'plugins' ? 'block' : 'none';
        container.querySelector('#tab-pane-postsvspages').style.display = tab === 'postsvspages' ? 'block' : 'none';
        container.querySelector('#tab-pane-gutenberg').style.display = tab === 'gutenberg' ? 'block' : 'none';
      });
    });
  }

  window.WordPressSimulatorEngine = { mount };

})(window);