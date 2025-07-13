export const routes = {
    home: '/',
    frontend: '/frontend',
    backend: '/backend',
} as const

export type RouteKey = keyof typeof routes
export type RoutePath = typeof routes[RouteKey]

// Navegación helper
export const navigation = [
    {
        name: 'Inicio',
        path: routes.home,
        icon: '🏠'
    },
    {
        name: 'Frontend',
        path: routes.frontend,
        icon: '🎨'
    },
    {
        name: 'Backend',
        path: routes.backend,
        icon: '⚙️'
    }
] as const
