import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { MissionSection } from "@/components/MissionSection";
import { FeaturedSection } from "@/components/FeaturedSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
	  <div className="flex flex-col min-h-screen">
		  <Header/>
		  <main>
			  <HeroSection/>
			  <AboutSection/>
			  <MissionSection/>
			  <FeaturedSection/>
			  <ProjectsSection/>
		  </main>
		  <Footer/>
	  </div>
  )
}
