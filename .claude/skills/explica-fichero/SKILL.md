---
name: explica-fichero
description: Explica un fichero del portafolio de Walter de forma didáctica y no técnica: qué hace, en qué capa del proyecto encaja, con qué otros ficheros conecta y cómo funciona paso a paso, con analogías en lenguaje humano. Úsalo cuando el usuario pida entender, explicar o revisar un fichero o ruta concreta.
argument-hint: [ruta-del-fichero]
---

# Explicación didáctica de un fichero

El usuario no busca dominar cada tecnología del proyecto, sino entender qué
hace y por qué existe cada fichero. Analiza el fichero indicado en
$ARGUMENTS y explícaselo siguiendo esta estructura, en este orden exacto:

## 1. Introducción breve (nada técnica)

Un párrafo de unas 5 líneas con la idea esencial del fichero dentro del
proyecto. Nivel de explicación: como describir el intermitente de un coche
a alguien que no sabe de mecánica — para qué sirve, no cómo funciona por
dentro.

## 2. Capa del proyecto

En una o dos frases, indica a qué capa pertenece dentro de este portafolio
estático: estructura/contenido (HTML), presentación (CSS), comportamiento
(JavaScript), recursos (imágenes, PDFs de CV) o configuración (.gitignore,
README).

## 3. Conexiones y flujo de trabajo

Explica con qué otros ficheros conecta (a quién importa, quién lo importa,
a quién llama o quién lo invoca — por ejemplo qué clase CSS usa un elemento
del HTML, o qué elemento del DOM manipula un script) y en qué momento del
uso real del sitio entra en juego.

## 4. El código, paso a paso

Divide el código en bloques lógicos, no línea a línea. Si el fichero es
grande, agrupa por responsabilidad. Para cada bloque:
- Explica qué hace, sin profundizar más de lo necesario para entenderlo
- Apóyate en una analogía o ejemplo en lenguaje humano (ej: "imagina que
  la página es una tienda: este bloque sería el escaparate que...")

Prioriza siempre la claridad y las analogías sobre el detalle técnico
exhaustivo. El objetivo es que el usuario entienda qué está pasando en su
propio proyecto, no que se convierta en experto en la tecnología.
