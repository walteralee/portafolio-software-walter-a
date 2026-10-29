// =========================================
// CV ONLINE: idioma y tema
// El idioma llega por la dirección (cv.html?lang=en) desde el botón "CV" del portafolio.
// El tema se guarda en localStorage con la misma clave que el portafolio.
// =========================================

const botonIdioma = document.getElementById("cvIdioma");
const botonTema = document.getElementById("cvTema");

const TITULOS = {
  es: "CV · Walter Cutiño Ledo",
  en: "Resume · Walter Cutiño Ledo",
};

// ---------------------------------------------------------------------
// IDIOMA
// ---------------------------------------------------------------------

function ponerIdioma(idioma) {
  document.querySelectorAll(".es").forEach((elemento) => {
    elemento.style.display = idioma === "es" ? "" : "none";
  });

  document.querySelectorAll(".en").forEach((elemento) => {
    elemento.style.display = idioma === "en" ? "" : "none";
  });

  document.documentElement.lang = idioma;
  document.title = TITULOS[idioma];
  botonIdioma.textContent = idioma === "es" ? "🇬🇧" : "🇪🇸";

  // El enlace "Volver" lleva al portafolio en el mismo idioma
  document.querySelector(".cv-volver").href = idioma === "en" ? "index.html?lang=en" : "index.html";

  // La dirección refleja el idioma, así se puede compartir el CV en inglés
  const url = new URL(window.location.href);
  if (idioma === "en") {
    url.searchParams.set("lang", "en");
  } else {
    url.searchParams.delete("lang");
  }
  history.replaceState(null, "", url);
}

botonIdioma.addEventListener("click", () => {
  ponerIdioma(document.documentElement.lang === "es" ? "en" : "es");
});

// ---------------------------------------------------------------------
// TEMA
// ---------------------------------------------------------------------

function leerTema() {
  try {
    return localStorage.getItem("theme");
  } catch {
    return null;
  }
}

function ponerTema(tema) {
  document.body.classList.toggle("light-mode", tema === "light");
  // En claro, el sol es un icono que el CSS colorea en morado (no el emoji naranja)
  if (tema === "light") {
    botonTema.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    botonTema.textContent = "🌙";
  }

  try {
    localStorage.setItem("theme", tema);
  } catch {
    // Si el navegador no deja guardar, el tema funciona igual mientras la página esté abierta
  }
}

botonTema.addEventListener("click", () => {
  ponerTema(document.body.classList.contains("light-mode") ? "dark" : "light");
});

// ---------------------------------------------------------------------
// INICIO
// ---------------------------------------------------------------------

ponerTema(leerTema() === "light" ? "light" : "dark");
ponerIdioma(new URLSearchParams(window.location.search).get("lang") === "en" ? "en" : "es");
