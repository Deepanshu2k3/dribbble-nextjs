import Footer from "@components/Footer";
import {
  Hero,
  Carousel,
  Partners,
  Motto,
  Match,
  Tiles,
  
  Review,
  Why,
  Work,
  CTA,
  Start,
  Connecting,
  WorkCarousel
} from "@sections";

export default function Home() {
  return (
    <div className="relative overflow-hidden max-w-8xl mx-auto">
      <section className="sm:px-16 px-8 sm:py-24 py-8">
        <Hero />
      </section>
      <Carousel />
     
     
    
    
      <section className="sm:px-16 px-8 sm:py-24 py-12">
        <Tiles />
      </section>
     
      <CTA />
      <WorkCarousel />
       
      
    </div>
  );
}
