---
name: contexto-proyecto
description: Genera un informe completo del estado actual del Portafolio de Walter: la idea del proyecto, qué hay construido, el mapa de carpetas con su arquitectura, el stack tecnológico, el historial de Git y un recorrido por el flujo de trabajo completo. Úsalo para orientarte rápido en el proyecto o al arrancar una sesión nueva.
---

# Contexto actual del proyecto

Genera el informe siguiendo estas seis secciones, en este orden exacto y con estos títulos.

## 1. Qué es el proyecto

Describe de qué trata este portafolio en lenguaje cercano y sin fecha de caducidad: qué idea persigue, qué se espera conseguir con él (mostrar el perfil y los proyectos de Walter a reclutadores/clientes), la visión a futuro y la motivación detrás. Apóyate en README.md y en cualquier documento de la carpeta contenedora exterior (un nivel por encima del repo, donde suele estar "Falta - Enunciado.txt", "Sobre Mi - Estructura.txt" o similares) que hable del propósito. Recoge la ilusión o motivación que transmitan esos documentos, sin inventar nada que no esté ahí.

## 2. Dónde estamos ahora mismo

Pon los pies en la tierra: qué hay realmente construido y funcionando en el sitio (secciones del index.html, funcionalidades JS activas), qué le falta, y qué problemas conocidos hay. Consulta especialmente el fichero de pendientes/enunciado que exista en la carpeta contenedora exterior (por ejemplo "Falta - Enunciado.txt"), y contrasta lo que dice con lo que ya existe de verdad en el código — no des por hecho que algo está terminado solo porque aparece planeado en algún documento.

## 3. El mapa del proyecto

Explica la estructura de carpetas como si el proyecto fuera una ciudad: cada carpeta principal es un edificio con una función clara (por ejemplo, "css/ es el taller de sastrería, ahí se decide cómo viste cada elemento"). Basa la explicación en la estructura real de archivos del proyecto en este momento, no en la que se recuerde de otra conversación. Aclara también que el repositorio Git real vive en esta misma carpeta (la que contiene `.git`), dentro de una carpeta contenedora exterior con el mismo nombre que NO forma parte del repo. Indica qué tipo de arquitectura sigue el proyecto (sitio estático de páginas HTML con CSS y JavaScript vainilla, sin backend ni build tool) y justifica brevemente por qué encaja en esa categoría.

## 4. El stack tecnológico

Lista las tecnologías realmente usadas: HTML5, CSS3, JavaScript vainilla (sin frameworks), Git/GitHub, y GitHub Pages como hosting. Confírmalo mirando el `<head>` de index.html/cv.html (librerías externas como Font Awesome vía CDN) y el contenido real de css/ y js/, en vez de asumir lo que se decidió en el pasado. Deja claro que no hay package.json ni proceso de build: los ficheros se sirven tal cual.

## 5. El árbol de Git

Muestra el historial reciente de commits (por ejemplo con `git log --oneline --graph`). Si el historial es largo, no lo vuelques entero: resume en su lugar la rama actual, el último commit y, si existen, la última versión o tag.

## 6. El flujo de trabajo completo

Recorre el flujo de una interacción de principio a fin como si fuera una fábrica de embotellado: el molde (el HTML donde el usuario hace clic, por ejemplo el botón de idioma, el interruptor de tema o un desplegable de "Sobre mí"), el llenado (el JavaScript de app.js que escucha el evento), el refinado (el cambio de estado en el navegador: clases CSS que se añaden/quitan, texto que se muestra u oculta) y la etiqueta final (lo que el usuario ve reflejado en pantalla). Usa un ejemplo concreto del proyecto, como cambiar de idioma, alternar tema claro/oscuro o abrir un bloque de "Sobre mí", para ilustrar cada parada de la fábrica.

En todo el informe, evita la jerga innecesaria: el objetivo es que el usuario entienda su propio proyecto de un vistazo, no que domine cada tecnología empleada.
