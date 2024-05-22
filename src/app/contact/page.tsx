import Footer from "@/components/ui-layout/footer";
import Header from "@/components/ui-layout/header";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main>
      <section className="min-h-screen flex bg-[#242424] justify-center">
        <div className="max-w-[1200px] flex-1 w-full flex flex-col text-[#97959a]">
          <Header />
          <div className=" h-full flex justify-center items-center">
            {/* <h1 className="text-white text-2xl">
              Email:{" "}
              <Link className="underline" href="mailto:vyzion.pt@gmail.com">
                vyzion.pt@gmail.com
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
              <div className="grid grid-cols-2">
                <form className="order-2 sm:order-1">a</form>
                <article className="order-1 col-span-2 sm:col-span-1 justify-center min-h-72 bg-[#1a1a1a] flex-col sm:order-2 flex gap-2 p-6">
                  <div className="flex gap-2">
                    <span>Email:</span>
                    <Link
                      className="text-white"
                      href="mailto:vyzion.pt@gmail.com"
                    >
                      vyzion.pt@gmail.com
                    </Link>
                  </div>
                  <div className="flex gap-2">
                    <span>Facebook:</span>
                    <Link
                      className="text-white"
                      href="https://facebook.com/vyzion.pt"
                    >
                      @vyzion.pt
                    </Link>
                  </div>
                  <div className="flex gap-2">
                    <span>Instagram:</span>
                    <Link
                      className="text-white"
                      href="https://instagram.com/vyzion.pt"
                    >
                      @vyzion.pt
                    </Link>
                  </div>
                  <div className="flex gap-2">
                    <span>Twitter:</span>
                    <Link className="text-white" href="https://x.com/vyzion_pt">
                      @vyzion_pt
                    </Link>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center bg-[#242424] border-t-[#404040] border-solid border-t border-0">
        <div className="max-w-[1200px] flex-1">
          <Footer />
        </div>
      </section>
    </main>
  );
}
