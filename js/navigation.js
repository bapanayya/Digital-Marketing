/**
 * Responsive Sidebar Navigation & State Tracker
 * Department of Physics, S.V.A. Govt. Degree College, Srikalahasti
 */

(function(window) {
  'use strict';

  const STORAGE_PREFIX = 'svagdc_comp_';
  let storageKey = STORAGE_PREFIX + window.location.pathname.replace(/[^a-zA-Z0-9]/g, '_');
  let completedTopics = new Set();

  function loadCompleted() {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) completedTopics = new Set(JSON.parse(saved));
    } catch (e) {
      completedTopics = new Set();
    }
  }

  function saveCompleted() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(Array.from(completedTopics)));
    } catch (e) {}
  }

  function renderSidebar(activeTopicId) {
    const container = document.getElementById('curriculum-tree') || document.getElementById('curriculum-nav-container');
    if (!container || !window.CurriculumData) return;

    const categories = window.CurriculumData.getCategories();
    const allTopics = window.CurriculumData.getTopics();

    let html = '';
    categories.forEach(cat => {
      html += `
        <div class="category-group" id="group_${cat.id}" data-category-id="${cat.id}">
          <div class="category-header" onclick="window.NavigationTracker.toggleCategory('${cat.id}')">
            <div class="category-header-title">
              <i class="${cat.icon || 'fa-solid fa-folder'}"></i>
              <span>${cat.title}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 6px;">
              <span class="category-badge">${cat.topics.length}</span>
              <i class="fa-solid fa-chevron-down category-arrow"></i>
            </div>
          </div>
          <ul class="topic-list">
      `;

      cat.topics.forEach(tid => {
        const t = allTopics[tid];
        if (!t) return;
        const isActive = tid === activeTopicId;
        const isDone = completedTopics.has(tid);

        html += `
          <li class="topic-item ${isActive ? 'active' : ''} ${isDone ? 'completed' : ''}" id="nav_item_${tid}">
            <a href="#${tid}" title="${t.title}" onclick="window.NavigationTracker.closeMobileSidebar()">
              <span class="topic-status-icon">
                <i class="${isDone ? 'fa-solid fa-circle-check' : (isActive ? 'fa-solid fa-circle-play' : 'fa-regular fa-circle')}"></i>
              </span>
              <span class="topic-title-text">${t.title}</span>
              ${t.toolType ? '<span class="interactive-pill" title="Interactive Simulator Included"><i class="fa-solid fa-bolt"></i> Lab</span>' : ''}
            </a>
          </li>
        `;
      });

      html += `
          </ul>
        </div>
      `;
    });

    container.innerHTML = html;

    if (typeof window.renderMathInElement === 'function') {
      try {
        window.renderMathInElement(container, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false }
          ],
          throwOnError: false
        });
      } catch(e) {}
    }

    // Auto-expand the active topic's category
    if (activeTopicId && allTopics[activeTopicId] && allTopics[activeTopicId].category) {
      expandCategory(allTopics[activeTopicId].category);
    }
  }

  function toggleCategory(catId) {
    const el = document.getElementById(`group_${catId}`);
    if (el) el.classList.toggle('collapsed');
  }

  function expandCategory(catId) {
    const el = document.getElementById(`group_${catId}`);
    if (el) el.classList.remove('collapsed');
  }

  function markCompleted(topicId) {
    if (!topicId) return;
    completedTopics.add(topicId);
    saveCompleted();
    const item = document.getElementById(`nav_item_${topicId}`);
    if (item) {
      item.classList.add('completed');
      const icon = item.querySelector('.topic-status-icon i');
      if (icon) icon.className = 'fa-solid fa-circle-check';
    }
  }

  // Sidebar Resizing & Preset Widths
  function initSidebarResizer() {
    const sidebar = document.getElementById('app-sidebar');
    const resizer = document.getElementById('sidebar-resizer');
    const collapseBtn = document.getElementById('sidebar-collapse-btn');
    const floatingToggle = document.getElementById('sidebar-floating-toggle');
    const widthButtons = document.querySelectorAll('.btn-width-preset');

    const STORAGE_WIDTH_KEY = 'svagdc_sidebar_width';
    const savedWidth = localStorage.getItem(STORAGE_WIDTH_KEY);
    if (savedWidth && sidebar) {
      sidebar.style.width = `${savedWidth}px`;
      document.documentElement.style.setProperty('--sidebar-width', `${savedWidth}px`);
      updateActivePresetBtn(parseInt(savedWidth, 10));
    }

    widthButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const w = parseInt(btn.dataset.width, 10);
        if (sidebar && !isNaN(w)) {
          sidebar.style.width = `${w}px`;
          document.documentElement.style.setProperty('--sidebar-width', `${w}px`);
          localStorage.setItem(STORAGE_WIDTH_KEY, w);
          updateActivePresetBtn(w);
        }
      });
    });

    function updateActivePresetBtn(w) {
      widthButtons.forEach(b => {
        if (parseInt(b.dataset.width, 10) === w) b.classList.add('active');
        else b.classList.remove('active');
      });
    }

    if (collapseBtn && sidebar) {
      collapseBtn.addEventListener('click', () => {
        sidebar.classList.add('collapsed-desktop');
        if (floatingToggle) floatingToggle.classList.add('visible');
      });
    }

    if (floatingToggle && sidebar) {
      floatingToggle.addEventListener('click', () => {
        sidebar.classList.remove('collapsed-desktop');
        floatingToggle.classList.remove('visible');
      });
    }

    if (resizer && sidebar) {
      let isDragging = false;

      resizer.addEventListener('mousedown', () => {
        isDragging = true;
        document.body.classList.add('resizing-sidebar');
      });

      document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const newWidth = Math.max(200, Math.min(500, e.clientX));
        sidebar.style.width = `${newWidth}px`;
        document.documentElement.style.setProperty('--sidebar-width', `${newWidth}px`);
      });

      document.addEventListener('mouseup', () => {
        if (isDragging) {
          isDragging = false;
          document.body.classList.remove('resizing-sidebar');
          const finalW = parseInt(sidebar.style.width, 10);
          if (!isNaN(finalW)) {
            localStorage.setItem(STORAGE_WIDTH_KEY, finalW);
            updateActivePresetBtn(finalW);
          }
        }
      });

      resizer.addEventListener('dblclick', () => {
        sidebar.style.width = '290px';
        document.documentElement.style.setProperty('--sidebar-width', '290px');
        localStorage.setItem(STORAGE_WIDTH_KEY, 290);
        updateActivePresetBtn(290);
      });
    }
  }

  // Live Sidebar Filter
  function initSidebarFilter() {
    const input = document.getElementById('sidebar-search-input') || document.getElementById('curriculum-search');
    if (!input) return;

    input.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      const groups = document.querySelectorAll('.category-group');

      groups.forEach(g => {
        let hasMatch = false;
        const items = g.querySelectorAll('.topic-item');
        items.forEach(it => {
          const text = it.textContent.toLowerCase();
          if (!q || text.includes(q)) {
            it.style.display = '';
            hasMatch = true;
          } else {
            it.style.display = 'none';
          }
        });

        if (hasMatch) {
          g.style.display = '';
          if (q) g.classList.remove('collapsed');
        } else {
          g.style.display = 'none';
        }
      });
    });
  }

  // Course Dropdown Menu Handler
  function initCourseDropdown() {
    const dropdown = document.getElementById('course-dropdown');
    const dropdownBtn = document.getElementById('course-dropdown-btn');
    if (!dropdown || !dropdownBtn) return;
    if (dropdownBtn.dataset.hasDropdownInit === 'true') return;
    dropdownBtn.dataset.hasDropdownInit = 'true';

    dropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('active');
      const isExpanded = dropdown.classList.contains('active');
      dropdownBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
        dropdownBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && dropdown.classList.contains('active')) {
        dropdown.classList.remove('active');
        dropdownBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on link click
    const links = dropdown.querySelectorAll('.course-dropdown-item');
    links.forEach(l => {
      l.addEventListener('click', () => {
        dropdown.classList.remove('active');
        dropdownBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Reading Progress Bar
  function initReadingProgress() {
    const bar = document.getElementById('read-progress-bar');
    const main = document.getElementById('app-main');
    if (!bar || !main) return;

    main.addEventListener('scroll', () => {
      const scrollHeight = main.scrollHeight - main.clientHeight;
      if (scrollHeight > 0) {
        const percent = (main.scrollTop / scrollHeight) * 100;
        bar.style.width = `${percent}%`;
      } else {
        bar.style.width = '0%';
      }
    });
  }

  function toggleMobileSidebar() {
    const sb = document.getElementById('app-sidebar');
    const bd = document.getElementById('sidebar-backdrop');
    if (sb) sb.classList.toggle('open');
    if (bd) bd.classList.toggle('active');
  }

  function closeMobileSidebar() {
    const sb = document.getElementById('app-sidebar');
    const bd = document.getElementById('sidebar-backdrop');
    if (sb) sb.classList.remove('open');
    if (bd) bd.classList.remove('active');
  }

  let isNavTrackerInitialized = false;
  function init() {
    if (isNavTrackerInitialized) return;
    isNavTrackerInitialized = true;
    loadCompleted();
    initSidebarResizer();
    initSidebarFilter();
    initCourseDropdown();
    initReadingProgress();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.NavigationTracker = {
    init: init,
    renderSidebar: renderSidebar,
    toggleCategory: toggleCategory,
    expandCategory: expandCategory,
    markCompleted: markCompleted,
    toggleMobileSidebar: toggleMobileSidebar,
    closeMobileSidebar: closeMobileSidebar,
    initSidebarResizer: initSidebarResizer,
    initSidebarFilter: initSidebarFilter,
    initCourseDropdown: initCourseDropdown,
    initReadingProgress: initReadingProgress
  };

})(window);
