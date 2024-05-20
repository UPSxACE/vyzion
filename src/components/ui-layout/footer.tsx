import Link from "next/link";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { Button } from "../ui/button";

export default function Footer() {
  // border-zinc-400
  return (
    <footer className="flex flex-col items-center p-8 gap-4">
      <div className="flex gap-4 h-[60px]  items-center">
        <Button
          asChild
          variant="outline"
          className="rounded-full p-0 w-[40px] h-[40px] !bg-blue-500 !text-white border-none hover:text-2xl hover:w-[60px] hover:h-[60px] transition-all duration-200"
        >
          <Link href="https://facebook.com/vyzion.pt" target="_blank">
            <FaFacebookF />
          </Link>
        </Button>

        {/* <Button
          asChild
          variant="outline"
          className="rounded-full p-0 w-[40px] h-[40px] border-none bg-[#ca04d5] text-white "
        > */}

        <Link
          href="https://instagram.com/vyzion.pt"
          target="_blank"
          className="text-lg rounded-full"
        >
          <img
            src="/insta-logo.v3.svg"
            alt="logo instagram"
            className="h-[40px] hover:h-[60px] transition-all duration-200"
          />
        </Link>
        {/* </Button> */}
        <Button
          asChild
          variant="outline"
          className="rounded-full p-0 w-[40px] h-[40px] !bg-blue-400 !text-white border-none hover:text-2xl hover:w-[60px] hover:h-[60px] transition-all duration-200"
        >
          <Link href="https://twitter.com/vyzion_pt" target="_blank">
            <FaTwitter />
          </Link>
        </Button>
      </div>
      <div className="flex gap-4 text-xl text-white">
        <Link href="/">Home</Link>
        <Link href="/contact">Contacte-nos</Link>
      </div>
      <span className="text-zinc-400 text-sm">Copyright © 2024 Vyzion</span>
    </footer>
  );
}
