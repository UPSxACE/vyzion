import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";
import { Button } from "../ui/button";
import MobileNavbarHamburger from "./mobile-navbar/mobile-navbar-hamburger";

const Header = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => (
    <header {...props} ref={ref} className="h-[86px] flex py-6 z-10">
      <Link
        href="/"
        className="flex items-start  relative h-[40px] w-[149.25px]"
      >
        <Image
          alt="logo"
          src="/logo-dark.svg"
          fill
          className="object-contain"
        />
      </Link>
      <nav className="ml-auto hidden lg:flex items-center gap-4 text-white">
        <Link href="/" className="px-2">
          Home
        </Link>
        {/* <li className="px-2">Contact</li> */}

        <Button
          className="rounded-3xl px-7 bg-[#141414] hover:bg-[#606060]"
          asChild
        >
          <Link href="/contact" className="px-2">
            CONTACTE-NOS
          </Link>
        </Button>
      </nav>
      <MobileNavbarHamburger className="ml-auto" />
    </header>
  )
);

Header.displayName = "Header";

export default Header;