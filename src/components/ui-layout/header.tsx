import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="h-[86px] flex py-6">
      <div className="flex items-start  relative h-[40px] w-[149.25px]">
        <Image alt="logo" src="/logo-dark.svg" fill objectFit="contain" />
      </div>
      <nav className="ml-auto flex items-center gap-4 text-white">
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
    </header>
  );
}
