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

// Cierra un panel del idioma VISIBLE sin animación, desactivando su
// transición un instante para forzar el cambio ya. Sin esto, justo después
// de cerrar un panel seguiría midiendo su altura antigua (aún animando) al
// calcular a dónde hacer scroll, y el destino calculado quedaría más abajo
// de lo real.
function closeAboutAccordionInstantly(details, body) {
  const previousTransition = body.style.transition;

  body.style.transition = "none";
  details.open = false;
  body.style.maxHeight = "0px";

  // Fuerza el reflow para aplicar el cierre ya, antes de restaurar la
  // transición para la próxima apertura/cierre animado.
  body.offsetHeight;

  body.style.transition = previousTransition;
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
// NAVEGACIÓN SUPERIOR — RESET DE ACORDEONES "SOBRE MÍ" + SCROLL
// =========================================

// Índice del panel "02 - Tecnologías" dentro de cada idioma (0 = "01", etc.).
const TECH_PANEL_INDEX = 1;

// El panel "02 - Tecnologías" es el segundo <details> (índice 1) dentro de
// cada idioma. Se reutiliza aboutAccordionGroups para no duplicar el estado
// que ya gestiona el acordeón.
const techAccordionPairedItems = aboutAccordionGroups.map((group) => group[TECH_PANEL_INDEX]);

// Deja abierto ÚNICAMENTE el panel "targetIndex" (o ninguno si es null) en
// el idioma visible, sincronizando al instante la versión oculta del otro
// idioma. Los paneles que se cierran lo hacen sin animación (el usuario se
// va a desplazar fuera de ellos) para que, justo después de llamar a esta
// función, el layout ya sea el definitivo y el scroll se calcule bien. El
// panel objetivo, si lo hay, sí se abre con la animación habitual.
function setAboutAccordionsState(targetIndex) {
  aboutAccordionGroups.forEach((group) => {
    const isVisibleLanguage = group[0].details.closest(".about-language").classList.contains(currentLanguage);

    group.forEach((item, index) => {
      if (!item || item.details.dataset.animating === "true") return;

      const shouldBeOpen = index === targetIndex;

      if (item.details.open === shouldBeOpen) return;

      if (isVisibleLanguage) {
        if (shouldBeOpen) {
          openAboutAccordion(item.details, item.body);
        } else {
          closeAboutAccordionInstantly(item.details, item.body);
        }
      } else {
        setAboutAccordionOpenInstantly(item.details, item.body, shouldBeOpen);
      }
    });
  });
}

function scrollToSectionWithHeaderOffset(sectionEl) {
  const headerHeight = document.querySelector(".header").offsetHeight;
  const targetTop = sectionEl.getBoundingClientRect().top + window.scrollY - headerHeight;

  window.scrollTo({ top: targetTop, behavior: "smooth" });
}

// Por cada ancla del menú: a qué panel de "Sobre mí" debe quedar abierto
// (null = todos cerrados) y a qué elemento hacer scroll.
const navSectionHandlers = {
  "#inicio": { accordionTarget: null, getScrollTarget: () => document.getElementById("inicio") },
  "#about": { accordionTarget: null, getScrollTarget: () => document.getElementById("about") },
  "#tecnologias": {
    accordionTarget: TECH_PANEL_INDEX,
    getScrollTarget: () =>
      techAccordionPairedItems.find((item) => item.details.closest(".about-language").classList.contains(currentLanguage))
        .details,
  },
  "#proyectos": { accordionTarget: null, getScrollTarget: () => document.getElementById("proyectos") },
  "#contacto": { accordionTarget: null, getScrollTarget: () => document.getElementById("contacto") },
};

document.querySelectorAll(".navbar a").forEach((link) => {
  const href = link.getAttribute("href");
  const handler = navSectionHandlers[href];

  if (handler) {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      setAboutAccordionsState(handler.accordionTarget);

      const scrollTarget = handler.getScrollTarget();
      if (scrollTarget) {
        scrollToSectionWithHeaderOffset(scrollTarget);
      }
    });

    return;
  }

  // CV abre cv.html en pestaña nueva (navegación por defecto): solo
  // reseteamos los desplegables de "Sobre mí" antes de que se abra.
  if (href === "cv.html") {
    link.addEventListener("click", () => {
      setAboutAccordionsState(null);
    });
  }
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
