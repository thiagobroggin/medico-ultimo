import React from 'react';
    import { Toaster } from '@/components/ui/toaster';
    import Header from '@/components/Header';
    import HeroSection from '@/components/HeroSection';
    import WelcomeSection from '@/components/WelcomeSection';
    import ServicesHighlight from '@/components/ServicesHighlight';
    import ExclusiveProtocolSection from '@/components/ExclusiveProtocolSection';
    import Timeline from '@/components/Timeline';
    import Testimonial from '@/components/Testimonial';
    import BlogSection from '@/components/BlogSection';
    import ClinicLocation from '@/components/ClinicLocation';
    import Footer from '@/components/Footer';
    import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';

    function App() {
      return (
        <div className="bg-base min-h-screen flex flex-col font-sans"> {/* Alterado para bg-base */}
          <Header />
          <main className="flex-grow pt-16 md:pt-20"> 
            <HeroSection />
            <WelcomeSection />
            <ServicesHighlight />
            <ExclusiveProtocolSection /> 
            <Timeline />
            <Testimonial />
            <BlogSection />
            <ClinicLocation />
          </main>
          <Footer />
          <FloatingWhatsAppButton phoneNumber="5511968942030" />
          <Toaster />
        </div>
      );
    }

    export default App;