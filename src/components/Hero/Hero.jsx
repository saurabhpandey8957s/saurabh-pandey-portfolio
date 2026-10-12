import "./Hero.css";
import profile from "../../assets/images/Saurabh.png";

import { FiDownload, FiFileText, FiMail } from "react-icons/fi";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Hero() {
  const resumeUrl = `${import.meta.env.BASE_URL}Saurabh_Pandey.pdf`;

  return (
    <section className="hero" id="home">
      {/* LEFT SIDE */}
      <div className="hero-left">
        <h1>
          <span>Saurabh Pandey</span>
        </h1>

        <h2>Java Full Stack & .NET Developer</h2>

        <p className="intro">
          Full Stack Developer specializing in Java, Spring Boot, React.js,
          MySQL, and .NET, building scalable, secure, and user-friendly
          web applications with modern technologies.
        </p>

        <p className="desc">
          Dedicated to writing clean, efficient code, solving real-world
          problems, and continuously improving my skills to build
          high-quality software solutions.
        </p>

        {/* RESUME BUTTONS */}
        <div className="hero-buttons">
          <a
            href={resumeUrl}
            download="Saurabh_Pandey.pdf"
            className="btn resume-btn"
          >
            <FiDownload className="btn-icon" aria-hidden="true" />
            <span>Download Resume</span>
          </a>

          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn contact-btn"
          >
            <FiFileText className="btn-icon" aria-hidden="true" />
            <span>View Resume</span>
          </a>
        </div>

        {/* SOCIAL LINKS */}
        <div className="social-links">
          <a
            href="https://github.com/saurabhpandey8957s"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Saurabh's GitHub profile"
          >
            <FaGithub className="social-icon" aria-hidden="true" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Saurabh's LinkedIn profile"
          >
            <FaLinkedinIn className="social-icon" aria-hidden="true" />
            <span>LinkedIn</span>
          </a>

          <a
            href="mailto:YOUR_EMAIL@gmail.com"
            aria-label="Send Saurabh an email"
          >
            <FiMail className="social-icon" aria-hidden="true" />
            <span>Email</span>
          </a>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hero-right">
        <img src={profile} alt="Saurabh Pandey - Software Developer" />

        <div className="code-card">public class Developer {"{ ... }"}</div>
      </div>
    </section>
  );
}

export default Hero;




