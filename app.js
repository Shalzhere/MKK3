// ===== DARK MODE =====
const toggleBtn = document.getElementById('toggleMode');

function getTheme() {
  try { return localStorage.getItem('theme'); } catch (e) { return null; }
}
function saveTheme(value) {
  try { localStorage.setItem('theme', value); } catch (e) { /* storage blocked, ignore */ }
}

if (toggleBtn) {
  if (getTheme() === 'dark') {
    document.body.classList.add('dark-theme');
    toggleBtn.textContent = 'Toggle Light Mode';
  } else {
    toggleBtn.textContent = 'Toggle Dark Mode';
  }

  toggleBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    toggleBtn.textContent = isDark ? 'Toggle Light Mode' : 'Toggle Dark Mode';
    saveTheme(isDark ? 'dark' : 'light');
  });
}

// ===== DROPDOWN =====
const dropBtn = document.getElementById('customDropBtn');
const dropList = document.getElementById('customDropList');

if (dropBtn && dropList) {
  dropBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    dropList.classList.toggle('show');
  });

  window.addEventListener('click', function () {
    dropList.classList.remove('show');
  });
}
