import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout.jsx';
import AlbumPage from '../pages/AlbumPage.jsx';
import HomePage from '../pages/HomePage.jsx';
import JourneyPage from '../pages/JourneyPage.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';

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
        path: 'album',
        Component: AlbumPage,
      },
      {
        path: 'petualangan',
        Component: JourneyPage,
      },
      {
        path: '*',
        Component: NotFoundPage,
      },
    ],
  },
]);
