"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/data/Appbar";

export default function Appbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="px-4 py-5 border-b border-gray-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="hover:cursor-pointer">
          <Image
            src="https://zerodha.com/static/images/logo.svg"
            alt="Zerodha Logo"
            width={150}
            height={50}
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="text-[16px] font-normal hover:text-[#387ED1] transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger Icon */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                open
                  ? "M6 18L18 6M6 6l12 12"
                  : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              }
            />
          </svg>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden mt-4 space-y-4 px-2 pb-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="block text-[16px] py-2 border-b border-gray-200 hover:text-[#387ED1]"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
