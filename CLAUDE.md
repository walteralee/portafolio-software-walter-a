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
- **Hecho:** **footer** sencillo inspirado en el de Fátima (decisión de Walter): línea divisoria arriba y una fila con "© año Walter Alejandro Cutiño Ledo. Hecho con código y mucho café" + taza humeante, y a la derecha los logos de GitHub, LinkedIn y email. Sin menú, sin logo y sin "Volver arriba".
- `js/app.js` ahora avisa del cambio de idioma con el evento `cambio-idioma` y pone `lang` en `<html>`.
- Ubicación en Contacto: **Cádiz, España**.
- Walter confirmó que el mensaje de prueba le llegó a Gmail.
- **Pendiente:** arreglar el enlace "Tecnologías" del menú (la fila está duplicada en los bloques ES y EN).
- **Hecho:** **CV online** (`cv.html`, `css/cv.css`, `js/cv.js`) basado en el diseño del CV de Fátima y en los PDF reales de Walter: columna lateral (foto, contacto, habilidades con barra, herramientas, idiomas, datos de interés) y principal (cifras, resumen, experiencia, 4 proyectos destacados, formación), botón flotante "Descargar PDF", "Volver al portafolio", ES/EN y modo claro/oscuro (comparte la clave `theme` con el portafolio).
- El botón "CV" del menú en inglés abre `cv.html?lang=en`, y el portafolio también lee `?lang=en` al arrancar.
- **Decisión (Walter):** las habilidades y herramientas del CV deben coincidir con las del `index.html` (sin añadir ni quitar). Barras: Java · Spring Boot · Hibernate, MySQL, Python, JavaScript · Node.js, React, MongoDB. Herramientas: Git & GitHub, Docker, n8n, Postman, JUnit, Claude Code, Modelos de IA (pedido expreso de Walter) y AWS (aprendiendo).
- Resumen profesional del CV reescrito a partir de "Inicio" e "Introducción y recorrido" del index, mencionando el grado superior DAM. Cifra cambiada a "3+ años de formación y práctica" para cuadrar con el index.
- Botón "Descargar PDF" del CV con estilo sobrio (fondo oscuro, borde morado; se rellena al pasar el ratón).
- **Pendiente de confirmar por Walter:** los niveles de las barras (Avanzado/Intermedio) y las cifras (6 proyectos, 3+ años, 4 meses de prácticas).

### 2026-10-25
- **Hecho:** CV en PDF (español e inglés) actualizados en Canva para que coincidan con el CV online, sin los proyectos (decisión de Walter). Mismo resumen, mismos conocimientos que el index, enlace al portafolio web, "Cádiz, España", grado superior DAM, Español (nativo) + Inglés (B1), tildes y erratas corregidas. Los dos CV tienen la misma maquetación.
- Los PDF nuevos sustituyen a los de `docs/` con el mismo nombre (los botones de descarga no cambian). Los antiguos están en `_papelera/` (carpeta de trabajo) con el sufijo `_antiguo_2026-06`.
- Diseños de Canva: ES `DAHBHwYQ2wo`, EN `DAHLop407yM`. Copias de seguridad de antes de los cambios: `DAHY9eQQ2dg` (ES) y `DAHY9V9K1xo` (EN).

### 2026-10-28
- Comprobado: el enlace "Tecnologías" del menú **ya funcionaba** (abre el panel 02 de "Sobre mí" y baja hasta él, en español e inglés). El pendiente del 2026-10-24 estaba desfasado.
- **Hecho:** **menú para móvil y tablet** (hasta 900 px, donde el menú se escondía y no había forma de navegar): botón ☰ en el header que despliega los enlaces debajo; se cierra al elegir una sección, al pulsar fuera o con Escape. En pantallas de hasta 450 px el logo y los botones del header son algo más pequeños para que quepan los tres botones.
- Visto en móvil, para la revisión pendiente: dentro de los paneles de "Sobre mí" el texto queda en una columna muy estrecha, y el botón flotante de WhatsApp tapa parte del texto del hero.
- **Decisión (Walter):** los botones **"Ver demo" quedan ocultos** hasta que tenga los 6 vídeos, porque ahora el vídeo provisional (`Cojg0HHiWys`) es una canción y queda raro ante un reclutador. A Walter le encanta la función y quiere recuperarla **exactamente igual**.
  - Cómo están ocultos: los 12 botones (6 en ES y 6 en EN) están comentados en `index.html` con `<!-- DEMO OCULTA hasta tener los vídeos: ... -->`. El modal (`#videoModalOverlay`), su CSS y su JS (`openVideoModal` en `js/app.js`) siguen intactos; sin botones nadie puede abrirlo.
  - Versión guardada: etiqueta de git **`demos-con-video`** (commit `5808bc0`), con los botones activos.
  - **Para reactivar** cuando pase los enlaces (ojo: en móvil y tablet táctil los botones de las tarjetas se ven siempre, abajo a la izquierda de la captura; es lo esperado): quitar `<!-- DEMO OCULTA hasta tener los vídeos: ` y ` -->` de las 12 líneas (`grep -n "DEMO OCULTA" index.html`) y poner en cada `data-youtube` el ID del vídeo (lo que va después de `v=` o de `youtu.be/`). El mismo vídeo en la tarjeta ES y en la EN. Orden de las tarjetas: 1 Flor de Tuna, 2 Iberostar Inventory Sync, 3 Miniaturas, 4 Tres en raya, 5 Drones y Medicamentos, 6 Carnicería Rivas. Comparar después con `git diff demos-con-video -- index.html`: solo deben cambiar los IDs.
- **Hecho:** revisión del **responsive** de `index.html` y `cv.html` (pedido urgente de Walter: "no puede comerse cosas"). Probado en 320, 360, 375, 414, 540, 600, 768, 912, 1000, 1024, 1152, 1280, 1366 y 1920 px, en español e inglés: nada se sale de la pantalla.
  - Menú: el botón ☰ aparece ya **por debajo de 1150 px** (entre 900 y 1150 el logo se partía en dos líneas y los enlaces se montaban). Hasta 360 px el header se hace más pequeño para que quepan los tres botones (antes el ☰ se salía en 320 px).
  - "Sobre mí" en móvil: el texto de los paneles ya no va sangrado (columna de 180 px → todo el ancho) y los títulos de los paneles caben en 2 líneas.
  - Proyectos en pantallas táctiles (`hover: none`): los botones GitHub/Sitio web se ven siempre abajo a la izquierda de la captura (antes eran invisibles pero se podían pulsar sin querer).
  - La regla de móvil que ponía todos los botones a ancho completo ahora solo afecta a los de la portada (estiraba los de los proyectos y el "Descargar CV" de Contacto).
  - WhatsApp (portafolio) y "Descargar PDF" (CV) más pequeños en móvil para tapar menos texto.
- **Decisión (Walter, con recomendación de Claude):** acceso al CV. El reclutador ya recibe el PDF con la candidatura y el enlace "CV" del menú se ve poco (en móvil está dentro del ☰). Por eso:
  - Botón de la portada: **"Ver CV" / "View CV"** → abre `cv.html` (antes descargaba el PDF). El PDF se descarga desde el CV online.
  - Botón de Contacto: sigue siendo **"Descargar CV"** (PDF directo), porque quien llega ahí suele querer guardarlo o reenviarlo.
  - El CV (menú y portada) se abre **en la misma pestaña**; el CV tiene "Volver al portafolio".

### 2026-10-29
- **Hecho:** **modo claro** rehecho con la paleta que pidió Walter (el oscuro no se toca; comprobado elemento a elemento contra la versión publicada: 0 diferencias en `index.html` y en `cv.html`).
  - Fondo lila `#F6F4FB` en todas las secciones (sin manchas/degradados lilas de fondo), header del mismo color semitransparente con borde `#E7E2F3`.
  - Tarjetas blancas `#FFFFFF` con borde `#E7E2F3` y sombra morada suave; al pasar el ratón, borde `#CFC4F2` y sombra más fuerte. Arreglado que los paneles de "Sobre mí" se volvieran oscuros al pasar el ratón en modo claro.
  - Dos morados: `--accent` (`#7C5CFF`, vivo) para botones, borde de la foto y detalles grandes; `--accent-text` (`#5B3FD6`) para textos morados en claro (en oscuro `--accent-text` vale lo mismo que `--accent`). Textos `#1C1830` y `#4A4560`. Píldora de bienvenida `#EAE4FB` + `#5B3FD6`.
  - Sol del botón de tema: icono Font Awesome en morado en vez del emoji naranja (`js/app.js`, `js/cv.js`).
  - Tarjetas de proyectos con "Autor" pegado abajo: **solo en modo claro**, como se pidió.
  - CV: misma paleta; verde de los títulos `#047857` en claro para que cumpla contraste.
  - Contraste AA en todos los textos. Única excepción: texto blanco sobre el morado vivo de los botones (4,35:1), porque Walter pidió mantener ese morado en botones.
