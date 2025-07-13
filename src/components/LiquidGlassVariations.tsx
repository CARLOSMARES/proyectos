
const LiquidGlassVariations = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-white mb-4">
                        Liquid Glass Collection
                    </h1>
                    <p className="text-white/70 text-xl">
                        Diferentes variaciones del efecto glassmorphism inspirado en Apple
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Card 1: Liquid Button */}
                    <div className="liquid-glass backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500">
                        <h3 className="text-xl font-semibold text-white mb-4">Liquid Buttons</h3>
                        <div className="space-y-4">
                            <button className="w-full py-3 px-6 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium hover:bg-white/30 transition-all duration-300 border border-white/30 liquid-shape">
                                Primary Button
                            </button>
                            <button className="w-full py-3 px-6 bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-sm rounded-full text-white font-medium hover:from-blue-500/40 hover:to-purple-500/40 transition-all duration-300 border border-white/30">
                                Gradient Button
                            </button>
                            <button className="w-full py-3 px-6 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300 border-2 border-white/50">
                                Outlined Button
                            </button>
                        </div>
                    </div>

                    {/* Card 2: Control Panel */}
                    <div className="liquid-glass backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500">
                        <h3 className="text-xl font-semibold text-white mb-6">Control Panel</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-white/80">Brillo</span>
                                <div className="w-32 h-2 bg-white/20 rounded-full">
                                    <div className="w-20 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-white/80">Volumen</span>
                                <div className="w-32 h-2 bg-white/20 rounded-full">
                                    <div className="w-24 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-white/80">Wi-Fi</span>
                                <div className="w-12 h-6 bg-white/20 rounded-full p-1 transition-all duration-300 hover:bg-white/30">
                                    <div className="w-4 h-4 bg-blue-400 rounded-full ml-auto"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Music Player */}
                    <div className="liquid-glass backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500">
                        <h3 className="text-xl font-semibold text-white mb-4">Music Player</h3>
                        <div className="space-y-4">
                            <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl mx-auto flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.369 4.369 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"></path>
                                </svg>
                            </div>
                            <div className="text-center">
                                <p className="text-white font-semibold">Canción Actual</p>
                                <p className="text-white/60 text-sm">Artista</p>
                            </div>
                            <div className="flex justify-center space-x-4">
                                <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z"></path>
                                    </svg>
                                </button>
                                <button className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                                    </svg>
                                </button>
                                <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Weather Widget */}
                    <div className="liquid-glass backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500">
                        <h3 className="text-xl font-semibold text-white mb-4">Clima</h3>
                        <div className="text-center space-y-4">
                            <div>
                                <div className="text-4xl font-bold text-white">24°</div>
                                <p className="text-white/70">Soleado</p>
                            </div>
                            <div className="grid grid-cols-3 gap-2 text-center">
                                <div>
                                    <p className="text-white/60 text-xs">Mín</p>
                                    <p className="text-white font-semibold">18°</p>
                                </div>
                                <div>
                                    <p className="text-white/60 text-xs">Máx</p>
                                    <p className="text-white font-semibold">28°</p>
                                </div>
                                <div>
                                    <p className="text-white/60 text-xs">Humedad</p>
                                    <p className="text-white font-semibold">65%</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 5: Navigation Menu */}
                    <div className="liquid-glass backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500">
                        <h3 className="text-xl font-semibold text-white mb-6">Navegación</h3>
                        <nav className="space-y-3">
                            {[
                                { icon: '🏠', label: 'Inicio' },
                                { icon: '📊', label: 'Dashboard' },
                                { icon: '⚙️', label: 'Configuración' },
                                { icon: '👤', label: 'Perfil' },
                                { icon: '📱', label: 'Aplicaciones' }
                            ].map((item, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/20 transition-all duration-300 group"
                                >
                                    <span className="text-xl group-hover:scale-110 transition-transform">{item.icon}</span>
                                    <span className="text-white/80 group-hover:text-white">{item.label}</span>
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Card 6: Analytics */}
                    <div className="liquid-glass backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500">
                        <h3 className="text-xl font-semibold text-white mb-6">Analytics</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-white/80">Visitantes hoy</span>
                                <span className="text-2xl font-bold text-white">1,234</span>
                            </div>
                            <div className="h-20 bg-white/10 rounded-xl p-4 relative overflow-hidden">
                                <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full"></div>
                                <div className="absolute inset-0 flex items-end space-x-1 px-4 pb-4">
                                    {[40, 65, 45, 80, 60, 90, 75].map((height, index) => (
                                        <div
                                            key={index}
                                            className="bg-white/30 rounded-t flex-1"
                                            style={{ height: `${height}%` }}
                                        ></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Footer con más ejemplos */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Liquid Input Form */}
                    <div className="liquid-glass backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20">
                        <h3 className="text-xl font-semibold text-white mb-6">Formulario Liquid</h3>
                        <form className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Nombre"
                                    className="w-full p-4 bg-white/10 backdrop-blur-sm rounded-2xl text-white placeholder-white/60 border border-white/30 focus:border-white/50 focus:bg-white/15 transition-all duration-300 outline-none"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full p-4 bg-white/10 backdrop-blur-sm rounded-2xl text-white placeholder-white/60 border border-white/30 focus:border-white/50 focus:bg-white/15 transition-all duration-300 outline-none"
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder="Mensaje"
                                    rows={4}
                                    className="w-full p-4 bg-white/10 backdrop-blur-sm rounded-2xl text-white placeholder-white/60 border border-white/30 focus:border-white/50 focus:bg-white/15 transition-all duration-300 outline-none resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-blue-500/40 to-purple-500/40 backdrop-blur-sm rounded-2xl text-white font-semibold hover:from-blue-500/50 hover:to-purple-500/50 transition-all duration-300 border border-white/30"
                            >
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>

                    {/* Floating Action Buttons */}
                    <div className="liquid-glass backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20">
                        <h3 className="text-xl font-semibold text-white mb-6">Botones Flotantes</h3>
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { bg: 'from-blue-400 to-blue-600', icon: '💬' },
                                { bg: 'from-green-400 to-green-600', icon: '📞' },
                                { bg: 'from-purple-400 to-purple-600', icon: '✉️' },
                                { bg: 'from-pink-400 to-pink-600', icon: '❤️' },
                                { bg: 'from-yellow-400 to-yellow-600', icon: '⭐' },
                                { bg: 'from-red-400 to-red-600', icon: '🔔' }
                            ].map((button, index) => (
                                <button
                                    key={index}
                                    className={`aspect-square bg-gradient-to-br ${button.bg} rounded-2xl flex items-center justify-center text-2xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
                                >
                                    {button.icon}
                                </button>
                            ))}
                        </div>
                        <div className="mt-6 text-center">
                            <button className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium hover:bg-white/30 transition-all duration-300 border border-white/30 animate-float">
                                Botón Flotante
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LiquidGlassVariations
