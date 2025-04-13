// active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
  
    let currentSectionId = '';
  
    sections.forEach(section => {
      const top = window.scrollY;
      const offset = section.offsetTop - 100;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
  
      if (top >= offset && top < offset + height) {
        currentSectionId = id;
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });
  
  // Read More Read Less
  
  function toggleReadMore() {
    const moreText = document.getElementById("moreText");
    const btnText = document.getElementById("readMoreBtn");
    const isVisible = moreText.classList.toggle("show");
  
    btnText.innerHTML = isVisible ? "Read Less" : "Read More";
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read More";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read Less";
      moreText.style.display = "inline";
    }
  }
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });
  
  document.querySelectorAll('.skill-item').forEach(item => {
    observer.observe(item);
  });
  