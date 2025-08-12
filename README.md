# ESPE PWA

Aplicación Web Progresiva (PWA) para la Escuela Superior Politécnica del Ejército (ESPE). Esta PWA ofrece información sobre la institución, su oferta académica, proceso de admisión y contacto, todo con una interfaz basada en Material Design Lite (MDL).

---

## Contenido del Proyecto

- **index.html**  
  Página principal con diseño responsivo usando MDL. Contiene secciones para:
  - Sobre la ESPE (imagen grande y descripción)
  - Misión y Visión en cards lado a lado
  - Oferta Académica (lista dinámica de carreras)
  - Proceso de Admisión
  - Contacto y Footer

- **css/app.css**  
  Estilos personalizados para mejorar la presentación, especialmente de las cards y layout.

- **js/app.js**  
  Lógica JavaScript para:
  - Renderizar dinámicamente las carreras ofertadas.
  - Filtrar carreras con buscador.
  - Mostrar mensajes usando Snackbar de MDL.
  - Cerrar el menú drawer al seleccionar un enlace.
  - Registrar el Service Worker para funcionalidades PWA.

- **sw.js**  
  Service Worker que implementa:
  - Cacheo de archivos esenciales para funcionamiento offline.
  - Estrategia "Cache First" para responder desde caché y actualizar contenido.
  - Manejo de activación para limpiar caches antiguas.

- **assets/img/**  
  Imágenes usadas para la página y las carreras.

- **manifest.json**  
  Manifiesto web que define el nombre de la app, colores, iconos, modo standalone para instalar en dispositivos.

---

## Tecnologías Usadas

- **Material Design Lite (MDL)**: Framework CSS/JS para diseño basado en Material Design.
- **JavaScript Puro**: Para la lógica de interacción y PWA.
- **Service Workers**: Para habilitar cache y modo offline.
- **PWA Manifest**: Permite instalación y personalización de la aplicación.

---

## Instalación y Uso

### Requisitos

- Servidor local o web para servir archivos estáticos (por ejemplo: VSCode Live Server, Apache, Nginx).
- Navegador moderno con soporte para Service Workers (Chrome, Firefox, Edge, Opera).

### Pasos

1. **Clona o descarga el repositorio**

```bash
git clone https://github.com/JordanGuevara/Exam-espe-pwa-V2.git
cd Exam-espe-pwa-V2
npm install
npm run dev
```


