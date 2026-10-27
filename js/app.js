// Enlaces del menú y vistas de la aplicación
const enlacesMenu = document.querySelectorAll(".sidebar a");
const vistasMenu = document.querySelectorAll("main > section");

// Oculta una vista
function ocultarVista(vista) {
  vista.hidden = true;
}

// Quita el resaltado a un enlace
function desactivarEnlace(enlace) {
  enlace.classList.remove("enlace-activo");
}

// Se ejecuta al pulsar un enlace del menú
function mostrarVista(evento) {
  // Evita que el enlace salte a la sección
  evento.preventDefault();

  // Enlace pulsado y vista que indica su href
  const enlacePulsado = evento.currentTarget;
  const destino = enlacePulsado.getAttribute("href");
  const vistaElegida = document.querySelector(destino);

  // Se ocultan todas las vistas y se muestra solo la elegida
  vistasMenu.forEach(ocultarVista);
  vistaElegida.hidden = false;

  // El resaltado pasa al enlace pulsado
  enlacesMenu.forEach(desactivarEnlace);
  enlacePulsado.classList.add("enlace-activo");
}

// Escucha el clic de un enlace
function prepararEnlace(enlace) {
  enlace.addEventListener("click", mostrarVista);
}

// Se prepara cada enlace del menú
enlacesMenu.forEach(prepararEnlace);
