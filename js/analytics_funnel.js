/**
 * Digital-Marketing-SVGDC: Marketing Funnel & GA4 Attribution Explorer
 * Department of Physics, S.V.A. Govt. Degree College, Srikalahasti
 */

(function() {
  'use strict';

  function mount(container) {
    if (!container) return;

    container.innerHTML = `
      <div class="interactive-tool-card">
        <div class="tool-header-badge">
          <i class="fa-solid fa-filter-circle-dollar"></i> Web Analytics &amp; Attribution
        </div>
        <h3 class="tool-title"><i class="fa-solid fa-chart-pie"></i> Inbound Funnel &amp; GA4 Attribution Explorer</h3>
        <p class="tool-desc">
          Trace how prospective students and customers journey through awareness, consideration, and conversion. Compare single-touch vs multi-touch attribution models to accurately value marketing channel ROI.
        </p>

        <div class="tool-two-col">
          <!-- Left Column: Interactive 5-Stage Funnel -->
          <div>
            <div style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.5rem; letter-spacing: 0.05em;">
              <i class="fa-solid fa-arrow-down-wide-short"></i> Inbound Marketing Conversion Funnel
            </div>

            <div class="funnel-container">
              <div class="funnel-step funnel-s1">
                <span class="funnel-stage-name"><i class="fa-solid fa-bullhorn"></i> 1. Top of Funnel (TOFU): Impressions</span>
                <span class="funnel-stage-stats">100,000 Reach (100%)</span>
              </div>
              <div class="funnel-step funnel-s2">
                <span class="funnel-stage-name"><i class="fa-solid fa-arrow-pointer"></i> 2. Website Traffic: Clicks &amp; Visitors</span>
                <span class="funnel-stage-stats">4,500 Visits (4.5%)</span>
              </div>
              <div class="funnel-step funnel-s3">
                <span class="funnel-stage-name"><i class="fa-solid fa-envelope"></i> 3. Middle of Funnel (MOFU): Leads (MQL)</span>
                <span class="funnel-stage-stats">360 Inquiries (8.0% of Visits)</span>
              </div>
              <div class="funnel-step funnel-s4">
                <span class="funnel-stage-name"><i class="fa-solid fa-user-graduate"></i> 4. Bottom of Funnel (BOFU): Enrolled / Paid</span>
                <span class="funnel-stage-stats">72 Enrolments (20.0% of Leads)</span>
              </div>
              <div class="funnel-step funnel-s5">
                <span class="funnel-stage-name"><i class="fa-solid fa-award"></i> 5. Delight / Flywheel: Advocates</span>
                <span class="funnel-stage-stats">28 Student Ambassadors</span>
              </div>
            </div>

            <div style="background: var(--bg-primary); border: 1px solid var(--border-medium); border-radius: var(--radius-md); padding: 0.75rem; font-size: 0.8rem; color: var(--text-secondary);">
              <i class="fa-solid fa-lightbulb" style="color: #f59e0b;"></i> <strong>Funnel Insight:</strong> Overall end-to-end conversion from initial impression to paid student enrolment is <strong>0.072%</strong>, or <strong>1.60%</strong> of website visitors.
            </div>
          </div>

          <!-- Right Column: Attribution Model Simulator -->
          <div>
            <div style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.5rem; letter-spacing: 0.05em;">
              <i class="fa-solid fa-scale-balanced"></i> Channel Attribution Model Comparator
            </div>

            <div class="tool-form-group">
              <label class="tool-label" for="attr-model-select">
                <span>Select Attribution Model:</span>
              </label>
              <select class="tool-select" id="attr-model-select">
                <option value="last_click">Last-Click Attribution (Traditional Google Standard)</option>
                <option value="first_click">First-Click Attribution (Discovery Focus)</option>
                <option value="linear" selected>Linear Multi-Touch (Equal Credit Across Journey)</option>
                <option value="time_decay">Time-Decay (Higher Weight to Recent Interventions)</option>
                <option value="data_driven">GA4 Data-Driven Attribution (Algorithmic)</option>
              </select>
            </div>

            <!-- Visual Bar Distribution -->
            <div class="attribution-channel-bars" id="attr-bars-mount">
              <!-- Rendered via JS -->
            </div>

            <div id="attr-model-explainer" style="margin-top: 1rem; padding: 0.85rem; border-radius: var(--radius-md); font-size: 0.82rem; line-height: 1.45; background: rgba(2, 132, 199, 0.08); border: 1px solid rgba(2, 132, 199, 0.25); color: #0369a1;">
              <!-- Explainer rendered via JS -->
            </div>
          </div>
        </div>
      </div>
    `;

    const select = container.querySelector('#attr-model-select');
    const barsMount = container.querySelector('#attr-bars-mount');
    const explainer = container.querySelector('#attr-model-explainer');

    const channelColors = {
      'Organic Search (SEO)': '#0284c7',
      'Paid Social Ads (Meta)': '#ea580c',
      'Paid Search (Google Ads)': '#10b981',
      'Email Marketing': '#8b5cf6',
      'Direct / Referral': '#64748b'
    };

    const modelsData = {
      last_click: {
        shares: {
          'Organic Search (SEO)': 15,
          'Paid Social Ads (Meta)': 10,
          'Paid Search (Google Ads)': 45,
          'Email Marketing': 25,
          'Direct / Referral': 5
        },
        desc: '<strong>Last-Click Model:</strong> 100% of conversion credit is assigned to the very final touchpoint before enrollment (predominantly Branded Paid Search and Email campaigns). It undervalues awareness drivers like Social and SEO.'
      },
      first_click: {
        shares: {
          'Organic Search (SEO)': 40,
          'Paid Social Ads (Meta)': 35,
          'Paid Search (Google Ads)': 10,
          'Email Marketing': 5,
          'Direct / Referral': 10
        },
        desc: '<strong>First-Click Model:</strong> 100% of conversion credit is awarded to the initial channel that introduced the student to the institution (e.g. Meta Social Ad or Organic Search query). Highlights top-of-funnel acquisition.'
      },
      linear: {
        shares: {
          'Organic Search (SEO)': 25,
          'Paid Social Ads (Meta)': 25,
          'Paid Search (Google Ads)': 20,
          'Email Marketing': 20,
          'Direct / Referral': 10
        },
        desc: '<strong>Linear Model:</strong> Every single touchpoint in the multi-week customer journey receives equal fractional credit. Fair and balanced for multidisciplinary campaigns.'
      },
      time_decay: {
        shares: {
          'Organic Search (SEO)': 15,
          'Paid Social Ads (Meta)': 18,
          'Paid Search (Google Ads)': 32,
          'Email Marketing': 28,
          'Direct / Referral': 7
        },
        desc: '<strong>Time-Decay Model:</strong> Touchpoints closest in time to the final enrollment decision receive exponential weighting. Ideal for sales cycles with short consideration windows.'
      },
      data_driven: {
        shares: {
          'Organic Search (SEO)': 28,
          'Paid Social Ads (Meta)': 26,
          'Paid Search (Google Ads)': 24,
          'Email Marketing': 16,
          'Direct / Referral': 6
        },
        desc: '<strong>GA4 Data-Driven Attribution (DDA):</strong> Uses machine learning algorithms to compare conversion paths against non-converting journeys, assigning dynamic statistical credit based on true incremental lift.'
      }
    };

    function renderModel() {
      const key = select.value;
      const model = modelsData[key] || modelsData.linear;

      let barsHtml = '';
      for (const [ch, pct] of Object.entries(model.shares)) {
        const color = channelColors[ch] || '#3b82f6';
        barsHtml += `
          <div class="channel-bar-row">
            <div class="channel-label-row">
              <span>${ch}</span>
              <span><strong>${pct}%</strong> credit</span>
            </div>
            <div class="channel-track">
              <div class="channel-fill" style="width: ${pct}%; background: ${color};"></div>
            </div>
          </div>
        `;
      }

      barsMount.innerHTML = barsHtml;
      explainer.innerHTML = `<i class="fa-solid fa-chart-line"></i> ${model.desc}`;
    }

    select.addEventListener('change', renderModel);
    renderModel();
  }

  window.AnalyticsFunnelEngine = { mount };

})(window);