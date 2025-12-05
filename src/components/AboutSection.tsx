import { GraduationCap, MapPin, Calendar } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          About <span className="text-gradient">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* About Card */}
          <div className="section-card transition-all duration-500 hover:border-primary/30">
            <h3 className="text-xl font-semibold mb-4 text-primary">Who I Am</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Big Data and Python-focused data professional with hands-on experience in Hadoop, HDFS, Hive, 
              and HiveQL. I specialize in building end-to-end data pipelines involving file ingestion, 
              table design, data cleaning, and query optimization.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Strong in Python-based preprocessing using Pandas, NumPy, and regex to clean messy, 
              inconsistent datasets. Skilled in EDA, outlier handling, and visualization with Matplotlib 
              and Seaborn. Known for structured problem-solving, fast debugging, and turning raw data 
              into clear, usable insights.
            </p>
          </div>

          {/* Education Card */}
          <div className="section-card transition-all duration-500 hover:border-primary/30">
            <h3 className="text-xl font-semibold mb-6 text-primary flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              Education
            </h3>

            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-primary/30">
                <div className="timeline-dot" />
                <h4 className="font-semibold">CDAC-ACTS, Pune</h4>
                <p className="text-sm text-muted-foreground mb-1">Post Graduate Diploma</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    Aug 2025 - Feb 2026
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    Pune
                  </span>
                </div>
              </div>

              <div className="relative pl-6 border-l-2 border-border">
                <div className="timeline-dot" />
                <h4 className="font-semibold">Shri Sant Gajanan Maharaj College of Engineering</h4>
                <p className="text-sm text-muted-foreground mb-1">B.E. Computer Science and Engineering</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    2021 - 2025
                  </span>
                  <span className="px-2 py-0.5 rounded bg-primary/10 text-primary font-medium">
                    7.4 CGPA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
