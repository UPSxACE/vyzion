import Card from "@/components/ui-branding/card";
import Footer from "@/components/ui-layout/footer";
import Header from "@/components/ui-layout/header";
import HeroSection from "./hero-section";

export default function Home() {
  return (
    <main>
      <section className="min-h-screen bg-[#32323a] flex justify-center">
        <div className="max-w-[1200px] flex-1 w-full flex flex-col">
          <Header />
          <HeroSection className="w-full flex-1" />
        </div>
      </section>
      <section className="bg-[#f2f2f2] min-h-screen flex flex-col justify-center items-center gap-4 py-20">
        <h1 className="text-4xl font-bold">How can we help you?</h1>
        <p className="font-light max-w-[560px] text-center">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse
          et justo. Praesent mattis commodo augue.​
        </p>
        <div className="grid grid-cols-3 grid-rows-2 gap-5 py-[2.25rem]">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <section className="flex justify-center bg-[#32323a]">
        <div className="max-w-[1200px] flex-1">
          <Footer />
        </div>
      </section>
    </main>
  );
}
