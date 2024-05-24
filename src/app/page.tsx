import api from "@/api";
import { IconComponent } from "@/components/ssr-icon/icon-component";
import Footer from "@/components/ui-layout/footer";
import MobileNavbarContent from "@/components/ui-layout/mobile-navbar/mobile-navbar-content";
import MobileNavbarItem from "@/components/ui-layout/mobile-navbar/mobile-navbar-item";
import MotionHeader from "@/components/ui-layout/animated-header";
import useInitialLoadDone from "@/hooks/initial-load/use-initial-load-done";
import Image from "next/image";
import Link from "next/link";
import FeatureCards from "./feature-cards";
import HeroSection from "./hero-section";
import AnimatedHeader from "@/components/ui-layout/animated-header";

export const revalidate = 1 * 60;

export default async function Home() {
  const homepageTexts: Record<string, string> = {};
  const homepageFeatureCards: Record<string, any> = {};

  await api.get("api/homepage-texts").then((res) =>
    res.data.data.forEach(
      ({ attributes }: { attributes: Record<string, string> }) => {
        homepageTexts[attributes.field] = attributes.value;
      }
    )
  );

  await api.get("api/homepage-feature-cards").then((res) => {
    res.data.data.forEach(
      ({ attributes }: { attributes: Record<string, string> }) => {
        const { field, title, paragraph, icon, color } = attributes;
        homepageFeatureCards[field] = {
          title,
          paragraph,
          icon: <IconComponent icon={icon} />,
          color,
        };
      },
      {}
    );
  });

  const { title, paragraph, button, features_title, features_paragraph } =
    homepageTexts;

  return (
    <main>
      <section className="min-h-screen bg-[#242424] flex justify-center px-6 relative overflow-hidden">
        <div className="max-w-[1200px] flex-1 w-full flex flex-col relative">
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
            className="absolute  bottom-[2px] right-0 z-0 object-cover"
            src="/home-bg-pattern-bottom.png"
            priority
          />

           <AnimatedHeader />
          <HeroSection
            title={title}
            paragraph={paragraph}
            buttonText={button}
            className="w-full flex-1"
          />
        </div>
        <MobileNavbarContent className="absolute left-0 top-[86px] w-full">
          <MobileNavbarItem asChild>
            <Link href="/">Home</Link>
          </MobileNavbarItem>
          <MobileNavbarItem asChild>
            <Link href="/contact">Contacte-nos</Link>
          </MobileNavbarItem>
        </MobileNavbarContent>
      </section>
      <section className="bg-[#f6f6f6] min-h-screen flex flex-col justify-center items-center gap-4 py-20 px-6">
        <h1 className="text-4xl font-bold">{features_title}</h1>
        <p className="font-light max-w-[560px] text-center">
          {features_paragraph}
        </p>
        <FeatureCards data={homepageFeatureCards} />
      </section>
      <section className="flex justify-center bg-[#242424] px-6">
        <div className="max-w-[1200px] flex-1">
          <Footer />
        </div>
      </section>
    </main>
  );
}
