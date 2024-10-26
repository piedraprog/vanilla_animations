const themeButton = document.getElementById('theme-button');
const barsContainer = document.getElementById('bars-container');
let barCount = Math.floor(window.innerHeight / 150); // Número de barras según el alto de la pantalla

// Paleta de colores
const colorPalette = ['#FFF6E0', '#F8F4E1', '#0C1844', '#00224D', '#0C1844', '#33FFBD','#A0153E'];

// Función para elegir un color aleatorio de la paleta
function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colorPalette.length);
  return colorPalette[randomIndex];
}

// Función para crear las barras
function createBars() {
  barsContainer.innerHTML = ''; // Limpiar las barras

  // Elegir un color aleatorio de la paleta
  const randomColor = getRandomColor();

  for (let i = 0; i < barCount; i++) {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.animationDelay = `${i * 0.1}s`; // Escalonar la animación
    bar.style.backgroundColor = randomColor; // Color de la barra según el color aleatorio
    barsContainer.appendChild(bar);

    // Agregar un evento que ocurra cuando la animación termine
    bar.addEventListener('animationend', () => {
      // Cambiar el color de fondo cuando la animación termine
      document.body.style.backgroundColor = randomColor; // El fondo toma el color de las barras
    });
  }
}

setInterval(() => {
  createBars();
}, 4000)()


// Recalcular número de barras cuando se cambie el tamaño de la pantalla
window.addEventListener('resize', () => {
  barCount = Math.floor(window.innerHeight / 150); // Recalcular en función del tamaño de la pantalla
});
