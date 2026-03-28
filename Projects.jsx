function Projects() {
  const projectList = [
    {
      title: "Movie Recommendation System",
      description: [
        "Built a recommendation engine using React and Python backend.",
        "Database-driven solution for personalized movie suggestions.",
        "Implemented collaborative filtering algorithms for accurate predictions.",
      ],
      image: "/Project2.jpeg",
    },
    {
      title: "MindCare AI",
      description: [
        "Developed an AI-powered mental health chatbot.",
        "Used NLP and sentiment analysis to provide personalized advice.",
        "React front-end integrated with Python Flask backend.",
      ],
      image: "/Project3.webp",
    },
    {
      title: "Python Web Scraping",
      description: [
        "Automated data collection from multiple websites using Python and BeautifulSoup.",
        "Stored extracted data in CSV and database for analysis.",
        "Reduced manual work by 3x through automation scripts.",
      ],
      image: "/Project1.jpeg",
    },
    {
      title: "Personal Portfolio Website",
      description: [
        "Built a responsive portfolio using React, HTML, CSS, and JavaScript.",
        "Showcased projects, skills, and contact form with interactive UI.",
        "Implemented smooth animations and dark/light theme toggling.",
      ],
      image: "/Project4.webp",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>

      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <ul>
              {project.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;