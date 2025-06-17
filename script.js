document.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('h1');
  let pulse = 0;

  setInterval(() => {
    pulse = (pulse + 1) % 100;
    const glow = 10 + 10 * Math.sin(pulse / 10);
    title.style.textShadow = `0 0 ${glow}px #00f0ff`;
  }, 100);
});
