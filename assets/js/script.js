const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');

function removeActiveClass() {
  navLinks.forEach(link => link.classList.remove('active'));
}

function setActiveLink() {
  let scrollPosition = window.scrollY + 150; // offset for fixed sidebar
  sections.forEach(section => {
    if (
      section.offsetTop <= scrollPosition &&
      section.offsetTop + section.offsetHeight > scrollPosition
    ) {
      removeActiveClass();
      const activeLink = document.querySelector(`.nav-links a[href="#${section.id}"]`);
      if(activeLink) activeLink.classList.add('active');
    }
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
      top: targetSection.offsetTop - 100, // offset for fixed sidebar header space
      behavior: 'smooth',
    });
  });
});

window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);
