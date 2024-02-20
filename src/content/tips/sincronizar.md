---
title: "Sincronizar una PC"
pubDate: "2024-05-09"
description: "Sincronizar una PC con los Cambios Subidos desde una otra"
image: "https://images.unsplash.com/photo-1660208030414-8461e1cc68da"
tags: ["git","javascript"]
layout: "../../layouts/Base.astro"
---

## **Contexto:**

Tienes un proyecto en GitHub con una sola rama principal llamada `main`. Realizaste y subiste algunos cambios desde tu laptop y ahora deseas que tu PC de escritorio tenga exactamente la misma versión del código que está en el repositorio remoto, descartando todos los cambios que hiciste localmente en la PC de escritorio.

<aside>
💡 Asegurarse de que todos los cambios importantes en la PC de escritorio estén guardados o committeados en otra rama si no se quieren perder.

</aside>

**Pasos:**

1. **Verificar que estás en la rama correcta (main).**
    
    `git checkout main`
    
2. **Descartar los cambios locales (si se desea).**
    - **Si necesitas guardar cambios:** Considera hacer un commit o mover los cambios a otra rama.
    - **Si deseas descartar todos los cambios locales:**`git reset --hard`
    (¡Atención! Esto eliminará todos los cambios locales no guardados en la rama actual).
3. **Sincronizar los cambios del repositorio remoto.**
    - Traer todos los cambios y referencias del repositorio remoto:`git fetch --all`
    - Restablecer la rama principal local para que coincida con la remota:`git reset --hard origin/main`
4. **Verificación.**
    - Verificar que la rama está actualizada: `git status`
    - Si deseas ver el último commit y confirmar que coincide con el último cambio realizado desde la laptop: `git log -1`

git fetch --all
git reset --hard origin/main

**Resultado esperado:**

Tu PC de escritorio ahora contiene la misma versión del código que está en la rama `main` del repositorio remoto, incluyendo todos los cambios que se subieron desde la laptop. Todos los cambios locales previos en la rama `main` de tu PC de escritorio han sido descartados.

**Notas Importantes:**

- `git reset --hard` es irreversible en términos de los cambios locales que elimina. Asegúrate de querer descartar esos cambios antes de usarlo.
- Este proceso puede ser ligeramente diferente si estás trabajando con múltiples ramas o tienes una configuración específica de Git. Adapta los comandos según sea necesario.

**Uso recomendado:**

Este caso de uso es ideal cuando quieres asegurarte de que tu ambiente de trabajo local en la PC de escritorio refleje exactamente lo que está en el repositorio remoto, descartando cualquier desviación local. Es útil en situaciones donde los cambios locales son experimentales, obsoletos o simplemente se desean descartar.

```powershell
git fetch --all
git reset --hard origin/main
```