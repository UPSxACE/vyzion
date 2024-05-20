import Footer from "@/components/ui-layout/footer";
import Header from "@/components/ui-layout/header";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main>
      <section className="min-h-screen flex bg-[#32323a] justify-center">
        <div className="max-w-[1200px] flex-1 w-full flex flex-col">
          <Header />
          <div className=" h-full flex justify-center items-center">
            <h1 className="text-white text-2xl">
              Email:{" "}
              <Link className="underline" href="mailto:vyzion.pt@gmail.com">
                vyzion.pt@gmail.com
              </Link>
            </h1>
          </div>
        </div>
      </section>

      <section className="flex justify-center bg-[#32323a] border-t-[#404040] border-solid border-t border-0">
        <div className="max-w-[1200px] flex-1">
          <Footer />
        </div>
      </section>
    </main>
  );
}
