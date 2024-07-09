'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItemProps {
  label: string;
  link: string;
  icon: React.ReactNode;
}

export const NavItem: React.FC<NavItemProps> = ({ label, link, icon }) => {
  const pathname = usePathname();
  return (
    <Link
      href={link}
      className={`flex w-full items-center p-4 font-medium hover:bg-gray-700 ${
        pathname === link ? 'border-r-4 border-r-green-500 bg-gray-600' : ''
      }`}
    >
      <div className="mr-1">{icon}</div>
      <div>{label}</div>
    </Link>
  );
};
