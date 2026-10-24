// =========================================
// SECCIÓN CONTACTO
// El formulario se envía a Web3Forms, que reenvía el mensaje al Gmail de Walter.
// Así funciona en GitHub Pages sin necesidad de un backend propio.
// =========================================

const URL_WEB3FORMS = "https://api.web3forms.com/submit";

const formContacto = document.getElementById("formContacto");
const botonEnviar = document.getElementById("contactoEnviar");
const estadoContacto = document.getElementById("contactoEstado");
const botonCopiarEmail = document.getElementById("copiarEmail");

// Textos en los dos idiomas de la web
const TEXTOS = {
  es: {
    nombre: "Escribe tu nombre (mínimo 2 letras).",
    email: "Escribe un email válido, por ejemplo nombre@gmail.com.",
    mensaje: "El mensaje es demasiado corto (mínimo 10 caracteres).",
    enviando: "Enviando...",
    enviado: "¡Mensaje enviado! Te responderé lo antes posible.",
    error: "No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme por WhatsApp.",
    sinConexion: "No hay conexión a internet. Revísala e inténtalo de nuevo.",
    asuntoPorDefecto: "Nuevo mensaje",
    copiado: "Copiado",
  },
  en: {
    nombre: "Enter your name (at least 2 letters).",
    email: "Enter a valid email, for example name@gmail.com.",
    mensaje: "The message is too short (at least 10 characters).",
    enviando: "Sending...",
    enviado: "Message sent! I'll get back to you as soon as possible.",
    error: "The message could not be sent. Please try again or message me on WhatsApp.",
    sinConexion: "No internet connection. Please check it and try again.",
    asuntoPorDefecto: "New message",
    copiado: "Copied",
  },
};

const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Lo que se está mostrando ahora, para poder traducirlo si se cambia de idioma
let erroresActuales = {};
let estadoActual = null; // { tipo: "ok" | "error" | "enviando", clave: "enviado" | ... }

function idioma() {
  return document.documentElement.lang === "en" ? "en" : "es";
}

function texto(clave) {
  return TEXTOS[idioma()][clave];
}

// ---------------------------------------------------------------------
// IDIOMA: textos de ayuda (placeholder), errores y estado
// ---------------------------------------------------------------------

function traducirContacto() {
  formContacto.querySelectorAll("[data-placeholder-es]").forEach((campo) => {
    campo.placeholder = campo.dataset[idioma() === "en" ? "placeholderEn" : "placeholderEs"];
  });

  pintarErrores();
  pintarEstado();
}

document.addEventListener("cambio-idioma", traducirContacto);

// ---------------------------------------------------------------------
// VALIDACIÓN
// ---------------------------------------------------------------------

function validar(datos) {
  const errores = {};

  if (datos.name.length < 2) errores.name = "nombre";
  if (!REGEX_EMAIL.test(datos.email)) errores.email = "email";
  if (datos.message.length < 10) errores.message = "mensaje";

  return errores;
}

function pintarErrores() {
  formContacto.querySelectorAll("[data-error]").forEach((aviso) => {
    const campo = aviso.dataset.error;
    const clave = erroresActuales[campo];
    const input = formContacto.elements[campo];

    aviso.textContent = clave ? texto(clave) : "";
    input.classList.toggle("contacto-input-error", Boolean(clave));
    input.setAttribute("aria-invalid", clave ? "true" : "false");
  });
}

// Al escribir en un campo con error, el aviso desaparece
formContacto.addEventListener("input", (evento) => {
  const campo = evento.target.name;
  if (erroresActuales[campo]) {
    delete erroresActuales[campo];
    pintarErrores();
  }
});

// ---------------------------------------------------------------------
// ESTADO DEL ENVÍO
// ---------------------------------------------------------------------

function pintarEstado() {
  estadoContacto.className = "contacto-estado";
  estadoContacto.textContent = "";

  if (!estadoActual) return;

  estadoContacto.textContent = texto(estadoActual.clave);
  estadoContacto.classList.add(`contacto-estado-${estadoActual.tipo}`);
}

function mostrarEstado(tipo, clave) {
  estadoActual = tipo ? { tipo, clave } : null;
  pintarEstado();
}

// ---------------------------------------------------------------------
// ENVÍO
// ---------------------------------------------------------------------

formContacto.addEventListener("submit", async (evento) => {
  evento.preventDefault();

  const datos = {
    name: formContacto.elements.name.value.trim(),
    email: formContacto.elements.email.value.trim(),
    asunto: formContacto.elements.asunto.value.trim(),
    message: formContacto.elements.message.value.trim(),
  };

  erroresActuales = validar(datos);
  pintarErrores();

  if (Object.keys(erroresActuales).length > 0) {
    mostrarEstado(null);
    formContacto.elements[Object.keys(erroresActuales)[0]].focus();
    return;
  }

  // Lo que recibe Web3Forms. "email" es también la dirección a la que se responde desde Gmail
  const envio = {
    access_key: formContacto.elements.access_key.value,
    from_name: formContacto.elements.from_name.value,
    botcheck: formContacto.elements.botcheck.checked,
    subject: `Portafolio · ${datos.asunto || texto("asuntoPorDefecto")} · ${datos.name}`,
    name: datos.name,
    email: datos.email,
    message: datos.message,
  };

  botonEnviar.disabled = true;
  botonEnviar.classList.add("contacto-enviando");
  mostrarEstado("enviando", "enviando");

  try {
    const respuesta = await fetch(URL_WEB3FORMS, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(envio),
    });
    const resultado = await respuesta.json().catch(() => ({}));

    if (respuesta.ok && resultado.success) {
      formContacto.reset();
      mostrarEstado("ok", "enviado");
    } else {
      console.error("Web3Forms respondió con error:", resultado);
      mostrarEstado("error", "error");
    }
  } catch (error) {
    console.error("Error al enviar el formulario:", error);
    mostrarEstado("error", navigator.onLine ? "error" : "sinConexion");
  } finally {
    botonEnviar.disabled = false;
    botonEnviar.classList.remove("contacto-enviando");
  }
});

// ---------------------------------------------------------------------
// COPIAR EMAIL
// ---------------------------------------------------------------------

botonCopiarEmail.addEventListener("click", async () => {
  const email = botonCopiarEmail.dataset.email;

  try {
    await navigator.clipboard.writeText(email);
  } catch {
    // Navegadores antiguos o página sin permisos: se copia con un campo temporal
    const temporal = document.createElement("textarea");
    temporal.value = email;
    document.body.appendChild(temporal);
    temporal.select();
    document.execCommand("copy");
    temporal.remove();
  }

  const icono = botonCopiarEmail.querySelector("i");
  icono.className = "fas fa-check";
  botonCopiarEmail.title = texto("copiado");
  botonCopiarEmail.classList.add("contacto-copiado");

  setTimeout(() => {
    icono.className = "far fa-copy";
    botonCopiarEmail.title = "";
    botonCopiarEmail.classList.remove("contacto-copiado");
  }, 2000);
});

// ---------------------------------------------------------------------
// INICIO
// ---------------------------------------------------------------------

document.getElementById("anioActual").textContent = new Date().getFullYear();
traducirContacto();
