"use client"
import Link from "next/link";
import React, { useState } from "react";
import { cn } from "../lib/utils";
import Image from "next/image";
import logo from "../assets/logo.svg";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { label: "Homepage", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Features", href: "/features" },
  { label: "Blog", href: "/blog" },
  { label: "Contact us", href: "/contact" },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header
      className={cn(
        "w-full h-[72px]  bg-white flex items-center justify-between px-8 border border-gray-300 md:border-0 rounded-xl"
      )}
    >
      
      <div className="flex items-center gap-3">
        <Image src={logo} alt="Logo" width={32} height={32} />
        <span className="text-xl font-semibold text-gray-900 tracking-tight">
          Beyond UI
        </span>
      </div>

     
      <nav className=" hidden md:flex items-center gap-8">
        <ul className="flex items-center gap-6">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 ml-4">
          <button className="px-4 py-1.5 text-sm font-medium border border-gray-300 bg-white rounded-lg text-gray-800 hover:bg-gray-100 transition">
            Demo
          </button>
          <button className="px-4 py-1.5 text-sm font-semibold bg-black text-white rounded-lg hover:bg-gray-900 transition">
            Get Started
          </button>
        </div>
      </nav>
      <button className={cn("md:hidden w-8 h-8")}
      aria-label={menuOpen ? "Close menu" : "Open menu"}
      onClick={() => setMenuOpen((v) => !v)}
      >
            {menuOpen ? (
        <XMarkIcon className="w-8 h-8 text-black" />
      ) : (
        <Bars3Icon className="w-8 h-8 text-black" />
      )}
      </button>
{menuOpen && (
  <div className=" absolute inset-0 md:hidden" onClick={() => setMenuOpen(false)}>
    <nav
      className="absolute right-10 top-25 bg-white shadow-lg p-6 w-60"
      onClick={e => e.stopPropagation()}
    >
      <ul className="flex flex-col items-center gap-6">
        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              className=" text-sm font-medium text-gray-700 hover:text-black transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex flex-col items-center gap-6 mt-6 w-full">
        <button className=" w-full px-4 py-2 text-base font-medium border border-gray-300 bg-white rounded-lg text-gray-800 hover:bg-gray-100 transition">
          Demo
        </button>
        <button className=" w-full px-4 py-2 text-base font-semibold bg-black text-white rounded-lg hover:bg-gray-900 transition">
          Get Started
        </button>
      </div>
    </nav>
  </div>
)}

    </header>
  );
}