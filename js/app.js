// =========================================
// MODO OSCURO / CLARO
// =========================================

const themeBtn = document.getElementById("themeBtn");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light-mode");
  themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  const lightMode = document.body.classList.contains("light-mode");

  if (lightMode) {
    themeBtn.textContent = "☀️";

    localStorage.setItem("theme", "light");
  } else {
    themeBtn.textContent = "🌙";

    localStorage.setItem("theme", "dark");
  }
});

// =========================================
// TRADUCTOR
// =========================================

const languageBtn = document.getElementById("languageBtn");

let currentLanguage = "es";

function setLanguage(language) {
  const spanish = document.querySelectorAll(".es");
  const english = document.querySelectorAll(".en");

  if (language === "es") {
    spanish.forEach((element) => {
      element.style.display = "";
    });

    english.forEach((element) => {
      element.style.display = "none";
    });

    languageBtn.textContent = "🇬🇧";

    currentLanguage = "es";
  } else {
    spanish.forEach((element) => {
      element.style.display = "none";
    });

    english.forEach((element) => {
      element.style.display = "";
    });

    languageBtn.textContent = "🇪🇸";

    currentLanguage = "en";
  }
}

languageBtn.addEventListener("click", () => {
  if (currentLanguage === "es") {
    setLanguage("en");
  } else {
    setLanguage("es");
  }
});

// =========================================
// INICIALIZAR IDIOMA
// =========================================

setLanguage("es");

// =========================================
// ANIMACIÓN SUAVE AL CARGAR
// =========================================

window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

// =========================================
// MENSAJE CONSOLA
// =========================================

console.log(`
====================================
PORTAFOLIO SOFTWARE
Walter Cutiño
====================================
`);
