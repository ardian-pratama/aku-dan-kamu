import ThemeSwitcher from './ThemeSwitcher.jsx';

export default function Header() {
  return (
    <header className='flex items-center justify-end p-5'>
      <ThemeSwitcher />
    </header>
  );
}
