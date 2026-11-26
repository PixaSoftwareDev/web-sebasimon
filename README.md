# web-sebasimon

Sitio de Seba Simón, profe de pádel en Pergamino (El Portón). Una sola página con reserva por WhatsApp.

Vite + React + Tailwind 4 + GSAP.

## Uso

```bash
npm install
npm run dev      # desarrollo
npm run build    # salida en dist/
```

## Dónde tocar

- `src/data/site.js`: WhatsApp, Instagram, sede, clases, niveles, días y horarios.
- `src/components/sections.jsx`: secciones y textos de la página.
- `src/components/Reserva.jsx`: formulario que arma el mensaje de WhatsApp.
- `src/components/Marca.jsx`: guía de marca, visible en `/#marca`.
- `.env`: `VITE_SITE_URL`, el dominio final. Lo usan la vista previa al compartir el link y los datos para Google.

## Assets

`npm run assets` regenera fotos, firma vectorizada y videos a partir de `material-original/`.
Esa carpeta no está en el repo (material crudo); pedirla si hace falta regenerar.
Requiere `ffmpeg` instalado.

## Pendiente antes de publicar

- Confirmar con Seba modalidades de clase, precios y el texto de "El profe".
- Dominio definitivo en `.env`.
- Logo de El Portón en buena calidad (el actual es un recorte del reel).
- Permiso para el video de la clase con menores.
