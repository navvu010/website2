// Reveal images one-by-one in the hero section with faster interval and loop
window.addEventListener("DOMContentLoaded", () => {
  const loopImages = () => {
    const elements = document.querySelectorAll(".image-loop-timed img, .image-loop-timed .math-symbol");
    elements.forEach(el => {
      el.classList.remove("visible");
      el.classList.add("hidden");
    });
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.remove("hidden");
        el.classList.add("visible");
      }, 300 * index);
    });
  };
  loopImages();
  setInterval(loopImages, 300 * 8);
});

// Animate scroll-triggered sections and images
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const imgs = entry.target.querySelectorAll('.animated-scroll-img');
      imgs.forEach(img => img.classList.add('visible'));
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});

// Auto-scroll through feature cards in a loop (hidden scroll)
const featureContainer = document.querySelector('.feature-slider');
let scrollPosition = 0;

function loopFeatures() {
  if (!featureContainer) return;
  const maxScroll = featureContainer.scrollWidth - featureContainer.clientWidth;
  scrollPosition += 320;
  if (scrollPosition > maxScroll) scrollPosition = 0;
  featureContainer.scrollTo({ left: scrollPosition, behavior: 'smooth' });
}

setInterval(loopFeatures, 3000);

// Allow clicking on feature area to scroll to start
featureContainer?.addEventListener('click', () => {
  featureContainer.scrollTo({ left: 0, behavior: 'smooth' });
});
