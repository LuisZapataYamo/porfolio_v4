# Sistema de Estilos SCSS - Portafolio v4

## 📋 Estructura

```
src/app/shared/styles/
├── _variables.scss          # Paleta de colores, tipografías, espaciado
├── _mixins.scss             # Utilidades reutilizables (flexbox, grid, botones, etc)
├── _base.scss               # Reset y estilos globales
├── _theme.scss              # Animaciones, utilidades y variables CSS
├── _components.example.scss # Ejemplos de componentes
└── styles.scss              # Archivo principal que importa todo
```

## 🎨 Paleta de Colores

### Colores Principales
- **Fondo Oscuro**: `#0f0f0f` (`dark-bg`)
- **Verde Neón**: `#00d966` (`neon-green`)
- **Verde Neón Claro**: `#00ff78` (`neon-green-light`)
- **Verde Neón Oscuro**: `#00a850` (`neon-green-dark`)

### Escala de Grises
- **Blanco**: `#ffffff` (`white`)
- **Gris Claro**: `#e0e0e0` (`gray-light`)
- **Gris**: `#808080` (`gray`)
- **Gris Oscuro**: `#404040` (`gray-dark`)
- **Secundario Oscuro**: `#1a1a1a` (`dark-secondary`)
- **Terciario Oscuro**: `#2a2a2a` (`dark-tertiary`)

### Colores de Estado
- **Success**: `#00d966`
- **Error**: `#ff4757`
- **Warning**: `#ffa502`
- **Info**: `#2196f3`

## 📐 Espaciado (Escala 8px)

```scss
$spacing: (
  'none':  0,
  'xs':    0.25rem,   // 4px
  'sm':    0.5rem,    // 8px
  'md':    1rem,      // 16px
  'lg':    1.5rem,    // 24px
  'xl':    2rem,      // 32px
  '2xl':   2.5rem,    // 40px
  '3xl':   3rem,      // 48px
  '4xl':   4rem,      // 64px
  '5xl':   5rem,      // 80px
  '6xl':   6rem,      // 96px
);
```

**Uso:**
```scss
padding: spacing('md');        // 16px
margin: spacing('lg');         // 24px
gap: spacing('xl');            // 32px
```

## 🔤 Tipografías

### Familia de Fuentes
- **Base**: System font stack (Segoe UI, Roboto, etc.)
- **Monoespaciada**: Courier New para código

### Tamaños de Fuente
```scss
'xs':  0.75rem,   // 12px
'sm':  0.875rem,  // 14px
'base': 1rem,     // 16px
'lg':  1.125rem,  // 18px
'xl':  1.25rem,   // 20px
'2xl': 1.5rem,    // 24px
'3xl': 1.875rem,  // 30px
'4xl': 2.25rem,   // 36px
'5xl': 3rem,      // 48px
'6xl': 3.75rem,   // 60px
```

### Pesos de Fuente
- **Light**: 300
- **Normal**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700
- **Extrabold**: 800

## 🎯 Cómo Usar las Funciones de Helpers

### 1. Acceder a Colores
```scss
// Usando la función color()
color: color('white');
background: color('neon-green');
border: 1px solid color('dark-tertiary');
```

### 2. Acceder a Espaciado
```scss
padding: spacing('md');
margin-bottom: spacing('lg');
gap: spacing('xl');
```

### 3. Acceder a Tamaños de Fuente
```scss
font-size: font-size('lg');
```

### 4. Acceder a Pesos de Fuente
```scss
font-weight: font-weight('bold');
```

## 🎨 Mixins Principales

### Responsive Design
```scss
// Min-width (Mobile First)
@include media('md') {
  // Estilos para pantallas md+
}

// Max-width
@include media-max('sm') {
  // Estilos solo para pantallas menores a sm
}
```

### Flexbox
```scss
// Centro perfecto
@include flex-center;

// Centro de contenido con espacio entre elementos
@include flex-between;

// Columna con centro
@include flex-column-center;

// Flex con wrap y gap
@include flex-wrap;
```

### Grid
```scss
// Grid con 3 columnas
@include grid(3);

// Grid automático responsivo
@include grid-auto;
```

### Tipografía
```scss
// Texto genérico
@include text('lg', 'semibold', 1.6);

// Headings
@include h1;
@include h2;
@include h3;
```

### Transiciones
```scss
// Transición suave
@include transition(all, 'base', 'ease');

// Efecto hover con elevación
@include hover-transition;

// Animación de subrayado
@include underline-animation;
```

### Botones
```scss
// Botón primario (verde neón)
@include button-primary;

// Botón secundario (contorno)
@include button-secondary;

// Botón transparente
@include button-ghost;
```

### Tarjetas
```scss
// Tarjeta con sombra y efecto hover
@include card;
```

### Formularios
```scss
// Entrada de formulario estilizada
@include input-base;
```

### Sombras y Efectos
```scss
// Sombra estándar
@include shadow('md');

// Efecto brillo neón
@include neon-glow;

// Sombra específica
@include shadow('lg');  // 'sm', 'md', 'lg', 'xl', 'neon', 'neon-lg'
```

### Scroll personalizado
```scss
// Personalizar scrollbar
@include scrollbar;
```

## 🎬 Animaciones Disponibles

### Clases de Animación
```scss
.animate-slide-in-up      // Desliza hacia arriba
.animate-slide-in-down    // Desliza hacia abajo
.animate-fade-in          // Desvanecimiento
.animate-scale-in         // Escala entrada
.animate-pulse            // Pulsa continuamente
.animate-glow             // Brilla continuamente
```

### Usar en Componentes
```html
<div class="animate-slide-in-up">Contenido</div>
```

### Keyframes Disponibles
```scss
@keyframes slideInUp { ... }
@keyframes slideInDown { ... }
@keyframes fadeIn { ... }
@keyframes scaleIn { ... }
@keyframes pulse { ... }
@keyframes glow { ... }
```

## 📦 Clases Utilidad

### Espaciado
```html
<div class="mt-md mb-lg p-xl">Contenido</div>
<div class="gap-md">Items</div>
```

### Flexbox
```html
<div class="flex-center">Centrado perfecto</div>
<div class="flex-between">Espaciado entre</div>
<div class="flex-column">Columna</div>
```

### Grid
```html
<div class="grid-2">Dos columnas</div>
<div class="grid-3">Tres columnas</div>
<div class="grid-auto">Automático responsivo</div>
```

### Sombras
```html
<div class="shadow-md">Sombra media</div>
<div class="shadow-lg">Sombra grande</div>
<div class="shadow-neon">Sombra neón</div>
```

### Texto
```html
<p class="text-muted">Texto deshabilitado</p>
<p class="text-center">Centrado</p>
<p class="gradient-text">Texto con gradiente</p>
```

## 📱 Breakpoints

```scss
'xs': 0          // Móviles
'sm': 576px      // Tablets pequeñas
'md': 768px      // Tablets
'lg': 992px      // Desktops pequeños
'xl': 1200px     // Desktops
'2xl': 1400px    // Desktops grandes
```

## ✅ Ejemplo de Componente

```scss
.my-component {
  // Base
  @include card;
  
  // Responsivo
  @include media-max('md') {
    padding: spacing('md');
  }
  
  // Tipografía
  &__title {
    @include h3;
    color: color('neon-green');
    margin-bottom: spacing('md');
  }
  
  // Contenido
  &__content {
    @include flex-column;
    gap: spacing('lg');
  }
  
  // Botón
  &__button {
    @include button-primary;
    @include hover-transition;
  }
  
  // Hover
  &:hover {
    @include shadow('lg');
    transform: translateY(-4px);
  }
}
```

## 🎯 Mejores Prácticas

1. **Usa funciones helpers**: Siempre usa `color()`, `spacing()`, `font-size()` en lugar de valores hardcodeados
2. **Reutiliza mixins**: Los mixins comunes ya existen, no dupliques estilos
3. **Mobile first**: Define estilos móviles primero, luego usa `@include media()` para pantallas mayores
4. **Variables CSS**: Usa las variables CSS predefinidas en `:root` para valores dinámicos
5. **Animaciones**: Usa las animaciones y keyframes preexistentes
6. **Clases utilidad**: Aprecia las clases utilidad para espaciado, flexbox, etc.

## 📝 Notas

- Todo el sistema está diseñado para tema oscuro con acentos verde neón
- Las transiciones por defecto son suaves (250ms)
- El espaciado sigue la escala de 8px
- El sistema soporta scroll personalizado
- Todas las funciones están documentadas en el código
