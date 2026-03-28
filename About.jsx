import { useEffect } from "react";

function About() {

  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 60 },
          size: { value: 3 },
          color: { value: "#00ffff" },
          line_linked: {
            enable: true,
            color: "#00ffff"
          },
          move: { speed: 2 }
        }
      });
    }
  }, []);

  return (
    <section id="about" className="about-section">

      {/* 🌌 Particles Background */}
      <div id="particles-js"></div>

      <div className="about-container">
        <div className="about-text">

          <h2>About Me</h2>

          {/* Paragraph 1 */}
          <p>
            I am a passionate B.Tech Computer Science (AI) student with a strong 
            interest in building intelligent and user-friendly applications. I enjoy 
            solving real-world problems and creating scalable solutions using modern 
            technologies and innovative approaches.
          </p>

          {/* Paragraph 2 */}
          <p>
            I have experience in Python, Machine Learning, and React through projects 
            and internships. I continuously improve my technical and problem-solving 
            skills while focusing on clean and efficient code. My goal is to grow as a 
            developer and contribute to impactful and innovative tech solutions.
          </p>

          {/* Tags */}
          <div className="about-tags">
            <span>🤖 AI Enthusiast</span>
            <span>🚀 Quick Learner</span>
            <span>💡 Tech Explorer</span>
          </div>

        </div>
      </div>

    </section>
  );
}

export default About;