const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

// Detect if on mobile
function isMobile() {
  return window.innerWidth <= 768;
}

toggleBtn.addEventListener('click', () => {
  if (isMobile()) {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
  } else {
    sidebar.classList.toggle('collapsed');
  }
});

overlay.addEventListener('click', () => {
  sidebar.classList.remove('open');
  overlay.classList.remove('show');
});
