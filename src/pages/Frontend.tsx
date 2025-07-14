import LiquidGlassDemo from '../components/LiquidGlassDemo'

const Frontend = () => {
    return (
        <div className="min-h-[calc(100vh-5rem)] bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500">
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-white mb-4">
                        Proyectos Frontend
                    </h1>
                    <p className="text-white/70 text-xl">
                        Interfaces de usuario modernas y responsivas
                    </p>
                </div>

                <LiquidGlassDemo />
            </div>
        </div>
    )
}

export default Frontend
