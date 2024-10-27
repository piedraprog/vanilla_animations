const themeButton = document.getElementById('theme-button');
const barsContainer = document.getElementById('bars-container');
let barCount = Math.floor(window.innerHeight / 150); // Número de barras según el alto de la pantalla

// Paleta de colores
const colorPalette = ['#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#FFBD33', '#33FFBD', '#A833FF', '#FFD700', '#FF4500'];
let darkTheme = false;

// Función para elegir un color aleatorio de la paleta
function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colorPalette.length);
  return colorPalette[randomIndex];
}

// Función para crear las barras
function createBars(randomColor) {
  barsContainer.innerHTML = ''; // Limpiar las barras

  for (let i = 0; i < barCount; i++) {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    barsContainer.appendChild(bar);

    // Animación con GSAP
    gsap.fromTo(bar,
      { 
        width: 0, 
        opacity: 1,
        backgroundColor: randomColor, 
      },
      { 
        width: '100%', 
        opacity: 1, 
        duration: 2, 
        delay: i * 0.2, 
        backgroundColor: randomColor, 
        ease: 'power3.inOut',        
        // ease: 'steps(10)',
        // ease: 'back.inOut(5)',
        // y:'-500',        
      }
    )
  }
}

// Cambiar tema con la animación de GSAP
themeButton.addEventListener('click', () => {
  const randomColor = getRandomColor();
  const bgColor = randomColor;

  // Animación de fondo con GSAP
  gsap.to('body', {
    backgroundColor: bgColor,
    duration: 0.1,
    delay: 3
  })

  createBars(randomColor)
});

// setInterval(() => {
//   const randomColor = getRandomColor();
//   const bgColor = randomColor;

//   // Animación de fondo con GSAP
//   gsap.to('body', {
//     backgroundColor: bgColor,
//     duration: 0.1,
//     delay: 3
//   })
//   createBars(randomColor)
// }, 4000)()

// Recalcular número de barras cuando se cambie el tamaño de la pantalla
window.addEventListener('resize', () => {
  barCount = Math.floor(window.innerHeight / 150);
});
