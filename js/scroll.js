const fades = document.querySelectorAll('.fade');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show'); // biar animasi jalan tiap scroll
    }
  });
}, {
  threshold: 0.2
});

fades.forEach(el => observer.observe(el));
