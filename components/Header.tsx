import { Navigation } from './Navigation';

const linkItems = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
];

export default function Header() {
  return (
    <header>
      <nav>
        <Navigation navLinks={linkItems}></Navigation>
      </nav>
    </header>
  );
}
