import { ExternalLink, Github, Database, BarChart3, TrendingUp } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Hadoop & Hive Data Engineering Pipeline",
      description: "End-to-end big data pipeline processing 100,000+ records with HDFS and Hive. Includes table design, data cleaning, and query optimization achieving 30% accuracy improvement.",
      tech: ["Hadoop", "HDFS", "Hive", "HiveQL", "Linux"],
      icon: Database,
      highlights: [
        "Processed 100,000+ raw records",
        "Created 5+ external/managed Hive tables",
        "Wrote 20+ optimized HiveQL queries",
      ],
    },
    {
      title: "EV Resale Price Analysis",
      description: "Comprehensive data analysis of 60,000+ car resale records using Python. Implemented regex-based data extraction, outlier detection, and 15+ visual analyses.",
      tech: ["Python", "Pandas", "NumPy", "Regex", "Matplotlib", "Seaborn"],
      icon: BarChart3,
      highlights: [
        "Cleaned 60,000+ records with regex",
        "Removed 1,000+ outliers using IQR",
        "Created modular production-style code",
      ],
    },
    {
      title: "EV Data Analysis - Washington State",
      description: "Large-scale analysis of 120,000+ EV registrations. Performed trend analysis across 10+ years identifying city-wise growth patterns and model distributions.",
      tech: ["Python", "Pandas", "Data Wrangling", "Visualization"],
      icon: TrendingUp,
      highlights: [
        "Analyzed 120,000+ EV entries",
        "Normalized 200+ categories",
        "Created 10+ visual insights",
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Real-world data engineering and analysis projects showcasing end-to-end pipelines
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card flex flex-col"
            >
              {/* Thumbnail placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <project.icon className="w-16 h-16 text-primary/50" />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="mb-4 space-y-1">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded bg-secondary text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  <a
                    href="https://github.com/Sanskaruttarwar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
