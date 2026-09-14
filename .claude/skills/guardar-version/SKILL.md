---
name: guardar-version
description: Guardar una versión del portafolio en Git y subirla a GitHub en la rama main. Úsala cuando Walter diga «guarda versión», «sube a GitHub», «haz commit» o algo equivalente.
---

# Guardar versión (Git + GitHub, rama main)

Procedimiento para guardar el estado actual del proyecto y publicarlo en GitHub.

## Reglas fijas

- El repositorio es **esta misma carpeta** (`PORTAFOLIO SOFTWARE WALTER ALEJANDRO
  CUTIÑO LEDO/`, la que contiene `.git`), **no** la carpeta contenedora exterior que
  tiene el mismo nombre. Ejecuta todos los comandos `git` dentro de aquí; si no estás
  en esta carpeta, haz `cd` a ella primero.
- Los documentos de la carpeta contenedora exterior (por ejemplo "Falta -
  Enunciado.txt", "Sobre Mi - Estructura.txt", la carpeta `pronts/`) están fuera del
  repo: `git add .` desde dentro nunca los subirá. Correcto, no lo cambies.
- **Mensajes de commit limpios**: sin coletillas de atribución, sin `Co-authored-by`,
  sin enlaces de sesión. Solo el mensaje que describe el cambio.
- Nunca uses `--force` ni `--no-verify`. Si algo se rechaza, para y avisa.

## Pasos

1. **Situarse y comprobar rama.**
   - `cd` a esta carpeta si hace falta.
   - `git branch --show-current` → debe ser `main`. Si no lo es, **para** y dile a Walter
     en qué rama está; no cambies de rama por tu cuenta.

2. **Enseñar qué se va a guardar.**
   - `git status -sb`
   - `git diff --stat` (y `git diff` completo si el cambio es pequeño o dudoso).
   - Revisa el diff por si se cuela algo que no debería ser público (`.env`, claves,
     tokens, rutas privadas, ficheros enormes). Si ves algo así, **para** y avísalo.
   - Si no hay nada que commitear, díselo a Walter y termina aquí.

3. **Mensaje del commit.**
   - Si Walter te ha dado el mensaje explícitamente («el mensaje es …», «te lo doy yo»),
     úsalo **tal cual**, sin debatir.
   - Si no, **propón** un mensaje corto en español a partir de los cambios, enséñaselo y
     ajústalo con él. No sigas hasta que lo confirme.

4. **Preparar y confirmar el commit (local, reversible).**
   - `git add .`
   - `git commit -m "<mensaje acordado>"`

5. **Confirmar antes de publicar.**
   - Enseña a Walter: el mensaje del commit y un resumen de una línea de lo que sube
     (`git log --oneline -1` + nº de ficheros).
   - `push` publica en GitHub y ya no es local: **espera su "sí" explícito** antes de continuar.

6. **Publicar.**
   - `git push origin main`
   - Si el push se rechaza (remoto adelantado, conflicto, credenciales): **para**, muestra
     el error tal cual y pregunta a Walter cómo seguir. No fuerces nada.

7. **Reportar.**
   - Confirma: hash corto del commit, mensaje, y que el push a `origin/main` fue OK.
