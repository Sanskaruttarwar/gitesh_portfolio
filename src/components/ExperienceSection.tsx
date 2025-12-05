import { Briefcase, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Insteasy",
      role: "Data & Application Developer",
      duration: "August 2024 - October 2025",
      location: "Remote",
      points: [
        "Developed full-stack applications with data integration, implementing API communication to fetch and process datasets from backend servers",
        "Designed and optimized data-driven UI components to visualize analytical results across multiple devices",
        "Utilized Git for version control, ensuring efficient collaboration and tracking of data pipeline modifications",
        "Applied structured data workflows for managing application state and ensuring data integrity throughout development cycles",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Work <span className="text-gradient">Experience</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Professional journey in data-driven development and analytics
        </p>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="section-card transition-all duration-500 hover:border-primary/30"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    {exp.role}
                  </h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <span className="text-primary mt-1.5">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
