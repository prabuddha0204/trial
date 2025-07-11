window.onload = () => {
  const canvas = document.getElementById("starfield");
  const ctx = canvas.getContext("2d");

  let stars = [];
  const STAR_COUNT = 200;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  function createStars() {
    stars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        speed: Math.random() * 0.5 + 0.2,
      });
    }
  }

  function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";

    stars.forEach((star) => {
      star.y += star.speed;
      if (star.y > canvas.height) {
        star.y = 0;
        star.x = Math.random() * canvas.width;
      }
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(animateStars);
  }

  createStars();
  animateStars();
};

// ✨ Trigger typewriter animation
function triggerTypewriter() {
  const heading = document.querySelector('.typewriter');
  if (!heading) return;

  heading.style.animation = 'none';
  heading.offsetHeight; // Force reflow
  heading.style.animation = 'typing 2s steps(25, end) forwards, blink 0.7s step-end infinite';
}

// 🔁 Run once on page load
window.addEventListener('DOMContentLoaded', () => {
  triggerTypewriter();

  // Handle all #home buttons (desktop + mobile)
document.querySelectorAll('a[href="#home"]').forEach(homeLink => {
  homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });

    // Trigger typewriter only on desktop (screen width > 768px)
    if (window.innerWidth > 768) {
      triggerTypewriter();
    }

    // Always close mobile menu
    closeMenu();
  });
});


  // Fade-in observer
  const fadeElements = [
    document.getElementById("aboutText"),
    document.getElementById("skillsContent"),
    document.getElementById("contactContent")
  ];

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, {
    threshold: 0.3,
  });

  fadeElements.forEach(el => {
    if (el) fadeObserver.observe(el);
  });

  // One-time fade-in animation
  const oneTimeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        oneTimeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".fade-in").forEach(el => {
    oneTimeObserver.observe(el);
  });

  // Hamburger menu toggle
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });
});

// 📱 Close mobile menu helper
function closeMenu() {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  if (hamburger && mobileMenu) {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
  }
}
