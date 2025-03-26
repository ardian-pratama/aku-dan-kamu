import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.jsx';
import './index.css';
import { router } from './routes/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider defaultTheme='system' storageKey='theme'>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
