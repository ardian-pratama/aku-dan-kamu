import { useEffect } from 'react';
import { ScrollRestoration, useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <ScrollRestoration />;
}
