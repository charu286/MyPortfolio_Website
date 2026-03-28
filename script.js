// Typing Animation
new Typed("#typing", {
    strings: ["AI Developer", "Full Stack Developer", "ML Enthusiast"],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true
});

// Particles Background
particlesJS.load('particles-js', 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.json');

// Counter Animation
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    const update = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / 100;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(update, 30);
        } else {
            counter.innerText = target;
        }
    }
    update();
});

// Modal
function openModal() {
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("change", () => {
    document.body.classList.toggle("light-mode");
});

function openCertificate(imageSrc) {
    document.getElementById("certificateModal").style.display = "block";
    document.getElementById("certImage").src = imageSrc;
}

function closeCertificate() {
    document.getElementById("certificateModal").style.display = "none";
}
const certificates = [
    "cert1.jpg",
    "cert2.jpg",
    "cert3.jpg",
    "cert4.jpg"
];

let currentIndex = 0;

function openCertificate(index) {
    currentIndex = index;
    document.getElementById("certificateModal").style.display = "block";
    document.getElementById("certImage").src = certificates[currentIndex];
    document.getElementById("downloadBtn").href = certificates[currentIndex];
}

function closeCertificate() {
    document.getElementById("certificateModal").style.display = "none";
}

function changeCertificate(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = certificates.length - 1;
    } else if (currentIndex >= certificates.length) {
        currentIndex = 0;
    }

    document.getElementById("certImage").src = certificates[currentIndex];
    document.getElementById("downloadBtn").href = certificates[currentIndex];
}