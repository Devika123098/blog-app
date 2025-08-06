"use client";
import Link from "next/link";
import React, { useState } from "react";
import { cn } from "../lib/utils";
import Image from "next/image";
import logo from "../assets/logo.svg";
import { Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline';
import { usePathname } from "next/navigation"
import BlogSearchBar from "./BlogSearchBar";
const navLinks = [
  { label: "Homepage", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Features", href: "/features" },
  { label: "Blog", href: "/blog" },
  { label: "Contact us", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname()
  return (
    <header
      className={cn(
       
        "sticky top-0 z-30 w-full h-[72px] mb-15 flex items-center justify-between px-6 md:px-12 bg-white/90 backdrop-blur border-b border-gray-200 shadow-sm transition-all duration-300"
      )}
    >
      
      <div className={cn("flex items-center gap-3")}>
        <Image src={logo} alt="Logo" width={36} height={36} className="rounded-lg" />
        <span className={cn("text-2xl font-bold text-gray-900 tracking-tight select-none")}>
          Beyond UI
        </span>
        <div className={cn("hidden md:block ml-6")}>
          <BlogSearchBar />
          </div>
      </div>

     
      <nav className={cn("hidden md:flex items-center gap-8")}>
        <ul className={cn("flex items-center gap-6")}>
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn("text-base font-medium text-gray-700 hover:text-black transition-colors px-3 py-2 rounded-lg",
                 pathname === href ? "bg-gray-300 text-gray-800": "hover:bg-gray-100")}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={cn("flex items-center gap-2 ml-6")}>
          <button className={cn("px-4 py-1.5 text-sm font-medium border border-gray-300 bg-white rounded-lg text-gray-800 hover:bg-gray-100 transition")}>
            Demo
          </button>
          <button className={cn("px-4 py-1.5 text-sm font-semibold bg-black text-white rounded-lg hover:bg-gray-900 transition")}>
            Get Started
          </button>
        </div>
      </nav>

      
      <button
        className={cn("md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition")}
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
        <div className="fixed inset-0 z-40 bg-black/30 md:hidden" onClick={() => setMenuOpen(false)}>
          <nav
            className="absolute right-4 top-14 bg-white rounded-2xl shadow-xl p-6 w-64"
            onClick={e => e.stopPropagation()}
          >
            <div className={cn("block md:hidden w-full mb-4")}>
                  <BlogSearchBar />
            </div>
            <ul className="flex flex-col items-center gap-6">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-base font-medium text-gray-700 hover:text-black transition-colors px-2 py-1 rounded-lg hover:bg-gray-100"
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-center gap-4 mt-6 w-full">
              <button className={cn("w-full px-4 py-2 text-base font-medium border border-gray-300 bg-white rounded-lg text-gray-800 hover:bg-gray-100 transition")}>
                Demo
              </button>
              <button className="w-full px-4 py-2 text-base font-semibold bg-black text-white rounded-lg hover:bg-gray-900 transition">
                Get Started
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}