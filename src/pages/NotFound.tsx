import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-red-500 via-purple-600 to-blue-600 flex items-center justify-center'>
      <div className='text-center space-y-8'>
        <div className='backdrop-blur-xl bg-white/10 rounded-3xl p-12 border border-white/20 shadow-2xl'>
          <div className='text-8xl mb-6'>🤔</div>
          <h1 className='text-6xl font-bold text-white mb-4'>404</h1>
          <h2 className='text-3xl font-semibold text-white mb-6'>
            Página no encontrada
          </h2>
          <p className='text-white/80 text-xl mb-8 max-w-md'>
            Lo siento, la página que buscas no existe o ha sido movida.
          </p>

          <div className='space-y-4'>
            <Link
              to='/'
              className='inline-block px-8 py-4 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium hover:bg-white/30 transition-all duration-300 border border-white/30'
            >
              Volver al inicio
            </Link>

            <div className='flex justify-center space-x-4 mt-6'>
              <Link
                to='/frontend'
                className='px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 border border-white/20'
              >
                Frontend
              </Link>
              <Link
                to='/backend'
                className='px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 border border-white/20'
              >
                Backend
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
