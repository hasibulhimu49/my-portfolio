/* Add this JavaScript to trigger the animation */

<script>
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
</script>
