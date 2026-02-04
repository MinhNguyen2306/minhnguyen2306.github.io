console.log("About page JS loaded");

<script>
  const faders = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.3 });

  faders.forEach(el => observer.observe(el));
</script>
