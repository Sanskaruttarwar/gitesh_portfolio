import { ArrowDown, Database, BarChart3, Code2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(24 95% 53% / 0.3), transparent)",
        }}
      />

      {/* Floating icons */}
      <div className="absolute top-1/4 left-10 md:left-20 animate-float opacity-20">
        <Database className="w-12 h-12 md:w-16 md:h-16 text-primary" />
      </div>
      <div className="absolute bottom-1/4 right-10 md:right-20 animate-float opacity-20" style={{ animationDelay: "2s" }}>
        <BarChart3 className="w-12 h-12 md:w-16 md:h-16 text-primary" />
      </div>
      <div className="absolute top-1/3 right-1/4 animate-float opacity-10" style={{ animationDelay: "4s" }}>
        <Code2 className="w-10 h-10 md:w-14 md:h-14 text-primary" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-up">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            Open to Opportunities
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up-delay-1">
          Hi, I'm{" "}
          <span className="text-gradient glow-text">Gitesh</span>
        </h1>

        <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground mb-8 animate-fade-up-delay-2">
          Data Analyst
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up-delay-3">
          Transforming raw data into actionable insights. Specialized in Python, SQL, 
          Big Data technologies, and visualization tools to solve complex analytical problems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-3">
          <a
            href="#projects"
            className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-1"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 bg-secondary border border-border hover:border-primary/50 hover:-translate-y-1"
          >
            Get In Touch
          </a>
        </div>

        <a
          href="#about"
          className="inline-block mt-16 animate-bounce text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
