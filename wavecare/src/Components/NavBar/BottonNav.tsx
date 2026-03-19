'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

type NavLink = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
};

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Loja', href: '/' },
  {
    label: 'Produtos',
    href: '/produtos',
    dropdown: [
      { label: 'Produtos 1', href: '/produtos' },
      { label: 'Produtos 2', href: '/produtos' },
    ],
  },
  { label: 'Contato', href: '/contato' },
];

export default function BottonNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>(
    {}
  );
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (label: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdowns({});
  };

  return (
    <div
      className={`w-full bg-white py-5 shadow-sm transition-all duration-500 ${
        isFixed ? 'fixed left-0 top-0 z-50' : ''
      }`}
    >
      <div className="flex w-full items-center justify-between px-[8%] text-gray-700 lg:px-[16%]">
        
        {/* logo mobile */}
        <Link
          href="/"
          className="DM-sans text-xl font-bold text-black lg:hidden"
        >
          Poção<span className="text-gradient">Magica</span>
        </Link>

        {/* logo desktop quando fixar */}
        <Link
          href="/"
          className={`DM-sans text-4xl font-bold text-black ${
            isFixed ? 'hidden lg:block' : 'hidden'
          }`}
        >
          Poção<span className="text-gradient">Magica</span>
        </Link>

        {/* menu centralizado */}
        <div className="hidden justify-center lg:flex">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="group relative">
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    className="DM-sans flex items-center gap-1 font-bold text-[var(--black)] transition-colors hover:text-[var(--second)]"
                  >
                    {link.label}
                  </button>

                  {/* dropdown */}
                  {openDropdowns[link.label] && (
                    <div className="absolute top-full mt-2 w-40 rounded-md bg-white shadow-lg">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="DM-sans font-bold text-[var(--black)] transition-colors hover:text-[var(--second)]"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}