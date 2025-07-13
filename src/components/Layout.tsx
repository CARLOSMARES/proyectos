import { Link, Outlet } from 'react-router-dom'
import { navigation } from '../config/routes'
import { useAppNavigation } from '../hooks/useAppNavigation'
import Breadcrumb from './Breadcrumb'

const Layout = () => {
    const { isCurrentPath, currentPath } = useAppNavigation()
    const isHome = currentPath === '/'

    if (isHome) {
        return <Outlet />
    }

    return (
        <div className="min-h-screen">
            {/* Navigation Header */}
            <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <Link
                            to="/"
                            className="text-2xl font-bold text-white hover:text-white/80 transition-colors duration-300 flex items-center space-x-2"
                        >
                            <span>✨</span>
                            <span>Mis Proyectos</span>
                        </Link>

                        <nav className="flex items-center space-x-6">
                            {navigation.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${isCurrentPath(item.path)
                                            ? 'bg-white/20 text-white border border-white/30'
                                            : 'text-white/70 hover:text-white hover:bg-white/10'
                                        }`}
                                >
                                    <span>{item.icon}</span>
                                    <span>{item.name}</span>
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </header>

            {/* Breadcrumb */}
            <div className="pt-20">
                <Breadcrumb />
            </div>

            {/* Content */}
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
