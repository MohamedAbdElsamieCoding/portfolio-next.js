"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { LuMenu, LuX } from "react-icons/lu";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { title: "Home", link: "/" },
    { title: "Projects", link: "/projects" },
    { title: "About", link: "/about" },
    { title: "Contact", link: "/contact" },
  ];

  return (
    <header className="border-b border-border bg-surface">
      <div className="relative flex justify-between px-4 md:px-10 py-4">
        <Link
          href="/"
          className=" text-xl font-bold text-primary/80 hover:text-primary transition-all"
        >
          Mohamed Amr
        </Link>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-10 text-secondary">
            {navLinks.map((item) => (
              <li key={item.title} className="">
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            className="md:hidden rounded-md border border-border bg-surface p-2 text-xl text-primary transition-colors hover:bg-background"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            {isMenuOpen ? <LuX /> : <LuMenu />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="absolute left-0 top-full z-50 w-full bg-surface px-4 py-5 md:hidden">
            <ul className="flex flex-col gap-5 text-secondary">
              {navLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.link}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg transition-colors hover:text-primary text-center"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
