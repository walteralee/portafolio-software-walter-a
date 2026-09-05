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
// ACORDEONES "SOBRE MÍ" — ANIMACIÓN
// =========================================

function openAboutAccordion(details, body) {
  details.dataset.animating = "true";
  details.open = true;

  body.style.maxHeight = `${body.scrollHeight}px`;

  // "done" evita ejecutar el cierre dos veces si transitionend SÍ llega
  // además del timeout de seguridad de abajo.
  let done = false;
  const finish = () => {
    if (done) return;
    done = true;

    body.style.maxHeight = "none";
    details.dataset.animating = "false";
  };

  body.addEventListener(
    "transitionend",
    (event) => {
      if (event.propertyName !== "max-height") return;
      finish();
    },
    { once: true }
  );

  // Red de seguridad: si transitionend no llega a disparar (puede pasar
  // en algunos navegadores/situaciones), esto evita que el desplegable
  // se quede bloqueado para siempre.
  setTimeout(finish, 350);
}

function closeAboutAccordion(details, body) {
  details.dataset.animating = "true";

  body.style.maxHeight = `${body.scrollHeight}px`;

  // Fuerza el reflow para "fijar" ese alto antes de animar hacia 0;
  // sin esto el navegador puede fusionar ambos cambios y no animar.
  body.offsetHeight;

  body.style.maxHeight = "0px";

  let done = false;
  const finish = () => {
    if (done) return;
    done = true;

    details.open = false;
    details.dataset.animating = "false";
  };

  body.addEventListener(
    "transitionend",
    (event) => {
      if (event.propertyName !== "max-height") return;
      finish();
    },
    { once: true }
  );

  setTimeout(finish, 350);
}

function setAboutAccordionOpenInstantly(details, body, isOpen) {
  details.open = isOpen;
  body.style.maxHeight = isOpen ? "none" : "0px";
}

// Cada idioma (.about-language) tiene su propio set de <details> 01-05.
// Se emparejan por posición para que abrir/cerrar uno sincronice al instante
// su equivalente oculto en el otro idioma, y el traductor no "resetee" el estado.
const aboutAccordionGroups = Array.from(
  document.querySelectorAll(".about-language")
).map((container) =>
  Array.from(container.querySelectorAll(".about-accordion")).map(
    (details) => ({
      details,
      summary: details.querySelector(".about-accordion-summary"),
      body: details.querySelector(".about-accordion-body"),
    })
  )
);

(aboutAccordionGroups[0] || []).forEach((_, index) => {
  const pairedItems = aboutAccordionGroups.map((group) => group[index]);

  pairedItems.forEach((item) => {
    item.summary.addEventListener("click", (event) => {
      event.preventDefault();

      if (item.details.dataset.animating === "true") return;

      const willOpen = !item.details.open;

      pairedItems.forEach((pairedItem) => {
        if (pairedItem === item) {
          if (willOpen) {
            openAboutAccordion(pairedItem.details, pairedItem.body);
          } else {
            closeAboutAccordion(pairedItem.details, pairedItem.body);
          }
        } else {
          setAboutAccordionOpenInstantly(
            pairedItem.details,
            pairedItem.body,
            willOpen
          );
        }
      });
    });
  });
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
