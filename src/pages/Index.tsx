import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import StatsSection from "@/components/home/StatsSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import CommunitiesPreview from "@/components/home/CommunitiesPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTABanner from "@/components/home/CTABanner";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      <ServicesPreview />
      <CommunitiesPreview />
      <TestimonialsSection />
      <CTABanner />
    </Layout>
  );
};

export default Index;
