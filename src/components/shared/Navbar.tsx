"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaBuilding } from "react-icons/fa6";
import { Dropdown, Avatar, Label } from "@heroui/react";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
import toast from "react-hot-toast";

const ACCENT = "#FF5A3C";
const TEXT = "#2C2C2C";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Apartments", href: "/apartments" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

type SessionUser = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
};

function linkClass(active: boolean, variant: "desktop" | "mobile" = "desktop") {
  const base =
    variant === "desktop"
      ? "relative pb-1 text-[15px] font-medium transition-all duration-300"
      : "font-medium transition";
  return `${base} ${active ? "text-[#FF5A3C]" : "text-[#2C2C2C] hover:text-[#FF5A3C]"}`;
}

function NavLink({
  href,
  label,
  active,
  variant = "desktop",
  onClick,
}: {
  href: string;
  label: string;
  active: boolean;
  variant?: "desktop" | "mobile";
  onClick?: () => void;
}) {
  return (
    <Link href={href} onClick={onClick} className={linkClass(active, variant)}>
      {label}
      {variant === "desktop" && active && (
        <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#FF5A3C]" />
      )}
    </Link>
  );
}

function UserAvatar({ user, size }: { user: SessionUser; size?: "sm" }) {
  return (
    <Avatar size={size}>
      <Avatar.Image src={user.image || "/user.png"} alt={user.name ?? ""} />
      <Avatar.Fallback>{user.name?.charAt(0)}</Avatar.Fallback>
    </Avatar>
  );
}

function UserInfo({ user }: { user: SessionUser }) {
  return (
    <div className="leading-tight">
      <h4 className="text-sm font-semibold text-[#2C2C2C]">{user.name}</h4>
      <p className="truncate text-xs text-gray-500">{user.email}</p>
    </div>
  );
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user as SessionUser | undefined;
  const router = useRouter();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const closeMenu = () => setOpen(false);

  const handleLogout = async () => {
    await authClient.signOut();

    toast.success("Logged out successfully!");
    router.refresh();
  };

  const links = user
    ? [...NAV_LINKS, { name: "Add Apartment", href: "/add-apartment" }, { name: "Manage Apartments", href: "/manage-apartment" }]
    : NAV_LINKS;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <section className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div
            className="flex h-11 w-11 items-center justify-center rounded-xl text-white"
            style={{ backgroundColor: ACCENT }}
          >
            <FaBuilding size={20} />
          </div>
          <h1 className="text-2xl font-bold" style={{ color: TEXT }}>
            DwellSpot
          </h1>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.name}
              active={isActive(link.href)}
            />
          ))}
        </nav>

        {/* Desktop auth area */}
        <div className="hidden items-center gap-3 md:flex">
          {isPending ? null : user ? (
            <Dropdown>
              <Dropdown.Trigger className="flex items-center gap-3 rounded-xl border border-divider px-3 py-2 text-left transition hover:bg-default-100">
                <UserAvatar user={user} size="sm" />
                <span className="max-w-32 truncate text-sm font-medium text-[#2C2C2C]">
                  {user.name}
                </span>
              </Dropdown.Trigger>

              <Dropdown.Popover className="mr-2 w-full max-w-72 rounded-xl border border-divider bg-content1 shadow-xl">
                <div className="border-b border-divider px-4 py-4">
                  <div className="flex items-center gap-3">
                    <UserAvatar user={user} />
                    <UserInfo user={user} />
                  </div>
                </div>

                <Dropdown.Menu>
                  <Dropdown.Item id="profile">
                    <Link
                      href="/dashboard"
                      className="flex items-center gap-3 text-[#2C2C2C]"
                    >
                      <CgProfile size={18} />
                      <Label>Dashboard</Label>
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item
                    id="logout"
                    variant="danger"
                    onClick={handleLogout}
                  >
                    <div className="flex items-center gap-3 text-red-600">
                      <BiLogOut size={18} />
                      <Label>Logout</Label>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>
          ) : (
            <>
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
            </>
          )}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-[#2C2C2C] md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </section>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? "max-h-[600px] border-t border-gray-200" : "max-h-0"
        }`}
      >
        <section className="bg-white px-5 py-5">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.name}
                active={isActive(link.href)}
                variant="mobile"
                onClick={closeMenu}
              />
            ))}
          </nav>

          <div className="mt-6">
            {user ? (
              <>
                <div className="mb-4 flex items-center gap-3 rounded-xl border border-gray-200 p-3">
                  <UserAvatar user={user} />
                  <UserInfo user={user} />
                </div>

                <div className="flex flex-col gap-3">
                  <Link
                    href="/dashboard"
                    onClick={closeMenu}
                    className="rounded-lg border border-[#FF5A3C] py-3 text-center font-medium text-[#FF5A3C]"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="rounded-lg bg-[#FF5A3C] py-3 font-medium text-white"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <div className="flex flex-col gap-3">
                <Link
                  href="/login"
                  onClick={closeMenu}
                  className="rounded-lg border border-[#FF5A3C] py-3 text-center font-medium text-[#FF5A3C]"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  onClick={closeMenu}
                  className="rounded-lg bg-[#FF5A3C] py-3 text-center font-medium text-white"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </section>
      </div>
    </header>
  );
};

export default Navbar;
