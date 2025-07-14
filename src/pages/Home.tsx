import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 flex items-center justify-center'>
      <div className='text-center space-y-8'>
        <div className='backdrop-blur-xl bg-white/10 rounded-3xl p-12 border border-white/20 shadow-2xl'>
          <h1 className='text-6xl font-bold text-white mb-6'>Mis Proyectos</h1>
          <p className='text-white/80 text-xl mb-8 max-w-2xl'>
            Bienvenido a mi portafolio de desarrollo. Explora mis proyectos de
            Frontend y Backend.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto'>
            <Link
              to='/frontend'
              className='group backdrop-blur-sm bg-white/10 rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105'
            >
              <div className='text-4xl mb-4'>🎨</div>
              <h3 className='text-2xl font-semibold text-white mb-3'>
                Frontend
              </h3>
              <p className='text-white/70'>
                Proyectos de interfaz de usuario, React, TypeScript y más
              </p>
              <div className='mt-4 text-white/60 group-hover:text-white transition-colors duration-300'>
                Explorar →
              </div>
            </Link>

            <Link
              to='/backend'
              className='group backdrop-blur-sm bg-white/10 rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105'
            >
              <div className='text-4xl mb-4'>⚙️</div>
              <h3 className='text-2xl font-semibold text-white mb-3'>
                Backend
              </h3>
              <p className='text-white/70'>
                APIs, bases de datos, servidores y arquitectura
              </p>
              <div className='mt-4 text-white/60 group-hover:text-white transition-colors duration-300'>
                Explorar →
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
