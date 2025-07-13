import { useState } from 'react'
import LiquidGlassDemo from './components/LiquidGlassDemo'
import LiquidGlassVariations from './components/LiquidGlassVariations'

function App() {
  const [currentView, setCurrentView] = useState<'front' | 'back'>('front')

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500">

      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="backdrop-blur-xl bg-white/10 rounded-full p-2 border border-white/20 shadow-2xl">
          <div className="flex space-x-2">
            <button
              onClick={() => setCurrentView('front')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${currentView === 'front'
                ? 'bg-white/30 text-white border border-white/50'
                : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
            >
              Proyectos Frotn-End
            </button>
            <button
              onClick={() => setCurrentView('back')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${currentView === 'back'
                ? 'bg-white/30 text-white border border-white/50'
                : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
            >
              Proyectos Back-End
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24">
        {currentView === 'front' ? <LiquidGlassDemo /> : <LiquidGlassVariations />}
      </div>

    </div>
  )
}

export default App
