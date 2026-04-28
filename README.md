<<<<<<< HEAD
# Alan García — Portfolio

Sitio de portafolio estático (HTML · CSS · JS, sin frameworks), listo para GitHub Pages.

## Estructura

```
.
├── index.html      # Página principal
├── styles.css      # Estilos (paleta fría: azul / violeta / cyan)
├── script.js       # i18n ES/EN, animaciones, render de proyectos
├── assets/
│   └── alan.jpg    # Foto personal (colocá tu foto aquí)
├── .nojekyll       # Evita que GitHub Pages use Jekyll
└── package.json    # Solo para servir localmente con `serve`
```

## Desarrollo local

```bash
pnpm install
pnpm dev
# abre http://localhost:3000
```

> También podés abrir `index.html` directamente en el navegador.

## Personalización

1. **Foto**: colocá tu retrato profesional en `assets/alan.jpg`
   (cuadrado, ~640×640 px). Si no existe, se muestra un placeholder.
2. **Proyectos**: edita el array `secondaryProjects` en `script.js`
   y la sección "Nueva Visión" en `index.html` (`#nueva-vision`).
3. **Textos ES / EN**: edita el objeto `translations` en `script.js`.
4. **Colores / tipografía**: edita las variables `:root` en `styles.css`.

## Despliegue en GitHub Pages

1. Subí esta carpeta a un repo en GitHub:

   ```bash
   git init
   git add .
   git commit -m "feat: portfolio site"
   git branch -M main
   git remote add origin https://github.com/ODAL-1/portfolio.git
   git push -u origin main
   ```

2. En GitHub: **Settings → Pages → Source: Deploy from a branch → main / root**.
3. Esperá 1–2 minutos. Tu sitio estará disponible en
   `https://ODAL-1.github.io/portfolio/` (o `https://ODAL-1.github.io/`
   si el repo se llama `ODAL-1.github.io`).

El archivo `.nojekyll` asegura que GitHub sirva los archivos tal cual,
sin pasar por Jekyll.
=======
# Portfolio
Mi portfolio personal.
>>>>>>> b427aa416a736ce8b85b008c17ab4c9dc54b4276
