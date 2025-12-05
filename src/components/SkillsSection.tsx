const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "SQL", "Java", "HiveQL"],
    },
    {
      title: "Data Analysis & Visualization",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Tableau"],
    },
    {
      title: "Big Data Technologies",
      skills: ["Hadoop", "HDFS", "Hive", "Kafka", "Pig", "PySpark"],
    },
    {
      title: "Tools & Platforms",
      skills: ["Jupyter Notebook", "VS Code", "Git/GitHub", "MS Office", "IntelliJ"],
    },
    {
      title: "Core Competencies",
      skills: ["Data Cleaning", "EDA", "ETL Pipelines", "Query Optimization", "Data Wrangling"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          A comprehensive toolkit for data analysis, engineering, and visualization
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="section-card transition-all duration-500 hover:border-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
