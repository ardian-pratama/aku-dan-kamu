import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout.jsx';
import HomePage from '../pages/HomePage.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
    ],
  },
]);
