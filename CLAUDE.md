# CLAUDE.md · Portafolio Software de Walter A. Cutiño Ledo

## Cómo trabajar con Walter

- Walter es desarrollador (DAM) y tiene TDA: respuestas cortas, concretas y siempre con **un siguiente paso claro**.
- Responder en español.
- No reorganizar ni reescribir código que no se haya pedido.
- **Nunca borrar** archivos que no hayas creado tú en la conversación actual: muévelos a `_papelera/` (en la carpeta contenedora exterior) y avisa.
- **Git**: un commit después de cada cambio, con mensaje descriptivo en español y sin coletillas de atribución (ver skill `guardar-version`).
- **Nunca hacer `git push`** salvo que Walter lo pida expresamente en ese momento.
- Cada decisión, idea, problema o pendiente que cuente Walter se apunta con fecha en "Estado y decisiones" (al final de este archivo).

## Qué es

Portafolio web personal de Walter: una página única (one-page) para enseñar a empresas y clientes quién es, qué tecnologías domina y qué proyectos ha hecho, con enlace a su CV. Inspirado en el portafolio de Fátima Saif (https://fatima-saif.netlify.app/).

Publicado (cuando se hace push) en GitHub Pages:
https://walteralee.github.io/portafolio-software-walter-a/
Repositorio: https://github.com/walteralee/portafolio-software-walter-a (rama `main`).

## Tecnología

- HTML5, CSS3 y JavaScript vainilla. Sin backend, sin frameworks, sin build tool, sin dependencias npm.
- Iconos: Font Awesome por CDN. Vídeos de demo: YouTube embebido en un modal.
- Tema oscuro/claro y español/inglés hechos a mano en `js/app.js` (el idioma se cambia mostrando/ocultando elementos con clase `.es` / `.en`; el tema se guarda en `localStorage`).

## Cómo se arranca

No hay que instalar nada.

- Rápido: abrir `index.html` en el navegador.
- Con servidor local (recomendado para que el vídeo de YouTube y las rutas se comporten como en GitHub Pages):

  ```bash
  python -m http.server 8790
  ```

  y abrir http://localhost:8790

## Estructura de carpetas

Hay **dos carpetas con el mismo nombre**. El repositorio Git es la interior (esta, la que tiene `.git`). La exterior es material de trabajo y **no** está versionada.

```text
PORTAFOLIO SOFTWARE WALTER ALEJANDRO CUTIÑO LEDO/        ← carpeta exterior (sin Git)
├── Falta - Enunciado.txt        lista de requisitos y pendientes de Walter
├── Enlaces de portafolios buenos.txt
├── Secciones/                   textos de contenido por sección
│   ├── Sobre Mi/                estructura y textos del "Sobre mí"
│   └── Proyectos/               una ficha .txt por proyecto + 0_Listado.txt + miniaturas/
├── pronts/                      prompts usados y capturas de referencia (portafolio de Fátima)
├── copia sobrante/              copia antigua de la web (junio 2026)
└── PORTAFOLIO SOFTWARE WALTER ALEJANDRO CUTIÑO LEDO/    ← REPO GIT (esta carpeta)
    ├── index.html               toda la web: menú, Hero, Sobre mí, Proyectos, modal de vídeo, botón WhatsApp
    ├── cv.html                  CV online (vacío de momento)
    ├── css/style.css            estilos de la web
    ├── css/cv.css               estilos del CV (vacío)
    ├── js/app.js                tema, idioma, acordeones de "Sobre mí", scroll del menú, modal de vídeo
    ├── js/cv.js                 lógica del CV (vacío)
    ├── imagenes/                foto, logo y miniaturas de proyectos (imagenes/proyectos/)
    ├── docs/                    CV en PDF (español e inglés) para descargar
    ├── .claude/skills/          skills del proyecto: contexto-proyecto, explica-fichero, guardar-version
    ├── README.md
    └── CLAUDE.md
```

## Estado y decisiones

### 2026-10-03
- **Revisión inicial con Claude.** Repo Git ya existía (15 commits, rama `main`, remoto `origin` en GitHub, último commit 2026-09-30). No se ha tocado código.
- **Decisión:** este CLAUDE.md vive dentro del repo para que quede versionado. En la carpeta exterior hay un CLAUDE.md corto que apunta aquí.
- **Aclaración:** Calendiario (proyecto de software nº 1, objetivo v1 con README y capturas en GitHub antes del **30/10/2026**) **no está en esta carpeta**; aquí solo está el portafolio. En `Secciones/Proyectos/0_Listado.txt` aparece como proyecto futuro ("Calendario").
- **Hecho ya en la web:** menú superior, Hero con foto, nombre, botones de proyectos y descarga de CV, tema oscuro/claro, botón ES/EN, botón flotante de WhatsApp, sección "Sobre mí" con acordeones y fila de tecnologías, sección Proyectos en cuadrícula con modal de vídeo (Flor de Tuna e Iberostar Inventory Sync rellenos).
- **Problemas detectados:**
  - Los enlaces del menú "Tecnologías" (`#tecnologias`) y "Contacto" (`#contacto`) apuntan a secciones que no existen.
  - `cv.html`, `css/cv.css` y `js/cv.js` están vacíos: el enlace "CV" del menú abre una página en blanco.
  - 4 de las 6 tarjetas de Proyectos son de relleno (imagen SVG genérica, mismo vídeo de demo, botón GitHub con `href="#"`).
  - No hay sección de Contacto ni footer.
  - Según Walter, el tema claro "queda horrible".
  - `README.md` está desactualizado: su estructura de carpetas pone `doc/` en vez de `docs/`, no menciona `imagenes/proyectos/` y no tiene captura de la web.
- **Pendiente (orden de prioridad):**
  1. Rellenar las 4 tarjetas de proyecto que faltan (Miniaturas, Tres en raya, Drones y medicamentos, Carnicería Rivas) con imagen, vídeo y enlace real a GitHub.
  2. Crear la sección Contacto y el footer, y arreglar los enlaces rotos del menú.
  3. Hacer el CV online (`cv.html`) o, mientras tanto, que el enlace "CV" abra el PDF.
  4. Arreglar el tema claro y revisar móvil/tablet.
  5. Actualizar README.md (estructura de carpetas y captura de la web).

### 2026-10-07
- **Hecho:** tarjeta de **Miniaturas** completada en español e inglés (sustituye a la de relleno "Dashboard de Métricas"), con captura `imagenes/proyectos/miniaturas.webp` y enlace a https://github.com/walteralee/Miniaturas.
- **Decisión:** Miniaturas mantiene el botón «Ver demo» (Walter lo quiere; de momento con el vídeo de demo genérico) además del botón GitHub.
- Quedan 3 tarjetas de relleno: Tres en raya, Drones y medicamentos y Carnicería Rivas.

### 2026-10-11
- **Hecho:** tarjeta de **Tres en raya** en español e inglés (sustituye a la de relleno "Bot de Automatización", la 4.ª), con miniatura `imagenes/proyectos/tres-en-raya.webp` (las 3 capturas de la app en fila, formato 16:10) y enlace a https://github.com/walteralee/Tres_en_raya_Walter. Mantiene «Ver demo» con el vídeo genérico.
- El repo de Tres en raya quedó listo: README con instalación en 3 pasos y QR, Release v1.0 con `TresEnRaya.apk`, 14 tests.
- Quedan 2 tarjetas de relleno: Drones y medicamentos y Carnicería Rivas.

### 2026-10-12
- **Hecho:** tarjeta de **Drones y Medicamentos** en español e inglés (sustituye a la de relleno "Sistema de Facturación", la 5.ª), con miniatura `imagenes/proyectos/drones-y-medicamentos.webp` (dos capturas de la app en ventanas de navegador, formato 16:10) y enlace a https://github.com/walteralee/Drones-y-Medicamentos-ASP.NET. Mantiene «Ver demo» con el vídeo genérico.
- El repo de Drones quedó listo: arquitectura por capas, `run.bat`/`run.sh` en la raíz, 14 tests, README completo y Release v1.0 con `DronesYMedicamentos-Windows.zip` (no necesita instalar nada ni deja rastro).
- **Pendiente en Drones:** probar Docker (el motor de Docker Desktop no arrancaba en el equipo de Walter).
- Queda 1 tarjeta de relleno: Carnicería Rivas.

### 2026-10-20
- **Hecho:** tarjeta de **Carnicería Rivas** (versión Spring Boot) en español e inglés (sustituye a la de relleno "Plataforma de Tickets", la 6.ª), con miniatura `imagenes/proyectos/carniceria-rivas.webp` (carrito y catálogo en ventanas de navegador, formato 16:10) y enlace a https://github.com/walteralee/springboot-carniceria-rivas. Mantiene «Ver demo» con el vídeo genérico.
- **Ya no quedan tarjetas de relleno** en Proyectos. Las imágenes `imagenes/proyectos/proyecto-02.svg` a `proyecto-06.svg` ya no se usan.
- El repo de Carnicería Rivas quedó listo: backend por capas (controlador, servicio, repositorio, dto, error), catálogo y pedidos con líneas (el total lo calcula el servidor), 10 tests, `run.bat`/`run.sh`, Docker, README completo y versión de Windows con Java incluido (jpackage) que no deja rastro.
- **Pendiente en Carnicería Rivas:** publicar la Release v1.0 (`CarniceriaRivas-Windows.zip` y `carniceria-rivas.jar` de `dist/`) y rellenar el About del repositorio; probar Docker.
- **Pendiente general (siguiente en prioridad):** sección Contacto y footer, y arreglar los enlaces rotos del menú (`#tecnologias`, `#contacto`).

### 2026-10-24
- **Hecho:** sección **Contacto** (`#contacto`) basada en la captura de referencia que pasó Walter: tarjeta de datos (email con botón copiar, ubicación, disponibilidad, Descargar CV y GitHub/LinkedIn/WhatsApp) y formulario (nombre, email, asunto, mensaje) en español/inglés, modo claro/oscuro y móvil. El enlace "Contacto" del menú ya funciona.
- **Decisión:** el formulario se envía con **Web3Forms** (sin backend, gratis hasta 250 mensajes/mes) al Gmail de Walter. La clave pública está en `index.html` (`access_key`) y la lógica en `js/contacto.js` (validación, envío sin recargar, mensajes ES/EN, antispam `botcheck`). Probado con un envío real desde local: Web3Forms respondió OK.
- **Hecho:** **footer** con logo, enlaces, redes, © año automático y "Volver arriba".
- `js/app.js` ahora avisa del cambio de idioma con el evento `cambio-idioma` y pone `lang` en `<html>`.
- Ubicación en Contacto: **Cádiz, España**.
- Walter confirmó que el mensaje de prueba le llegó a Gmail.
- **Pendiente:** arreglar el enlace "Tecnologías" del menú (la fila está duplicada en los bloques ES y EN).
