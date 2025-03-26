import { Outlet } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default function MainLayout() {
  return (
    <div className='container mx-auto flex flex-col min-h-dvh'>
      <Header />
      <main className='p-5 grow min-h-[calc(100dvh-64px)] mt-16 flex flex-col'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
