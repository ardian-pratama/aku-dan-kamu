import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout.jsx';
import HomePage from '../pages/HomePage.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';
import MainPage from '../pages/MainPage.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: 'main',
        Component: MainPage
      },
      {
        path: '*',
        Component: NotFoundPage
      }
    ],
  },
]);
