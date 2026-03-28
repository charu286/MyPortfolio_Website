function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">

        {/* LEFT SIDE TEXT */}
        <div className="hero-text">

          <h1>
            Hello, I'm <span>Charu Jain</span>
          </h1>

          <p className="hero-tagline">
            Aspiring Software Developer | Web Development Enthusiast | 
            Passionate About Open-Source | Data Enthusiast
          </p>

          <p className="hero-desc">
            I am an aspiring AI Engineer with a strong passion for building intelligent, scalable applications. 
            I enjoy exploring modern technologies like Machine Learning and Web Development. 
            I focus on solving real-world problems and continuously improving my technical skills.
          </p>

          <a href="/resume.pdf" download>
            <button className="hero-button">⬇ Download Resume</button>
          </a>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="hero-image">
          <img src="/charu.jpeg" alt="Charu Jain" />
        </div>

      </div>
    </section>
  );
}

export default Hero;