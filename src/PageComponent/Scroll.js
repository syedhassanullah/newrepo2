import  { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Scroll = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when the route changes
    window.scrollTo(0, 0);
  }, [location]);

  return null; // No UI rendering needed
};

export default Scroll;
