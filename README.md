# Portafolio de Proyectos - React + TypeScript + Vite

Aplicación de portafolio moderna con sistema de enrutamiento usando React Router DOM, componentes de Liquid Glass y efectos glassmorphism.

## 🚀 Características

- **React 19** con TypeScript
- **React Router DOM** para navegación SPA
- **Tailwind CSS** para estilos
- **Vite** para desarrollo rápido
- **Efectos Glassmorphism** modernos
- **Navegación responsive** y fluida
- **Arquitectura escalable** con separación de concerns

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Layout.tsx              # Layout principal con navegación
│   ├── LiquidGlassCard.tsx     # Componente de tarjeta con efecto glass
│   ├── LiquidGlassDemo.tsx     # Demo de frontend
│   └── LiquidGlassVariations.tsx # Variaciones para backend
├── pages/
│   ├── Home.tsx                # Página de inicio
│   ├── Frontend.tsx            # Página de proyectos frontend
│   ├── Backend.tsx             # Página de proyectos backend
│   └── NotFound.tsx            # Página 404
├── hooks/
│   └── useAppNavigation.ts     # Hook personalizado para navegación
├── config/
│   └── routes.ts               # Configuración de rutas
└── utils/
    └── cn.ts                   # Utilidad para clases CSS
```

## 🛣️ Sistema de Enrutamiento

### Rutas Disponibles

- `/` - Página de inicio con navegación principal
- `/frontend` - Proyectos de desarrollo frontend
- `/backend` - Proyectos de desarrollo backend
- `/*` - Página 404 para rutas no encontradas

### Configuración de Rutas

Las rutas están centralizadas en `src/config/routes.ts`:

```typescript
export const routes = {
  home: '/',
  frontend: '/frontend',
  backend: '/backend',
} as const
```

### Hook de Navegación

Utiliza el hook personalizado `useAppNavigation` para navegación programática:

```typescript
const { navigateTo, isCurrentPath, goHome, goToFrontend, goToBackend } = useAppNavigation()
```

## 🎨 Características del Diseño

- **Glassmorphism**: Efectos de cristal líquido con transparencias
- **Gradientes dinámicos**: Fondos que cambian según la sección
- **Animaciones fluidas**: Transiciones suaves entre estados
- **Responsive**: Adaptable a todos los dispositivos
- **Navegación fija**: Header que permanece visible al hacer scroll

## 🚀 Comandos Disponibles

```bash
# Desarrollo
npm run dev

# Construcción para producción
npm run build

# Linting
npm run lint

# Vista previa de la build
npm run preview
```

## 📦 Dependencias Principales

- **react**: ^19.1.0
- **react-router-dom**: ^7.6.3
- **tailwindcss**: ^4.1.11
- **clsx**: ^2.1.1
- **tailwind-merge**: ^3.3.1

## 💡 Próximas Mejoras

- [ ] Agregar animaciones de página con Framer Motion
- [ ] Implementar lazy loading para las páginas
- [ ] Añadir meta tags dinámicos
- [ ] Crear breadcrumbs para navegación
- [ ] Agregar tema oscuro/claro
- [ ] Implementar PWA capabilities

## 🤝 Desarrollo

Para agregar nuevas páginas:

1. Crear el componente en `src/pages/`
2. Agregar la ruta en `src/config/routes.ts`
3. Actualizar el hook `useAppNavigation.ts` si es necesario
4. Añadir la ruta al Router en `App.tsx`

---

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
