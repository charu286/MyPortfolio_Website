import { FaPython, FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaBootstrap } from "react-icons/fa";
 
import { VscVscode } from "react-icons/vsc";

function Skills() {
  const skillCategories = [
    {
      title: "Programming Skills",
      skills: [
        { name: "C", level: "85%"    },
        { name: "C++", level: "80%"  },
        { name: "Python", level: "90%"  },
      ],
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML", level: "95%", icon: <FaHtml5 /> },
        { name: "CSS", level: "90%", icon: <FaCss3Alt /> },
        { name: "Bootstrap", level: "85%", icon: <FaBootstrap /> },
        { name: "JavaScript", level: "85%", icon: <FaJs /> },
        { name: "React", level: "85%", icon: <FaReact /> },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", level: "80%" },
      ],
    },
    {
      title: "Version Control",
      skills: [
        { name: "Git", level: "85%", icon: <FaGitAlt /> },
        { name: "GitHub", level: "85%", icon: <FaGithub /> },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "VS Code", level: "90%", icon: <VscVscode /> },
        { name: "PyCharm", level: "85%"  },
        { name: "Jupyter Notebook", level: "80%"  },
      ],
    },
    {
      title: "Data Analysis",
      skills: [
        { name: "SQL", level: "80%"  },
        { name: "Pandas", level: "85%"  },
        { name: "Numpy", level: "85%"  },
        { name: "MS Excel", level: "90%"  },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>

      <div className="skills-wrapper">
        {skillCategories.map((category, i) => (
          <div className="skill-category" key={i}>
            <h3>{category.title}</h3>

            {category.skills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-header">
                  <span className="icon">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>

                <div className="bar">
                  <div style={{ width: skill.level }}></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;