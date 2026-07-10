"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaBuilding } from "react-icons/fa6";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Apartments",
    href: "/apartments",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <section className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FF5A3C] text-white">
            <FaBuilding size={20} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-[#2C2C2C]">
              DwellSpot
            </h1>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative pb-1 text-[15px] font-medium transition-all duration-300 ${
                pathname === link.href
                  ? "text-[#FF5A3C]"
                  : "text-[#2C2C2C] hover:text-[#FF5A3C]"
              }`}
            >
              {link.name}

              {pathname === link.href && (
                <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#FF5A3C]" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="rounded-lg border border-[#FF5A3C] px-5 py-2 font-medium text-[#FF5A3C] transition hover:bg-[#FF5A3C] hover:text-white"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-lg bg-[#FF5A3C] px-5 py-2 font-medium text-white transition hover:bg-[#ea4b2d]"
          >
            Register
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-[#2C2C2C] md:hidden"
        >
          {open ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </section>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? "max-h-96 border-t border-gray-200" : "max-h-0"
        }`}
      >
        <section className="bg-white px-5 py-5">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`font-medium transition ${
                  pathname === link.href
                    ? "text-[#FF5A3C]"
                    : "text-[#2C2C2C]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="rounded-lg border border-[#FF5A3C] py-3 text-center font-medium text-[#FF5A3C]"
            >
              Login
            </Link>

            <Link
              href="/register"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-[#FF5A3C] py-3 text-center font-medium text-white"
            >
              Register
            </Link>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Navbar;