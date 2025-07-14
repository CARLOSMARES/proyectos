import { Link } from 'react-router-dom';
import { navigation } from '../config/routes';
import { useAppNavigation } from '../hooks/useAppNavigation';

const Breadcrumb = () => {
  const { currentPath } = useAppNavigation();

  // No mostrar breadcrumb en la página de inicio
  if (currentPath === '/') return null;

  const currentPage = navigation.find(item => item.path === currentPath);

  return (
    <nav className='max-w-7xl mx-auto px-6 py-4' aria-label='Breadcrumb'>
      <div className='flex items-center space-x-2 text-white/60'>
        <Link
          to='/'
          className='hover:text-white transition-colors duration-300 flex items-center space-x-1'
        >
          <span>🏠</span>
          <span>Inicio</span>
        </Link>
        <span>/</span>
        <span className='text-white font-medium flex items-center space-x-1'>
          <span>{currentPage?.icon}</span>
          <span>{currentPage?.name}</span>
        </span>
      </div>
    </nav>
  );
};

export default Breadcrumb;
