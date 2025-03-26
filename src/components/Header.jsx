import ThemeSwitcher from './ThemeSwitcher.jsx';

export default function Header() {
  return (
    <header className='fixed inset-0 h-16'>
      <div className='m-auto container flex items-center justify-end h-16 px-5 bg-background'>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
