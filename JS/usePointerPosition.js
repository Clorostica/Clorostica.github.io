let mousePosition = { x: 0, y: 0 };

function updateMousePosition(event) {
  mousePosition.x = event.clientX;
  mousePosition.y = event.clientY;
  document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`);
  document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`);
}

document.addEventListener('mousemove', updateMousePosition);
document.addEventListener('pointermove', updateMousePosition);

document.addEventListener('DOMContentLoaded', function() {
  const cursor = document.createElement('div');
  cursor.style.cssText = `
    position: fixed;
    width: 12px;
    height: 12px;
    background: #64FFDA;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform: translate(-50%, -50%);
    box-shadow: 0 0 10px rgba(100, 255, 218, 0.6), 0 0 20px rgba(100, 255, 218, 0.3);
    mix-blend-mode: difference;
  `;
  
  const cursorRing = document.createElement('div');
  cursorRing.style.cssText = `
    position: fixed;
    width: 40px;
    height: 40px;
    border: 2px solid rgba(100, 255, 218, 0.3);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9998;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform: translate(-50%, -50%);
  `;
  
  document.body.appendChild(cursor);
  document.body.appendChild(cursorRing);
  document.body.style.cursor = 'none';
  
  let cursorX = 0, cursorY = 0, ringX = 0, ringY = 0;
  
  document.addEventListener('mousemove', function(e) {
    cursorX = e.clientX;
    cursorY = e.clientY;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
  });
  
  function animateRing() {
    ringX += (cursorX - ringX) * 0.15;
    ringY += (cursorY - ringY) * 0.15;
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();
  
  const interactiveElements = 'a, button, .button, .readMoreBtn, .project-card, input, textarea';
  
  document.addEventListener('mouseover', function(e) {
    if (e.target.closest(interactiveElements)) {
      cursor.style.width = '8px';
      cursor.style.height = '8px';
      cursor.style.background = '#ff6b6b';
      cursorRing.style.width = '60px';
      cursorRing.style.height = '60px';
      cursorRing.style.borderColor = 'rgba(255, 107, 107, 0.5)';
    }
  });
  
  document.addEventListener('mouseout', function(e) {
    if (e.target.closest(interactiveElements)) {
      cursor.style.width = '12px';
      cursor.style.height = '12px';
      cursor.style.background = '#64FFDA';
      cursorRing.style.width = '40px';
      cursorRing.style.height = '40px';
      cursorRing.style.borderColor = 'rgba(100, 255, 218, 0.3)';
    }
  });
  
  document.addEventListener('mousedown', function() {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
    cursorRing.style.transform = 'translate(-50%, -50%) scale(1.2)';
  });
  
  document.addEventListener('mouseup', function() {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    cursorRing.style.transform = 'translate(-50%, -50%) scale(1)';
  });
  
  document.addEventListener('mouseleave', function() {
    cursor.style.opacity = '0';
    cursorRing.style.opacity = '0';
  });
  
  document.addEventListener('mouseenter', function() {
    cursor.style.opacity = '1';
    cursorRing.style.opacity = '1';
  });
});
