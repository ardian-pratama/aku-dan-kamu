import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';

export default function MainLayout() {
  return (
    <div className='container mx-auto flex min-h-dvh flex-col overflow-hidden'>
      <Header />
      <main className='mt-16 flex min-h-[calc(100dvh-64px)] grow flex-col p-5'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
