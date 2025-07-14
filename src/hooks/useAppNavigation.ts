import { useLocation, useNavigate } from 'react-router-dom';
import { routes, type RoutePath } from '../config/routes';

export const useAppNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateTo = (path: RoutePath) => {
    navigate(path);
  };

  const isCurrentPath = (path: RoutePath) => {
    return location.pathname === path;
  };

  const goHome = () => navigateTo(routes.home);
  const goToFrontend = () => navigateTo(routes.frontend);
  const goToBackend = () => navigateTo(routes.backend);

  return {
    navigateTo,
    isCurrentPath,
    goHome,
    goToFrontend,
    goToBackend,
    currentPath: location.pathname as RoutePath,
    location,
  };
};
