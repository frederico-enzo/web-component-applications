const button = document.querySelector('.pixel-button');
const container = document.querySelector('.button-container');

// Adiciona o evento ao passar o mouse
button.addEventListener('mouseover', (e) => {
  generatePixelParticles(e);
});

function generatePixelParticles(event) {
  const particleCount = 40; // Número de partículas
  const bounds = button.getBoundingClientRect();
  const x = event.clientX - bounds.left;
  const y = event.clientY - bounds.top;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Define a posição inicial e cor
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.backgroundColor = getRandomPixelColor();

    container.appendChild(particle);

    // Movimento aleatório
    const angle = Math.random() * 2 * Math.PI; // Ângulo em radianos
    const distance = Math.random() * 80; // Distância aleatória
    const duration = Math.random() * 800 + 500; // Duração da animação

    particle.animate(
      [
        { transform: `translate(0, 0)`, opacity: 1 },
        {
          transform: `translate(${Math.cos(angle) * distance}px, ${
            Math.sin(angle) * distance
          }px)`,
          opacity: 0,
        },
      ],
      {
        duration: duration,
        easing: 'ease-out',
        fill: 'forwards',
      }
    );

    // Remove partícula após a animação
    setTimeout(() => {
      particle.remove();
    }, duration);
  }
}

// Retorna uma cor aleatória para os pixels
function getRandomPixelColor() {
  const colors = ['#ff4747', '#47ff47', '#4747ff', '#ffcf47'];
  return colors[Math.floor(Math.random() * colors.length)];
}
