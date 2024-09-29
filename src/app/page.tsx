import api from "@/api";
// import { Marquee } from "@/components/marquee";
import { IconComponent } from "@/components/ssr-icon/icon-component";
import AnimatedHeader from "@/components/ui-layout/animated-header";
import Footer from "@/components/ui-layout/footer";
import MobileNavbarContent from "@/components/ui-layout/mobile-navbar/mobile-navbar-content";
import MobileNavbarItem from "@/components/ui-layout/mobile-navbar/mobile-navbar-item";
// import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
// import { FaExternalLinkAlt } from "react-icons/fa";
import FeatureCards from "./feature-cards";
import HeroSection from "./hero-section";

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
      {/* <section className="bg-[#242424] py-16 flex flex-col items-center">
        <h1 className="text-center text-4xl font-bold text-white mb-16">
          Portfólio
        </h1>
        <Marquee
          // fade
          pauseOnHover
          className="w-full max-w-[1200px]"
          numberOfCopies={5}
        >
          <div className="bg-[#363739] w-[20rem] flex flex-col gap-1">
            <div className="w-full">
              <Image
                width={320}
                height={466}
                className="w-full h-[26rem] object-cover object-top animate-scroll"
                src={"/sc/mynotes.png"}
                alt="screenshot"
                sizes="50vw"
              />
            </div>
            <div className="flex flex-col gap-1 bg-[#363739] p-3 pt-0 text-white">
              <div className="flex gap-2 items-center">
                <h1 className="text-xl font-bold mt-1">MyNotes</h1>
                <Button
                  variant="ghost"
                  className="ml-auto bg-transparent text-white text-base h-auto px-3"
                >
                  <FaExternalLinkAlt />
                </Button>
              </div>

              <p className="text-[0.8rem] leading-[1.25rem] font-light line-clamp-2 h-[2.5rem]">
                Web aplicação de tomar notas. Desenvolvido em NextJS, .NET,
                Postgres, e Docker.
              </p>
              <Button className="ml-auto bg-transparent text-white border border-solid border-white h-8 w-full mt-1">
                Visitar
              </Button>
            </div>
          </div>
          <div className="bg-[#363739] w-[20rem] flex flex-col gap-1">
            <div className="w-full">
              <Image
                width={320}
                height={466}
                className="w-full h-[26rem] object-cover object-top animate-scroll"
                src={"/sc/fca.png"}
                alt="screenshot"
                sizes="50vw"
              />
            </div>
            <div className="flex flex-col gap-1 bg-[#363739] p-3 pt-0 text-white">
              <div className="flex gap-2 items-center">
                <h1 className="text-xl font-bold mt-1">Feito com Amor</h1>
                <Button
                  variant="ghost"
                  className="ml-auto bg-transparent text-white text-base h-auto px-3"
                >
                  <FaExternalLinkAlt />
                </Button>
              </div>

              <p className="text-[0.8rem] leading-[1.25rem] font-light line-clamp-2 h-[2.5rem]">
                Landing page personalizada para confeitaria. Desenvolvido em
                NextJS, Docker e Strapi CMS.
              </p>
              <Button className="ml-auto bg-transparent text-white border border-solid border-white h-8 w-full mt-1">
                Visitar
              </Button>
            </div>
          </div>

          {/* <div className="bg-white w-[20rem] flex flex-col gap-1 h-min">
            <Image
              width={320}
              height={466}
              className="w-full h-[26rem] object-cover object-top animate-scroll"
              src={"/sc/mynotes.png"}
            />
            <div className="p-3">
              <div className="flex gap-2 items-center">
                <h1 className="text-xl font-bold mt-1">MyNotes 4</h1>
                <Button
                  variant="ghost"
                  className="ml-auto bg-transparent text-black text-base h-auto px-3"
                >
                  <FaExternalLinkAlt />
                </Button>
              </div>
              <p className="text-[0.8rem] leading-[1.25rem] font-light line-clamp-2 h-[2.5rem]">
                Web aplicação de tomar notas. Desenvolvido em NextJS, .NET,
                Postgres, e Docker.
              </p>
              <Button className="w-full bg-transparent text-black border border-solid border-black h-8 mt-1 px-3">
                Visitar
              </Button>
            </div>
          </div> */}
      {/*
        </Marquee>
      </section>
      <section className="bg-white h-96 flex justify-center items-center">
        PEDIR ORÇAMENTO
      </section> */}
      <section className="flex justify-center bg-[#242424] px-6">
        <div className="max-w-[1200px] flex-1">
          <Footer />
        </div>
      </section>
    </main>
  );
}
