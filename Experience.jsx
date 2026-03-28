function Experience() {
  const experiences = [
    {
      role: "React Intern",
      company: "Celebal Technologies",
      location: "Jaipur, India",
      duration: "May 2025 -July 2025",
      points: [
        "Developed responsive UI using React.js and CSS",
        "Improved website performance and user experience",
        "Worked with reusable components and API integration"
      ],
      tech: "React.js, JavaScript, HTML, CSS"
    },
    {
      role: "Python Developer Intern",
      company: "Southfuego Technologies",
      location: "Jaipur, India",
      duration: "June 2025 - Aug 2025",
      points: [
        "Built automation scripts using Python",
        "Worked on data handling and API requests",
        "Improved code efficiency and debugging skills"
      ],
      tech: "Python, Requests, JSON, BeautifulSoup, Pandas, NumPy"
    },
    {
      role: "Web Development Intern",
      company: "Cynbit Technologies",
      location: "Jaipur, India",
      duration: "Jun 2024 - Aug 2024",
      points: [
        "Designed responsive web pages using HTML, CSS, JS",
        "Collaborated with team on UI improvements",
        "Optimized website layout for better performance"
      ],
      tech: "HTML, CSS, JavaScript"
    },
    {
      role: "Frontend Developer Intern",
      company: "Devyut Pvt Ltd",
      location: "Jaipur, India",
      duration: "June 2023 - July 2023",
      points: [
        "Designed responsive web pages using HTML, CSS, JS",
        "Collaborated with team on UI improvements",
        "Optimized website layout for better performance"
      ],
      tech: "HTML, CSS, JavaScript"
    }
  ];

  return (
    <section className="experience-section" id="experience">
      <h2>Experience</h2>

      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <h3>{exp.role}</h3>

            <p className="company">
              {exp.company} | {exp.location}
            </p>

            <p className="duration">{exp.duration}</p>

            <ul>
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <p className="tech">
              <strong>Tech:</strong> {exp.tech}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;