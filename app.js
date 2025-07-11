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
function triggerTypewriter() {
  const heading = document.querySelector('.typewriter');

  // Reset the animation
  heading.style.animation = 'none';
  heading.offsetHeight; // Force reflow
  heading.style.animation = 'typing 2s steps(25, end) forwards, blink 0.7s step-end infinite';
}

// Trigger when page loads
window.addEventListener('DOMContentLoaded', triggerTypewriter);

// Trigger on HOME click
document.querySelector('a[href="#home"]').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
  triggerTypewriter();
});
document.addEventListener("DOMContentLoaded", () => {
  const aboutText = document.getElementById("aboutText");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          aboutText.classList.add("visible");
        } else {
          aboutText.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.3, // when 30% of #aboutText is visible
    }
  );

  observer.observe(aboutText);
});
document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = [document.getElementById("aboutText"), document.getElementById("skillsContent")];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  fadeElements.forEach((el) => {
    if (el) observer.observe(el);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = [
    document.getElementById("aboutText"),
    document.getElementById("skillsContent"),
    document.getElementById("contactContent")
  ];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  fadeElements.forEach((el) => {
    if (el) observer.observe(el);
  });
});
