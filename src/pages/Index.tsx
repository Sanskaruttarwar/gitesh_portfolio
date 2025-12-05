import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Gitesh Uttarwar | Data Analyst Portfolio</title>
        <meta
          name="description"
          content="Gitesh Uttarwar - Data Analyst specializing in Python, SQL, Big Data technologies (Hadoop, Hive), and data visualization. Transforming raw data into actionable insights."
        />
        <meta
          name="keywords"
          content="Data Analyst, Python, SQL, Hadoop, Hive, Big Data, Data Engineering, Pandas, NumPy, Tableau"
        />
        <meta property="og:title" content="Gitesh Uttarwar | Data Analyst Portfolio" />
        <meta
          property="og:description"
          content="Data Analyst specializing in Python, SQL, Big Data technologies, and data visualization."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          {/* <ExperienceSection /> */}
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
