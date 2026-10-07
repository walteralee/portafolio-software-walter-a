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
