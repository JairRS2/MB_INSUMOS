# MB INSUMOS - Proyecto con Tailwind CSS

## 🚀 Adaptación a Tailwind CSS

Tu proyecto ha sido exitosamente adaptado para usar **Tailwind CSS** en lugar de Bootstrap. Esto te proporcionará mayor flexibilidad y control sobre los estilos, además de un tamaño de archivo final más optimizado.

## 📋 Cambios Realizados

### 1. Reemplazo de Bootstrap por Tailwind CSS
- ✅ Eliminada la dependencia de Bootstrap
- ✅ Agregado Tailwind CSS vía CDN para desarrollo rápido
- ✅ Convertidas todas las clases de Bootstrap a clases de Tailwind

### 2. Configuración de Colores Personalizados
- ✅ Mantenidos los colores originales del proyecto:
  - `primary: #E21E2F` (Rojo del logo)
  - `secondary: #333333` (Negro oscuro)
  - `light: #F8F8F8` (Fondo claro)
  - `textColor: #555555` (Texto general)

### 3. Estilos Personalizados
- ✅ Conservados los estilos únicos del proyecto (lightbox, menú hamburguesa, etc.)
- ✅ Mantenida la funcionalidad del portfolio con filtros
- ✅ Preservado el comportamiento responsive

## 🔧 Instalación para Producción

Para usar Tailwind CSS en producción (recomendado), sigue estos pasos:

### Opción 1: Tailwind CLI (Recomendado)

1. **Instalar Node.js** (si no lo tienes instalado)

2. **Instalar Tailwind CSS:**
   ```bash
   npm install -D tailwindcss
   npx tailwindcss init
   ```

3. **Reemplazar el contenido de `tailwind.config.js`** con el archivo ya incluido en el proyecto.

4. **Compilar CSS:**
   ```bash
   npx tailwindcss -i ./style.css -o ./dist/style.css --watch
   ```

5. **Actualizar el HTML** para usar el archivo compilado:
   ```html
   <link rel="stylesheet" href="dist/style.css">
   ```

### Opción 2: Usar CDN (Actual - Solo para desarrollo)

El proyecto actualmente usa Tailwind vía CDN que es perfecto para desarrollo y prototipado rápido:

```html
<script src="https://cdn.tailwindcss.com"></script>
```

## 📱 Características Mantenidas

- ✅ **Diseño Responsive**: Adaptado a móviles, tablets y desktop
- ✅ **Menú Hamburguesa**: Funcional en dispositivos móviles
- ✅ **Portfolio Interactivo**: Filtros y lightbox funcionando
- ✅ **Formulario de Contacto**: Estilos actualizados con Tailwind
- ✅ **Botón WhatsApp Flotante**: Mantenido con nuevos estilos
- ✅ **Animaciones y Transiciones**: Todas conservadas

## 🎨 Clases Tailwind Utilizadas

### Layouts y Contenedores
- `max-w-6xl mx-auto px-5`: Contenedor principal
- `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`: Grids responsivos
- `flex items-center justify-center`: Centrado de elementos

### Colores y Tipografía
- `bg-primary text-white`: Botones principales
- `text-secondary`: Títulos
- `font-montserrat font-poppins`: Fuentes personalizadas

### Efectos y Animaciones
- `hover:shadow-xl hover:-translate-y-2`: Efectos hover en tarjetas
- `transition-all duration-300`: Transiciones suaves

## 🚀 Beneficios de la Migración

1. **Menor Tamaño de Archivo**: Solo se incluyen las clases CSS que realmente usas
2. **Mayor Flexibilidad**: Diseño más granular y personalizable
3. **Mejor Rendimiento**: CSS optimizado para producción
4. **Mantenimiento Simplificado**: Estilos más predecibles y consistentes
5. **Desarrollo Más Rápido**: Clases utilitarias directamente en el HTML

## 📂 Estructura de Archivos

```
├── index.html              # HTML principal con clases de Tailwind
├── style.css               # Estilos personalizados + directivas Tailwind
├── scripts.js              # JavaScript (sin cambios)
├── tailwind.config.js      # Configuración de Tailwind
└── img/                    # Imágenes del proyecto
```

## 🔍 Notas Importantes

- El archivo `style.css` contiene directivas de Tailwind (`@tailwind base`, etc.) que requieren compilación para producción
- Para desarrollo puedes usar el CDN actual sin problemas
- Todas las funcionalidades JavaScript se mantienen intactas
- Los estilos responsive se han mejorado con las clases de Tailwind

## 🛠️ Personalización

Para personalizar colores o estilos:

1. **Colores**: Edita `tailwind.config.js` en la sección `colors`
2. **Fuentes**: Modifica la sección `fontFamily`
3. **Breakpoints**: Ajusta los responsive breakpoints según necesites

¡Tu proyecto ahora está optimizado con Tailwind CSS! 🎉