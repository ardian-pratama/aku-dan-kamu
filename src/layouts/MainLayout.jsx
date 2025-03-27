import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';

export default function MainLayout() {
  return (
    <div className='container mx-auto flex min-h-dvh flex-col overflow-hidden'>
      <Header />
      <main className='mt-16 grow p-5 flex flex-col'>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
