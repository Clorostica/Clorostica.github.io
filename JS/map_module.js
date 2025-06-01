const toggleBtn = document.getElementById('toggleTheme');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('isLightMode');

  if (body.classList.contains('isLightMode')) {
    toggleBtn.textContent = '☀️'; // 
  } else {
    toggleBtn.textContent = '🌙';
  }
});
