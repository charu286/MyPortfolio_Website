import { useState } from "react";
 

function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      name: "C Programming",
      image: "/cert1.png",
      file: "/cert1.pdf",
      issuer: "Poornima College of Engineering"
    },
    {
      name: "Python",
      image: "/cert2.jpg",
      file: "/cert2.pdf",
      issuer: "Southfuego Technologies"
    },
    {
      name: "Frontend Web Developer",
      image: "/cert3.png",
      file: "/cert3.pdf",
      issuer: "Cynbit Technologies"
    },
    {
      name: "React Development",
      image: "/cert4.jpeg",
      file: "/cert4.pdf",
      issuer: "Celebal Technologies"
    }
  ];

  return (
    <section className="certifications-section" id="certifications">
      <h2>Certifications</h2>

      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div className="cert-card" key={index}>
            <img
              src={cert.image}
              alt={cert.name}
              onClick={() => setSelectedCert(cert)}
            />

            <h3>{cert.name}</h3>

            <p>Certified by {cert.issuer}</p>

            <a
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-btn"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>

      {/* 🔍 Modal Preview */}
      {selectedCert && (
        <div
          onClick={() => setSelectedCert(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <img
            src={selectedCert.image}
            alt="preview"
            style={{
              width: "400px",
              borderRadius: "10px",
              boxShadow: "0 0 25px cyan"
            }}
          />
        </div>
      )}
    </section>
  );
}

export default Certifications;