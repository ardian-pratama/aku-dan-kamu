import { Outlet } from 'react-router-dom';
import Header from '../components/Header.jsx';

export default function MainLayout() {
  return (
    <div className='container mx-auto flex flex-col'>
      <Header />
      <main className='p-5'>
        <Outlet />
      </main>
    </div>
  );
}
