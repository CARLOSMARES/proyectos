# Guía de Commits y Buenas Prácticas

Este proyecto utiliza commits convencionales y herramientas automatizadas para mantener la calidad del código.

## 📝 Formato de Commits

Los mensajes de commit deben seguir la siguiente estructura:

```
<tipo>(<ámbito>): <descripción>

[cuerpo opcional]

[pie opcional]
```

### Tipos de Commit

- **feat**: Nueva funcionalidad
- **fix**: Corrección de errores
- **docs**: Cambios en documentación
- **style**: Formateo, espacios en blanco, etc. (sin cambios en lógica)
- **refactor**: Refactorización de código
- **test**: Añadir o corregir tests
- **chore**: Tareas de mantenimiento
- **perf**: Mejoras de rendimiento
- **ci**: Cambios en CI/CD
- **build**: Cambios en el sistema de build
- **revert**: Revertir commits

### Ejemplos

```bash
feat(auth): añadir autenticación con Google
fix(navbar): corregir problema de responsive en móvil
docs(readme): actualizar instrucciones de instalación
style(components): formatear código según prettier
refactor(utils): simplificar función de validación
test(auth): añadir tests para login
chore(deps): actualizar dependencias
```

## 🚀 Scripts Disponibles

### Desarrollo

```bash
npm run dev              # Iniciar servidor de desarrollo
npm run build            # Construir para producción
npm run preview          # Vista previa de la build
```

### Calidad de Código

```bash
npm run lint             # Ejecutar ESLint
npm run lint:fix         # Ejecutar ESLint y corregir automáticamente
npm run format           # Formatear código con Prettier
npm run format:check     # Verificar formato con Prettier
```

### Commits

```bash
npm run commit           # Commit interactivo con commitizen
git commit -m "..."      # Commit normal (se validará automáticamente)
```

## 🔧 Herramientas Automatizadas

### Pre-commit Hook

Antes de cada commit se ejecuta automáticamente:

- ESLint en archivos JavaScript/TypeScript
- Prettier en archivos JSON, Markdown, HTML, CSS
- Solo se procesan archivos que están en staging

### Commit Message Hook

Se valida que el mensaje de commit siga las convenciones antes de permitir el commit.

## 📋 Flujo de Trabajo Recomendado

1. **Hacer cambios** en tu código
2. **Añadir archivos** al staging: `git add .`
3. **Hacer commit interactivo**: `npm run commit`
   - O commit normal: `git commit -m "feat: nueva funcionalidad"`
4. Los hooks se ejecutarán automáticamente:
   - Pre-commit: linting y formateo
   - Commit-msg: validación del mensaje

## ⚡ Comandos de Emergencia

Si necesitas hacer un commit sin pasar por las validaciones (solo en emergencias):

```bash
git commit --no-verify -m "mensaje"
```

## 🛠️ Configuración

- **ESLint**: Configurado en `eslint.config.js`
- **Prettier**: Configurado en `.prettierrc.json`
- **Commitlint**: Configurado en `commitlint.config.js`
- **Lint-staged**: Configurado en `.lintstagedrc.json`
- **Husky**: Hooks en `.husky/`

## 🎯 Beneficios

- ✅ Código consistentemente formateado
- ✅ Commits descriptivos y estandarizados
- ✅ Detección temprana de errores
- ✅ Historial de git limpio y legible
- ✅ Facilita la generación automática de changelogs
- ✅ Mejora la colaboración en equipo
