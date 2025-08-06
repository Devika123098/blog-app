"use client";
import Link from "next/link";
import React, { useState } from "react";
import { cn } from "../lib/utils";
import Image from "next/image";
import logo from "../assets/logo.svg";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "sticky top-0 z-30 w-full h-[72px] flex items-center justify-between px-4 md:px-12 bg-white/80 backdrop-blur border-b border-gray-100 shadow-lg transition-all duration-300"
      )}
    >
      <div className={cn("flex items-center gap-3")}>
        <Image src={logo} alt="Logo" width={36} height={36} className={cn("rounded-xl shadow")} />
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
                className={cn(
                  "relative text-base font-medium px-3 py-2 rounded-xl transition-all duration-200",
                  pathname === href
                    ? "text-gray-900 after:absolute after:left-3 after:bottom-1 after:w-2/3 after:h-0.5 after:bg-gray-900 after:rounded-full"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={cn("flex items-center gap-2 ml-6")}>
          <button className={cn(
            "px-4 py-1.5 text-sm font-medium border border-gray-200 bg-white rounded-2xl text-gray-800 shadow-sm hover:bg-gray-100 hover:scale-105 hover:shadow-md transition-all duration-200"
          )}>
            Demo
          </button>
          <button className={cn(
            "px-4 py-1.5 text-sm font-semibold bg-black text-white rounded-2xl shadow-sm hover:bg-gray-900 hover:scale-105 hover:shadow-md transition-all duration-200"
          )}>
            Get Started
          </button>
        </div>
      </nav>

      <button
        className={cn("md:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100 transition")}
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
        <div className={cn("fixed inset-0 z-40 bg-black/30 md:hidden")} onClick={() => setMenuOpen(false)}>
          <nav
            className={cn("absolute right-4 top-16 bg-white/90 rounded-2xl shadow-2xl p-6 w-72 border border-gray-100 backdrop-blur")}
            onClick={e => e.stopPropagation()}
          >
            <div className={cn("block md:hidden w-full mb-4")}>
              <BlogSearchBar />
            </div>
            <ul className={cn("flex flex-col items-center gap-6")}>
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      "text-base font-medium px-3 py-2 rounded-xl transition-all duration-200 w-full text-center",
                      pathname === href
                        ? "bg-gray-200 text-gray-900"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                    )}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className={cn("flex flex-col items-center gap-4 mt-6 w-full")}>
              <button className={cn(
                "w-full px-4 py-2 text-base font-medium border border-gray-200 bg-white rounded-2xl text-gray-800 shadow-sm hover:bg-gray-100 hover:scale-105 hover:shadow-md transition-all duration-200"
              )}>
                Demo
              </button>
              <button className={cn(
                "w-full px-4 py-2 text-base font-semibold bg-black text-white rounded-2xl shadow-sm hover:bg-gray-900 hover:scale-105 hover:shadow-md transition-all duration-200"
              )}>
                Get Started
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}