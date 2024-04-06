document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(-50px)';
  });

  const fadeIn = (element) => {
    element.style.opacity = 1;
    element.style.transform = 'translateY(0)';
    element.style.transition = 'opacity 1s ease, transform 1s ease';
  };

  sections.forEach(section => {
    setTimeout(() => {
      fadeIn(section);
    }, 200); // Agregar un pequeño retraso para que se aplique la animación
  });
});
document.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (sectionTop < windowHeight * 0.8) {
      section.classList.add('fadeIn');
    } else {
      section.classList.remove('fadeIn');
    }
  });
});