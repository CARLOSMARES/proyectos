export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // Nueva funcionalidad
        'fix', // Corrección de errores
        'docs', // Cambios en documentación
        'style', // Formateo, espacios en blanco, etc.
        'refactor', // Refactorización de código
        'test', // Añadir o corregir tests
        'chore', // Tareas de mantenimiento
        'perf', // Mejoras de rendimiento
        'ci', // Cambios en CI/CD
        'build', // Cambios en el sistema de build
        'revert', // Revertir commits
      ],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 72],
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
  },
};
