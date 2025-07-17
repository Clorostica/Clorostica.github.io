const toggleBtn = document.getElementById('toggleTheme');
const body = document.body;

  window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      body.classList.add('isLightMode');
      toggleBtn.textContent = '🌙';
    } else {
      body.classList.remove('isLightMode');
      toggleBtn.textContent = '☀️'; 
    }
  });

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('isLightMode');

    const isLight = body.classList.contains('isLightMode');
    toggleBtn.textContent = isLight ? '🌙' : '☀️';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });

