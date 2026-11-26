# Unidad Educativa Atahualpa — Sitio Web Institucional

Página web institucional de la **Unidad Educativa Atahualpa** (Ambato, Tungurahua, Ecuador). Es un sitio de una sola página (*landing page*) que presenta la institución, su oferta académica, el proceso de admisiones y los datos de contacto. Incluye además un modal de inicio de sesión como punto de acceso al portal institucional.

## Tabla de contenidos

- [Características](#características)
- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Secciones del sitio](#secciones-del-sitio)
- [Instalación y uso](#instalación-y-uso)
- [Personalización](#personalización)
- [Estado del portal y limitaciones](#estado-del-portal-y-limitaciones)
- [Mejoras futuras](#mejoras-futuras)
- [Contacto](#contacto)

## Características

- **Diseño responsivo** adaptado a escritorio, tablet y móvil, con menú tipo hamburguesa en pantallas pequeñas.
- **Carrusel de imágenes (hero)** con cambio automático cada 5 segundos e indicadores de navegación manual.
- **Barra de navegación dinámica** que cambia de transparente a azul sólido con sombra al hacer scroll.
- **Animaciones de aparición (scroll reveal)** mediante `IntersectionObserver`.
- **Tarjetas de servicios** con efecto *hover* (elevación y sombra).
- **Modal de inicio de sesión** accesible desde la barra de navegación, el menú móvil y el pie de página.
- **Formulario de contacto** con campos de nombre, correo, asunto y mensaje.
- **Paleta de colores** en azul real (`royal`) y blanco, con tipografías diferenciadas para títulos, etiquetas y texto.

## Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura semántica del sitio |
| [Tailwind CSS](https://tailwindcss.com/) (vía CDN) | Estilos utilitarios y configuración de tema personalizado |
| CSS3 | Estilos propios (hero, tarjetas, botones, animaciones, modal) |
| JavaScript (vanilla) | Carrusel, menú móvil, efecto de navbar, scroll reveal y modal |
| [Google Fonts](https://fonts.google.com/) | *Playfair Display*, *DM Sans* y *Bebas Neue* |

No requiere dependencias locales, gestor de paquetes ni proceso de compilación.

## Estructura del proyecto

El archivo HTML referencia las imágenes con rutas relativas a la carpeta superior (`../`), por lo que la estructura esperada es la siguiente:

```
proyecto/
├── logo.jpg          # Escudo de la institución
├── unidad.jpg        # Imagen 1 del carrusel
├── unidad2.jpg       # Imagen 2 del carrusel
├── unidad3.jpg       # Imagen 3 del carrusel
└── carpeta-del-sitio/
    └── index.html    # Página principal (este archivo)
```

> Si prefieres mantener todo en la misma carpeta, cambia las rutas `../logo.jpg`, `../unidad.jpg`, etc. por `logo.jpg`, `unidad.jpg`, etc. dentro del HTML.

## Secciones del sitio

1. **Inicio:** hero con carrusel, título principal y botones de acción hacia la oferta académica y las admisiones.
2. **Estadísticas:** años de historia, especialidades técnicas, estudiantes activos y tasa de graduación.
3. **Nosotros:** descripción de la institución, valores (Excelencia, Innovación, Valores, Comunidad) y misión.
4. **Oferta académica:** Bachillerato en Ciencias, Mecánica Automotriz, Electrónica de Consumo, Mecánica Industrial, Instalaciones, Equipos y Máquinas Eléctricas, y Básica e Inicial.
5. **Admisiones:** proceso de tres pasos (registro inicial, entrega de documentos y confirmación de matrícula).
6. **Contacto:** dirección, correo institucional, provincia y formulario de mensaje.
7. **Pie de página:** accesos rápidos y accesos al portal.

## Instalación y uso

### Opción 1: abrir directamente

1. Descarga o clona el proyecto.
2. Verifica que las imágenes (`logo.jpg`, `unidad.jpg`, `unidad2.jpg`, `unidad3.jpg`) estén en la ruta esperada.
3. Abre `index.html` en tu navegador.

### Opción 2: servidor local (recomendado)

Con Python:

```bash
python -m http.server 8000
```

O con la extensión **Live Server** de Visual Studio Code. Luego visita `http://localhost:8000`.

> Se requiere conexión a internet para cargar Tailwind CSS, Google Fonts y la imagen de la sección *Nosotros* (alojada en Unsplash).

## Personalización

- **Colores:** se definen en `tailwind.config` dentro de la etiqueta `<script>` del `<head>` (paleta `royal`, `silver` y `offwhite`).
- **Tipografías:** se configuran en `fontFamily` (`display`, `bebas`, `body`) y se importan desde Google Fonts.
- **Imágenes del carrusel:** edita las etiquetas `<img>` dentro de los elementos `.hero-slide`. Para agregar más diapositivas, añade otro `.hero-slide` y un `.hero-dot` con su respectivo `onclick="goSlide(n)"`.
- **Intervalo del carrusel:** modifica el valor `5000` (milisegundos) en la llamada a `setInterval`.
- **Oferta académica:** duplica o edita las tarjetas `.service-card` de la sección `#oferta`.
- **Datos de contacto y estadísticas:** edita directamente el texto en las secciones correspondientes.

## Estado del portal y limitaciones

- El modal de inicio de sesión **es solo una interfaz de demostración**. Al enviar el formulario se muestra una alerta indicando que el portal administrativo fue removido de esta versión; no existe autenticación real ni conexión a un servidor.
- El texto del modal muestra credenciales de ejemplo (`admin` / `estudiante`). Conviene **eliminarlas** antes de publicar el sitio.
- El **formulario de contacto no envía información**, ya que no tiene un backend ni un servicio asociado.
- El banner de admisiones indica "Inscripciones abiertas 2025" y el pie de página muestra "© 2025"; ambos textos deben actualizarse según el periodo vigente.
- La sección *Nosotros* usa una imagen externa de Unsplash; se recomienda reemplazarla por una fotografía propia de la institución.
- Las cifras de la sección de estadísticas son referenciales y deben validarse con la institución.

## Mejoras futuras

- Implementar autenticación real y un portal para estudiantes y administradores.
- Conectar el formulario de contacto a un servicio de correo o a una API.
- Agregar una galería de fotos, noticias y un calendario académico.
- Añadir metadatos SEO y Open Graph, además de un favicon.
- Optimizar imágenes (formato WebP y carga diferida) y mejorar la accesibilidad (atributos `aria`, navegación por teclado en el modal).
- Reemplazar el CDN de Tailwind por una compilación local para producción.

## Contacto

**Unidad Educativa Atahualpa**
22 de Enero y Destacamento Cóndor Mirador, Ambato, Ecuador (180152)
Correo: colegioatahualpasecretariaa@hotmail.com
Provincia: Tungurahua, Ecuador

---

© Unidad Educativa Atahualpa. Todos los derechos reservados.
