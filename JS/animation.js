function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

function toggleDetails(buttonElement) {
    const targetId = buttonElement.getAttribute('data-target');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
        const isHidden = targetElement.classList.contains('hidden');
        
        if (isHidden) {
            targetElement.classList.remove('hidden');
            targetElement.classList.add('show');
            buttonElement.textContent = 'Leer menos';
        } else {
            targetElement.classList.add('hidden');
            targetElement.classList.remove('show');
            buttonElement.textContent = 'Leer más';
        }
    }
}
