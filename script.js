// Add this JavaScript to trigger the animation

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
});

document.querySelectorAll('.homedetails h1').forEach(el => {
  observer.observe(el);
});

// Skills progress bar animation
const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progressFills = entry.target.querySelectorAll('.progress-fill');
      progressFills.forEach(fill => {
        const width = fill.getAttribute('data-width');
        fill.style.width = width + '%';
      });
      skillsObserver.unobserve(entry.target); // Only animate once
    }
  });
}, { threshold: 0.3 }); // Trigger when 30% of the section is visible

const skillsSection = document.getElementById('skills');
if (skillsSection) {
  skillsObserver.observe(skillsSection);
}
