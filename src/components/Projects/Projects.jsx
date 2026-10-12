// import React from "react";
// import "./Projects.css";
// import { FaArrowRight } from "react-icons/fa";
// import { Link } from "react-router-dom";

// import project1 from "../../assets/AgriSure.png";

// const projects = [
//   {
//     id: "agrisure",
//     title: "AgriSure - Smart Crop Insurance & Claim Management System",
//     description:
//       "A full-stack web application designed to digitize farmer registration, crop details, insurance applications, document uploads, and claim tracking. Includes JWT-based authentication, role-based access control, and a separate .NET payment microservice integrated with Razorpay in test mode.",
//     tech: [
//       "React.js",
//       "Java",
//       "Spring Boot",
//       "Spring Data JPA",
//       "Hibernate",
//       "MySQL",
//       ".NET Microservice",
//       "Razorpay",
//     ],
//     image: project1,
//     live: "",
//   },
// ];

// function Projects() {
//   return (
//     <section id="projects" className="projects-section">
//       <div className="projects-header">
//         <h2>Featured Projects</h2>
//         <p>
//           These projects reflect my learning, technical skills, and hands-on
//           experience in Java full-stack development and .NET technologies.
//         </p>
//       </div>

//       {projects.map((project, index) => (
//         <div
//           className={`project-container ${index % 2 !== 0 ? "reverse" : ""}`}
//           key={project.id}
//         >
//           <div className="project-image">
//             <img src={project.image} alt={project.title} />
//           </div>

//           <div className="project-content">
//             <h3>{project.title}</h3>

//             <p>{project.description}</p>

//             <div className="tech-stack">
//               {project.tech.map((item, i) => (
//                 <span key={i}>{item}</span>
//               ))}
//             </div>

//             <Link to={`/project/${project.id}`} className="live-link">
//               View Details <FaArrowRight />
//             </Link>
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// }

// export default Projects;




import React from "react";
import "./Projects.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import project1 from "../../assets/Agrisure.png";
import project2 from "../../assets/CampusConnect.png";

const projects = [
  {
    id: "agrisure",
    title: "AgriSure - Smart Crop Insurance & Claim Management System",
    description:
      "A full-stack web application designed to digitize farmer registration, crop details, insurance applications, document uploads, and claim tracking. Includes JWT-based authentication, role-based access control, and a separate .NET payment microservice integrated with Razorpay in test mode.",
    tech: [
      "React.js",
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Hibernate",
      "MySQL",
      ".NET Microservice",
      "Razorpay",
    ],
    image: project1,
  },
  {
    id: "campusconnect",
    title: "CampusConnect - College Management System",
    description:
      "A web application designed to provide a centralized platform for campus-related information and services. Customize this description to reflect the actual features and functionality you implemented.",
    tech: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    image: project2,
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h2>Featured Projects</h2>
        <p>
          These projects reflect my learning, technical skills, and hands-on
          experience in full-stack development.
        </p>
      </div>

      {projects.map((project, index) => (
        <div
          className={`project-container ${
            index % 2 !== 0 ? "reverse" : ""
          }`}
          key={project.id}
        >
          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>

          <div className="project-content">
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <Link
              to={`/project/${project.id}`}
              className="live-link"
            >
              View Details <FaArrowRight />
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
