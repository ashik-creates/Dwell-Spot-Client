import Banner from "@/components/homepage/Banner";
import FAQ from "@/components/homepage/FAQ";
import FeaturedApartments from "@/components/homepage/FeaturedApartments";
import FeaturedCities from "@/components/homepage/FeaturedCities";
import Highlights from "@/components/homepage/Highlights";
import HowItWorks from "@/components/homepage/HowItWorks";
import Statistics from "@/components/homepage/Statistics";
import Testimonials from "@/components/homepage/Testimonials";
import WhyChoose from "@/components/homepage/WhyChoose";

export default function Home() {
  return (
    <div>
      <Banner />
      <FeaturedApartments />
      <WhyChoose />
      <FeaturedCities />
      <HowItWorks />
      <Testimonials />
      <Statistics />
      <Highlights />
      <FAQ />
    </div>
  );
}
