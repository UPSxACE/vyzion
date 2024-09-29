import Footer from "@/components/ui-layout/footer";
import Header from "@/components/ui-layout/header";
import MobileNavbarContent from "@/components/ui-layout/mobile-navbar/mobile-navbar-content";
import MobileNavbarItem from "@/components/ui-layout/mobile-navbar/mobile-navbar-item";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import ContactForm from "./contact-form";

export default function ContactPage() {
  return (
    <main>
      <section className="min-h-screen flex bg-[#242424] justify-center px-6 relative">
        <MobileNavbarContent className="absolute left-0 top-[86px] w-full">
          <MobileNavbarItem asChild>
            <Link href="/">Home</Link>
          </MobileNavbarItem>
          <MobileNavbarItem asChild>
            <Link href="/contact">Contacte-nos</Link>
          </MobileNavbarItem>
        </MobileNavbarContent>
        <div className="max-w-[1200px] flex-1 w-full flex flex-col text-[#97959a] z-10">
          <Header />
          <div className=" h-full flex justify-center items-center py-10">
            {/* <h1 className="text-white text-2xl">
              Email:{" "}
              <Link className="underline" href="mailto:geral@vyzion.pt">
                geral@vyzion.pt
              </Link>
            </h1> */}
            <div className="w-full max-w-[900px]">
              <div className="flex items-center gap-2 mb-8">
                <div className="flex flex-1 flex-col gap-2">
                  <div className="w-full bg-horizontal-dots bg-[length:5px_1px] bg-bottom bg-repeat-x h-[1px]" />
                  <div className="w-full bg-horizontal-dots bg-[length:5px_1px] bg-bottom bg-repeat-x h-[1px]" />
                </div>

                <h1 className="text-white text-4xl">Contacte-nos</h1>
                <div className="flex flex-1 flex-col gap-2">
                  <div className="w-full bg-horizontal-dots bg-[length:5px_1px] bg-bottom bg-repeat-x h-[1px]" />
                  <div className="w-full bg-horizontal-dots bg-[length:5px_1px] bg-bottom bg-repeat-x h-[1px]" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <ContactForm />
                <article className="text-center items-center order-1 col-span-2 sm:col-span-1 justify-center bg-[#161616] flex-col sm:order-2 flex gap-2 p-6">
                  <div className="aspect-[484/383] w-28 relative ml-auto mr-auto mb-2">
                    <Image
                      fill
                      src="./vyzion-white-gray.svg"
                      alt="vyzion logo"
                    />
                  </div>

                  <div className="flex gap-4 h-[60px]  items-center">
                    <Button
                      asChild
                      variant="outline"
                      className="text-2xl rounded-full p-0 w-[40px] h-[40px] !bg-transparent text-white hover:text-zinc-400 border-2 border-solid border-white hover:border-zinc-400 transition-all duration-200"
                    >
                      <Link
                        href="https://facebook.com/vyzion.pt"
                        target="_blank"
                      >
                        <FaFacebookF />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="text-2xl rounded-full p-0 w-[40px] h-[40px] !bg-transparent text-white hover:text-zinc-400 border-2 border-solid border-white hover:border-zinc-400 transition-all duration-200"
                    >
                      <Link
                        href="https://instagram.com/vyzion.pt"
                        target="_blank"
                      >
                        <FaInstagram />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="text-2xl rounded-full p-0 w-[40px] h-[40px] !bg-transparent text-white hover:text-zinc-400 border-2 border-solid border-white hover:border-zinc-400 transition-all duration-200"
                    >
                      <Link
                        href="https://twitter.com/vyzion_pt"
                        target="_blank"
                      >
                        <FaTwitter />
                      </Link>
                    </Button>
                  </div>
                  <div className="flex gap-2">
                    <Link className="text-white" href="mailto:geral@vyzion.pt">
                      geral@vyzion.pt
                    </Link>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex-1 w-full flex justify-center h-full z-0 overflow-hidden px-6">
          <div className="relative w-full h-full max-w-[1200px]">
            <Image
              alt="background pattern"
              width={450}
              height={161}
              className="absolute top-0 left-[210px] z-0 object-cover"
              src="/home-bg-pattern-top.png"
              sizes="640px"
              priority
            />
            <Image
              alt="background pattern"
              width={350}
              height={260}
              className="absolute bottom-[2px] right-0 z-0 object-cover"
              src="/home-bg-pattern-bottom.png"
              priority
            />
          </div>
        </div>
      </section>

      <section className="flex justify-center bg-[#242424] border-t-[#404040] border-solid border-t border-0 px-6">
        <div className="max-w-[1200px] flex-1">
          <Footer />
        </div>
      </section>
    </main>
  );
}
