document.addEventListener('DOMContentLoaded', () => {

  const cursor = document.createElement('div');
  Object.assign(cursor.style, {
    position: 'fixed',
    width: '12px',
    height: '12px',
    background: '#64FFDA',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: '9999',
    transform: 'translate(-50%, -50%)',
    transition: 'all 0.15s ease',
    boxShadow: '0 0 10px rgba(100, 255, 218, 0.6)',
    mixBlendMode: 'difference',
  });

  document.body.appendChild(cursor);
  document.body.style.cursor = 'none';

  const interactiveElements = 'a, button, .button, .readMoreBtn, .project-card, input, textarea';


  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });


  document.addEventListener('mouseover', e => {
    if (e.target.closest(interactiveElements)) {
      cursor.style.width = '8px';
      cursor.style.height = '8px';
      cursor.style.background = '#ff6b6b';
      cursor.style.boxShadow = '0 0 8px rgba(255, 107, 107, 0.6)';
    }
  });

  document.addEventListener('mouseout', e => {
    if (e.target.closest(interactiveElements)) {
      cursor.style.width = '12px';
      cursor.style.height = '12px';
      cursor.style.background = '#64FFDA';
      cursor.style.boxShadow = '0 0 10px rgba(100, 255, 218, 0.6)';
    }
  });


  document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
  });
  document.addEventListener('mouseup', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
  });

  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
  });
});
