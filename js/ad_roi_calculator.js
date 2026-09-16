/**
 * Digital-Marketing-SVGDC: Ad Budget, ROAS & Performance Calculator
 * Department of Physics, S.V.A. Govt. Degree College, Srikalahasti
 */

(function() {
  'use strict';

  function mount(container) {
    if (!container) return;

    container.innerHTML = `
      <div class="interactive-tool-card">
        <div class="tool-header-badge">
          <i class="fa-solid fa-chart-line"></i> Financial Analytics Sandbox
        </div>
        <h3 class="tool-title"><i class="fa-solid fa-calculator"></i> Digital Ad Spend, ROAS &amp; Performance Forecaster</h3>
        <p class="tool-desc">
          Model digital advertising performance across Google Ads and Meta Facebook Ads. Adjust budget, CTR, conversion rates, and order values to compute CPC, CPM, CPA, ROAS, and net ROI in real time.
        </p>

        <!-- Industry Presets -->
        <div class="industry-presets-bar">
          <span style="font-size: 0.78rem; font-weight: 700; color: var(--text-muted); align-self: center; margin-right: 0.25rem;">
            <i class="fa-solid fa-sliders"></i> Industry Presets:
          </span>
          <button type="button" class="preset-btn active" data-preset="ecommerce">E-Commerce Retail</button>
          <button type="button" class="preset-btn" data-preset="b2b">B2B Software / Services</button>
          <button type="button" class="preset-btn" data-preset="edu">Higher Education / Degrees</button>
          <button type="button" class="preset-btn" data-preset="local">Local Clinic / Gym</button>
        </div>

        <div class="tool-two-col">
          <!-- Left Column: Sliders & Controls -->
          <div class="tool-inputs-col">
            <div class="tool-form-group">
              <label class="tool-label" for="calc-budget">
                <span>Total Campaign Ad Spend (₹):</span>
                <span class="tool-label-hint" id="calc-budget-val">₹25,000</span>
              </label>
              <input type="range" class="tool-input" id="calc-budget" min="1000" max="250000" step="1000" value="25000" style="padding: 0;">
            </div>

            <div class="tool-form-group">
              <label class="tool-label" for="calc-impressions">
                <span>Ad Impressions:</span>
                <span class="tool-label-hint" id="calc-impressions-val">100,000 views</span>
              </label>
              <input type="range" class="tool-input" id="calc-impressions" min="5000" max="500000" step="5000" value="100000" style="padding: 0;">
            </div>

            <div class="tool-form-group">
              <label class="tool-label" for="calc-ctr">
                <span>Click-Through Rate (CTR %):</span>
                <span class="tool-label-hint" id="calc-ctr-val">2.5%</span>
              </label>
              <input type="range" class="tool-input" id="calc-ctr" min="0.2" max="10.0" step="0.1" value="2.5" style="padding: 0;">
            </div>

            <div class="tool-form-group">
              <label class="tool-label" for="calc-cr">
                <span>Landing Page Conversion Rate (CR %):</span>
                <span class="tool-label-hint" id="calc-cr-val">3.0%</span>
              </label>
              <input type="range" class="tool-input" id="calc-cr" min="0.5" max="15.0" step="0.1" value="3.0" style="padding: 0;">
            </div>

            <div class="tool-form-group">
              <label class="tool-label" for="calc-aov">
                <span>Avg. Order Value / Customer Value (₹):</span>
                <span class="tool-label-hint" id="calc-aov-val">₹1,500</span>
              </label>
              <input type="range" class="tool-input" id="calc-aov" min="100" max="25000" step="100" value="1500" style="padding: 0;">
            </div>
          </div>

          <!-- Right Column: KPI Metric Dashboard -->
          <div class="tool-preview-col">
            <div style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.5rem; letter-spacing: 0.05em;">
              <i class="fa-solid fa-gauge-high"></i> Projected Performance Dashboard
            </div>

            <div class="calc-metrics-grid">
              <div class="metric-kpi-card">
                <div class="kpi-title">Total Clicks</div>
                <div class="kpi-value" id="kpi-clicks">2,500</div>
                <div class="kpi-unit">Visitors routed</div>
              </div>

              <div class="metric-kpi-card">
                <div class="kpi-title">Cost Per Click (CPC)</div>
                <div class="kpi-value" id="kpi-cpc" style="color: #0284c7;">₹10.00</div>
                <div class="kpi-unit">Spend per click</div>
              </div>

              <div class="metric-kpi-card">
                <div class="kpi-title">CPM (Cost/1000)</div>
                <div class="kpi-value" id="kpi-cpm">₹250.00</div>
                <div class="kpi-unit">Brand visibility</div>
              </div>

              <div class="metric-kpi-card">
                <div class="kpi-title">Conversions / Leads</div>
                <div class="kpi-value" id="kpi-conversions">75</div>
                <div class="kpi-unit">Sales or signups</div>
              </div>

              <div class="metric-kpi-card">
                <div class="kpi-title">CPA / CAC</div>
                <div class="kpi-value" id="kpi-cpa" style="color: #7c3aed;">₹333.33</div>
                <div class="kpi-unit">Cost per customer</div>
              </div>

              <div class="metric-kpi-card highlight">
                <div class="kpi-title">Total Revenue</div>
                <div class="kpi-value" id="kpi-revenue" style="color: #10b981;">₹112,500</div>
                <div class="kpi-unit">Gross sales</div>
              </div>

              <div class="metric-kpi-card highlight">
                <div class="kpi-title">ROAS (Return)</div>
                <div class="kpi-value" id="kpi-roas" style="color: #ea580c;">4.50x</div>
                <div class="kpi-unit">Revenue / Spend</div>
              </div>

              <div class="metric-kpi-card highlight">
                <div class="kpi-title">Net ROI (%)</div>
                <div class="kpi-value" id="kpi-roi" style="color: #10b981;">+350%</div>
                <div class="kpi-unit">Profit efficiency</div>
              </div>
            </div>

            <!-- Strategic Commentary -->
            <div id="calc-strategic-tip" style="margin-top: 1rem; padding: 0.85rem; border-radius: var(--radius-md); font-size: 0.82rem; line-height: 1.45; background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); color: #065f46;">
              <i class="fa-solid fa-circle-check"></i> <strong>Highly Profitable Campaign:</strong> A ROAS of 4.50x indicates ₹4.50 earned for every single rupee invested in advertising. Excellent scalability!
            </div>
          </div>
        </div>
      </div>
    `;

    // Sliders
    const bInput = container.querySelector('#calc-budget');
    const impInput = container.querySelector('#calc-impressions');
    const ctrInput = container.querySelector('#calc-ctr');
    const crInput = container.querySelector('#calc-cr');
    const aovInput = container.querySelector('#calc-aov');

    // Labels
    const bVal = container.querySelector('#calc-budget-val');
    const impVal = container.querySelector('#calc-impressions-val');
    const ctrVal = container.querySelector('#calc-ctr-val');
    const crVal = container.querySelector('#calc-cr-val');
    const aovVal = container.querySelector('#calc-aov-val');

    // Outputs
    const kClicks = container.querySelector('#kpi-clicks');
    const kCpc = container.querySelector('#kpi-cpc');
    const kCpm = container.querySelector('#kpi-cpm');
    const kConv = container.querySelector('#kpi-conversions');
    const kCpa = container.querySelector('#kpi-cpa');
    const kRev = container.querySelector('#kpi-revenue');
    const kRoas = container.querySelector('#kpi-roas');
    const kRoi = container.querySelector('#kpi-roi');
    const tipElem = container.querySelector('#calc-strategic-tip');

    function calculate() {
      const budget = parseFloat(bInput.value) || 0;
      const impressions = parseFloat(impInput.value) || 0;
      const ctr = parseFloat(ctrInput.value) || 0;
      const cr = parseFloat(crInput.value) || 0;
      const aov = parseFloat(aovInput.value) || 0;

      // Update text displays
      bVal.textContent = `₹${budget.toLocaleString('en-IN')}`;
      impVal.textContent = `${impressions.toLocaleString('en-IN')} views`;
      ctrVal.textContent = `${ctr.toFixed(1)}%`;
      crVal.textContent = `${cr.toFixed(1)}%`;
      aovVal.textContent = `₹${aov.toLocaleString('en-IN')}`;

      const clicks = Math.round(impressions * (ctr / 100));
      const cpc = clicks > 0 ? (budget / clicks) : 0;
      const cpm = impressions > 0 ? ((budget / impressions) * 1000) : 0;
      const conversions = Math.round(clicks * (cr / 100));
      const cpa = conversions > 0 ? (budget / conversions) : 0;
      const revenue = conversions * aov;
      const roas = budget > 0 ? (revenue / budget) : 0;
      const roi = budget > 0 ? (((revenue - budget) / budget) * 100) : 0;

      kClicks.textContent = clicks.toLocaleString('en-IN');
      kCpc.textContent = `₹${cpc.toFixed(2)}`;
      kCpm.textContent = `₹${cpm.toFixed(2)}`;
      kConv.textContent = conversions.toLocaleString('en-IN');
      kCpa.textContent = `₹${cpa.toFixed(2)}`;
      kRev.textContent = `₹${Math.round(revenue).toLocaleString('en-IN')}`;
      kRoas.textContent = `${roas.toFixed(2)}x`;
      kRoi.textContent = `${roi >= 0 ? '+' : ''}${Math.round(roi)}%`;

      kRoi.style.color = roi >= 0 ? '#10b981' : '#ef4444';
      kRoas.style.color = roas >= 2.0 ? '#10b981' : (roas >= 1.0 ? '#f59e0b' : '#ef4444');

      if (roas >= 3.0) {
        tipElem.style.background = 'rgba(16, 185, 129, 0.08)';
        tipElem.style.borderColor = 'rgba(16, 185, 129, 0.25)';
        tipElem.style.color = '#065f46';
        tipElem.innerHTML = `<i class="fa-solid fa-circle-check"></i> <strong>Highly Scalable Campaign:</strong> ROAS is ${roas.toFixed(2)}x. Profit margin is strong. Recommended action: Gradually increase ad spend by 15-20% weekly.`;
      } else if (roas >= 1.2) {
        tipElem.style.background = 'rgba(245, 158, 11, 0.08)';
        tipElem.style.borderColor = 'rgba(245, 158, 11, 0.25)';
        tipElem.style.color = '#92400e';
        tipElem.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> <strong>Moderate Viability:</strong> ROAS of ${roas.toFixed(2)}x covers ad costs but may be vulnerable to overhead. Recommended action: Optimize landing page conversion rate (CRO) and test higher-CTR ad creatives.`;
      } else {
        tipElem.style.background = 'rgba(239, 68, 68, 0.08)';
        tipElem.style.borderColor = 'rgba(239, 68, 68, 0.25)';
        tipElem.style.color = '#991b1b';
        tipElem.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> <strong>Unprofitable Setup:</strong> Campaign is operating at a loss (ROAS: ${roas.toFixed(2)}x, Net ROI: ${Math.round(roi)}%). Action required: Pause unpromising ad sets, tighten audience targeting, and re-engineer the conversion offer.`;
      }
    }

    // Presets
    const presets = {
      ecommerce: { budget: 25000, imp: 100000, ctr: 2.5, cr: 3.0, aov: 1500 },
      b2b: { budget: 50000, imp: 60000, ctr: 1.8, cr: 4.5, aov: 6500 },
      edu: { budget: 30000, imp: 120000, ctr: 3.2, cr: 5.0, aov: 2500 },
      local: { budget: 15000, imp: 45000, ctr: 4.0, cr: 6.5, aov: 1200 }
    };

    container.querySelectorAll('.preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const p = presets[btn.dataset.preset];
        if (p) {
          bInput.value = p.budget;
          impInput.value = p.imp;
          ctrInput.value = p.ctr;
          crInput.value = p.cr;
          aovInput.value = p.aov;
          calculate();
        }
      });
    });

    [bInput, impInput, ctrInput, crInput, aovInput].forEach(el => {
      el.addEventListener('input', calculate);
    });

    calculate();
  }

  window.AdRoiCalculatorEngine = { mount };

})(window);