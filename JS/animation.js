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

  window.addEventListener("scroll", reveal);

document.addEventListener("DOMContentLoaded", () => {
    const togglebtn = document.getElementById("toggleTheme");
    let isDarkMode = false;

    togglebtn.addEventListener("click", () => {
        isDarkMode = !isDarkMode;

        if (isDarkMode) {
            document.body.classList.add("isDarkMode");
            togglebtn.textContent = "☀️";  
        } else {
            document.body.classList.remove("isDarkMode");
            togglebtn.textContent = "🌙"; 
        }
    });
});
