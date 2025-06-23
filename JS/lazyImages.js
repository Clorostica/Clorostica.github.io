const lazyImages = document.querySelectorAll('img.lazy-img');

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove('lazy-img');
      obs.unobserve(img);
    }
  });
});

lazyImages.forEach(img => observer.observe(img));
