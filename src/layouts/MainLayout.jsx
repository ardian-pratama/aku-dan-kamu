import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';

export default function MainLayout() {
  return (
    <div className='flex min-h-dvh flex-col'>
      <Header />
      <main className='container mx-auto flex grow flex-col p-5 pt-[84px]'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
