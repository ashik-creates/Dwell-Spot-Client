import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#2C2C2C] text-gray-300">
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="text-3xl font-bold text-white">
            <span className="text-[#FF5A3C]">Dwell</span>Spot
          </Link>

          <p className="mt-5 leading-7">
            Discover verified apartments with confidence. DwellSpot makes
            apartment hunting simple through trusted listings, transparent
            pricing, and a modern rental experience.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <Link
              href="https://www.facebook.com/ashik.aryan.52"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#3A3A3A] p-3 transition hover:bg-[#FF5A3C] hover:text-white"
            >
              <FaFacebookF />
            </Link>

            <Link
              href="https://github.com/ashik-creates"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#3A3A3A] p-3 transition hover:bg-[#FF5A3C] hover:text-white"
            >
              <FaGithub />
            </Link>

            <Link
              href="https://linkedin.com/in/ashik-creates"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#3A3A3A] p-3 transition hover:bg-[#FF5A3C] hover:text-white"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-xl font-semibold text-white">
            Quick Links
          </h3>

          <div className="flex flex-col gap-4">
            <Link href="/" className="transition hover:text-[#FF5A3C]">
              Home
            </Link>

            <Link
              href="/apartments"
              className="transition hover:text-[#FF5A3C]"
            >
              Apartments
            </Link>

            <Link
              href="/about"
              className="transition hover:text-[#FF5A3C]"
            >
              About
            </Link>

            <Link
              href="/blog"
              className="transition hover:text-[#FF5A3C]"
            >
              Blog
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-xl font-semibold text-white">
            Account
          </h3>

          <div className="flex flex-col gap-4">
            <Link
              href="/login"
              className="transition hover:text-[#FF5A3C]"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="transition hover:text-[#FF5A3C]"
            >
              Register
            </Link>

            <Link
              href="/add-apartment"
              className="transition hover:text-[#FF5A3C]"
            >
              Add Apartment
            </Link>

            <Link
              href="/manage-apartment"
              className="transition hover:text-[#FF5A3C]"
            >
              Manage Apartments
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-xl font-semibold text-white">
            Contact
          </h3>

          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <FaLocationDot className="mt-1 text-[#FF5A3C]" />

              <p>Gazipur, Dhaka, Bangladesh</p>
            </div>

            <div className="flex items-center gap-3">
              <MdEmail className="text-[#FF5A3C]" />

              <a
                href="mailto:ashikorrahman8900@gmail.com"
                className="transition hover:text-[#FF5A3C]"
              >
                ashikorrahman8900@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaPhone className="text-[#FF5A3C]" />

              <a
                href="tel:+8801700000000"
                className="transition hover:text-[#FF5A3C]"
              >
                +880 1776417604
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-700">
        <section className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-center text-sm text-gray-400 md:flex-row md:text-left">
          <p>
            © {new Date().getFullYear()} DwellSpot. All rights reserved.
          </p>

          <p>
            Designed & Developed with{" "}
            <span className="text-[#FF5A3C]">❤</span> using Next.js,
            TypeScript & MongoDB.
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;