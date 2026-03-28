function Education() {
  return (
    <section id="education" className="education-section">
      <h2>Education</h2>

      <div className="education-container">

        {/* B.Tech */}
        <div className="edu-card">
          <h3>B.Tech Computer Science (AI)</h3>
          <p className="edu-college">
            Poornima College of Engineering, Jaipur
          </p>
          <p className="edu-year">2022 - 2026</p>
          <p>SGPA (7th Sem): 9.28 / 10</p>
        </div>

        {/* 12th */}
        <div className="edu-card">
          <h3>12th Grade</h3>
          <p className="edu-college">
            Navdeep Public Senior Secondary School, Rajasthan
          </p>
          <p className="edu-year">2021 – 2022</p>
          <p>Board: RBSE</p>
          <p>Percentage: 84%</p>
        </div>

        {/* 10th */}
        <div className="edu-card">
          <h3>10th Grade</h3>
          <p className="edu-college">
            Navdeep Public Senior Secondary School, Rajasthan
          </p>
          <p className="edu-year">2019 - 2020</p>
          <p>Board: RBSE</p>
          <p>Percentage: 89.83%</p>
        </div>

      </div>
    </section>
  );
}

export default Education;