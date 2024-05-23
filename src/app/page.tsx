import api from "@/api";
import Card from "@/components/ui-branding/card";
import Footer from "@/components/ui-layout/footer";
import Header from "@/components/ui-layout/header";
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
        homepageFeatureCards[field] = { title, paragraph, icon, color };
      },
      {}
    );
  });

  const { title, paragraph, button, features_title, features_paragraph } =
    homepageTexts;


  return (
    <main>
      <section className="min-h-screen bg-[#242424] flex justify-center px-6">
        <div className="max-w-[1200px] flex-1 w-full flex flex-col">
          <Header />
          <HeroSection
            title={title}
            paragraph={paragraph}
            buttonText={button}
            className="w-full flex-1"
          />
        </div>
      </section>
      <section className="bg-[#f6f6f6] min-h-screen flex flex-col justify-center items-center gap-4 py-20 px-6">
        <h1 className="text-4xl font-bold">{features_title}</h1>
        <p className="font-light max-w-[560px] text-center">
          {features_paragraph}
        </p>
        <div className="grid grid-cols-1 grid-rows-6 xl:grid-cols-3 sm:grid-rows-2 gap-5 py-[2.25rem]">
          <Card data={homepageFeatureCards.card1} />
          <Card data={homepageFeatureCards.card2} />
          <Card data={homepageFeatureCards.card3} />
          <Card data={homepageFeatureCards.card4} />
          <Card data={homepageFeatureCards.card5} />
          <Card data={homepageFeatureCards.card6} />
        </div>
      </section>
      <section className="flex justify-center bg-[#242424] px-6">
        <div className="max-w-[1200px] flex-1">
          <Footer />
        </div>
      </section>
    </main>
  );
}
