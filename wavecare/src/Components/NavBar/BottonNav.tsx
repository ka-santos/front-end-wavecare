'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

type NavLink = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
};

const navLinks: NavLink[] = [
  { label: 'Início', href: '/' },
  { label: 'Poções', href: '/pocoes' },
  {
    label: 'Drinks',
    href: '/drinks',
    dropdown: [
      { label: 'Poções Doces', href: '/drinks/doces' },
      { label: 'Poções Especiais', href: '/drinks/especiais' },
      { label: 'Poções Premium', href: '/drinks/premium' },
    ],
  },
  { label: 'Sobre', href: '/sobre' },
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

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
    <>
      <div
        className={`w-full bg-white py-5 shadow-sm transition-all duration-500 ${
          isFixed ? 'fixed left-0 top-0 z-50' : ''
        }`}
      >
        <div className="flex w-full items-center justify-between px-[8%] lg:px-[16%]">

          {/* Logo Mobile */}
          <Link
            href="/"
            className="DM-sans text-xl font-bold text-black lg:hidden"
          >
            Poção<span className="text-gradient">Magica</span>
          </Link>

          {/* Botão Mobile */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="text-3xl text-black lg:hidden"
          >
            <i className="ri-menu-line"></i>
          </button>

          {/* Logo Desktop */}
          <Link
            href="/"
            className={`DM-sans text-3xl font-bold text-black ${
              isFixed ? 'hidden lg:block' : 'hidden'
            }`}
          >
            Poção<span className="text-gradient">Magica</span>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center gap-10">

            <nav className="flex items-center gap-8">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label} className="relative">
                    <button
                      onClick={() => toggleDropdown(link.label)}
                      className="DM-sans flex items-center gap-1 font-bold text-black hover:text-[var(--second)]"
                    >
                      {link.label}
                      <i className="ri-arrow-down-s-line"></i>
                    </button>

                    {openDropdowns[link.label] && (
                      <div className="absolute top-full mt-2 w-52 rounded-lg bg-white shadow-xl">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="block px-4 py-3 hover:bg-gray-100"
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
                    className="DM-sans font-bold text-black hover:text-[var(--second)]"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Login */}
            <Link
              href="/login"
              className="font-semibold text-black hover:text-[var(--second)]"
            >
              Login
            </Link>

            {/* Cadastro */}
            <Link
              href="/cadastro"
              className="font-semibold text-black hover:text-[var(--second)]"
            >
              Cadastro
            </Link>

            {/* Carrinho */}
            <Link
              href="/carrinho"
              className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[var(--second)] text-white"
            >
              <i className="ri-shopping-cart-2-line text-xl"></i>

              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold">
                2
              </span>
            </Link>

          </div>
        </div>
      </div>

      {/* MENU MOBILE */}
      <div
        className={`fixed inset-0 z-[999] bg-[#1f1636] text-white transition-all duration-300 lg:hidden ${
          mobileMenuOpen
            ? 'translate-x-0 opacity-100'
            : 'pointer-events-none translate-x-full opacity-0'
        }`}
      >
        {/* Topo */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <h1 className="text-2xl font-bold">
            Poção<span className="text-[var(--second)]">Magica</span>
          </h1>

          <button
            onClick={closeMobileMenu}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white"
          >
            <i className="ri-close-line text-2xl"></i>
          </button>
        </div>

        {/* Login e Cadastro */}
        <div className="flex gap-6 border-b border-white/10 px-6 py-4">
          <Link href="/login" className="font-semibold">
            Login
          </Link>

          <Link href="/cadastro" className="font-semibold">
            Cadastro
          </Link>
        </div>

        {/* Links */}
        <nav className="px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={closeMobileMenu}
              className="block border-b border-white/10 py-5 text-lg font-semibold"
            >
              {link.label}
            </Link>
          ))}

          {/* Redes sociais */}
          <div className="mt-8 flex gap-5 text-2xl">
            <a href="#">
              <i className="ri-instagram-line"></i>
            </a>

            <a href="#">
              <i className="ri-facebook-circle-line"></i>
            </a>

            <a href="#">
              <i className="ri-whatsapp-line"></i>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}