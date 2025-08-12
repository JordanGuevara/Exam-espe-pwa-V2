// Lista de carreras
const carreras = [
  {
    nombre: 'Ingeniería en Software',
    imagen: 'assets/img/software.webp',
    descripcion: 'Formación integral en desarrollo, análisis y gestión de software.',
    duracion: '8 semestres'
  },
  {
    nombre: 'Ingeniería de información',
    imagen: 'assets/img/información.webp',
    descripcion: 'Especialización en sistemas electrónicos y de telecomunicaciones, con enfoque en innovación.',
    duracion: '8 semestres'
  },
  {
    nombre: 'Carrera de Agropecuaria',
    imagen: 'assets/img/agropecuaria.webp',
    descripcion: 'Formación en producción agrícola y ganadera sostenible, con énfasis en innovación tecnológica.',
    duracion: '9 semestres'
  },
  {
    nombre: 'Ingeniería Ambiental',
    imagen: 'assets/img/ambiental.webp',
    descripcion: 'Enfoque en la gestión y conservación del medio ambiente, con técnicas sostenibles.',
    duracion: '8 semestres'
  },
  {
    nombre: 'Ingeniería Electrónica',
    imagen: 'assets/img/electronica.jpg',
    descripcion: 'Especialización en diseño y desarrollo de sistemas electrónicos avanzados.',
    duracion: '8 semestres'
  },
  {
    nombre: 'Ingeniería Mecánica',
    imagen: 'assets/img/mecanica.webp',
    descripcion: 'Formación en diseño, análisis y mantenimiento de sistemas mecánicos.',
    duracion: '8 semestres'
  }
];

function mostrarCarreras(filtro = '') {
  const contenedor = document.getElementById('carreras-list');
  contenedor.innerHTML = '';

  carreras
    .filter(c => c.nombre.toLowerCase().includes(filtro.toLowerCase()))
    .forEach(carrera => {
      const card = document.createElement('div');
      card.className = 'mdl-cell mdl-cell--4-col';

      card.innerHTML = `
        <div class="mdl-card mdl-shadow--2dp product-card">
          <div class="mdl-card__media">
            <img src="${carrera.imagen}" alt="${carrera.nombre}" style="width:100%">
          </div>
          <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">${carrera.nombre}</h2>
          </div>
          <div class="mdl-card__supporting-text">
            ${carrera.descripcion}
          </div>
          <div class="mdl-card__actions mdl-card--border">
            <span><strong>Duración: ${carrera.duracion}</strong></span>
            <button class="mdl-button mdl-js-button mdl-button--colored" onclick="mostrarMensaje('Inscripción en ${carrera.nombre}')">
              Inscribirme
            </button>
          </div>
        </div>
      `;
      contenedor.appendChild(card);
    });
}

// Mostrar mensaje con Snackbar
function mostrarMensaje(mensaje) {
  const snackbarContainer = document.querySelector('#demo-snackbar-example');
  snackbarContainer.MaterialSnackbar.showSnackbar({ message: mensaje });
}

// Filtro de búsqueda
document.getElementById('search-field').addEventListener('input', (e) => {
  mostrarCarreras(e.target.value);
});

// Cerrar drawer al hacer click en enlace
document.querySelectorAll('.mdl-navigation__link').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.mdl-layout').MaterialLayout.toggleDrawer();
  });
});

mostrarCarreras();

// Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => {
      console.log('Service Worker registrado');
    })
    .catch(err => {
      console.error('Error registrando Service Worker:', err);
    });
}

