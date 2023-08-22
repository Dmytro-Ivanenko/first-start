'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type } from 'os';

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

const Navigation = ({ navLinks }: Props) => {
  const pathName = usePathname();

  return (
    <>
      {navLinks.map(item => {
        const isActive = pathName === item.href;

        return (
          <Link
            key={item.label}
            href={item.href}
            className={isActive ? 'active' : ''}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
};

export { Navigation };
