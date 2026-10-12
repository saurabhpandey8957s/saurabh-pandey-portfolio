// import "./About.css";
// import { GraduationCap, Code2, Terminal, Target } from "lucide-react";

// function About() {
//   return (
//     <section className="about" id="about">
//       <div className="about-header">
//         <h2>Beyond the Code</h2>
//         <p>
//           Passionate about developing modern web applications using Java Full
//           Stack and MERN Stack technologies. I focus on writing clean,
//           maintainable code while creating efficient, user-friendly, and
//           scalable software solutions.
//         </p>
//       </div>

//       <div className="about-cards">
//         <div className="card">
//           <GraduationCap size={40} />
//           <h3>Education</h3>
//           <p>
//             Graduated with an M.Sc. in Computer Science (2023–2025), building a
//             strong foundation in programming, problem-solving, and software
//             development.
//           </p>
//         </div>

//         <div className="card">
//           <Code2 size={40} />
//           <h3>Experience</h3>
//           <p>
//             Practical experience in developing full-stack web applications
//             through academic projects, a 6-month Full Stack Development
//             internship, and professional training programs.
//           </p>
//         </div>

//         <div className="card">
//           <Terminal size={40} />
//           <h3>Interests</h3>
//           <p>
//             Passionate about Java Full Stack Development, MERN Stack, and Modern
//             Web Technologies. Always eager to learn new technologies and develop
//             innovative software solutions.
//           </p>
//         </div>

//         <div className="card">
//           <Target size={40} />
//           <h3>Goal</h3>
//           <p>
//             Seeking an opportunity as a Full Stack Java and MERN Stack Developer
//             to build innovative web applications, solve real-world challenges,
//             and grow as a software engineer.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;

import "./About.css";
import { GraduationCap, Code2, Terminal, Target } from "lucide-react";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-header">
        <h2>Beyond the Code</h2>
        <p>
          Passionate about developing modern web applications using Java Full
          Stack and .NET technologies. I focus on writing clean, maintainable
          code while creating efficient, secure, user-friendly, and scalable
          software solutions.
        </p>
      </div>

      <div className="about-cards">
        <div className="card">
          <GraduationCap size={40} />
          <h3>Education</h3>
          <p>
            Completed B.Tech in Computer Science and Engineering from Dr. A. P.
            J. Abdul Kalam Technical University, Lucknow, with an aggregate of
            78.9%. Also completed the CDAC Post Graduate Certificate Programme
            in Advanced Computing (PGCP-AC) in August 2026.
          </p>
        </div>

        <div className="card">
          <Code2 size={40} />
          <h3>Experience</h3>
          <p>
            Hands-on project experience in developing full-stack web
            applications using Java, Spring Boot, React.js, and MySQL, along
            with a .NET payment microservice integrated with Razorpay in test
            mode as part of the AgriSure project.
          </p>
        </div>

        <div className="card">
          <Terminal size={40} />
          <h3>Interests</h3>
          <p>
            Interested in Java Full Stack Development, C#, .NET, REST APIs,
            database management, and microservices architecture. Always eager
            to strengthen technical skills and build practical software
            solutions.
          </p>
        </div>

        <div className="card">
          <Target size={40} />
          <h3>Goal</h3>
          <p>
            Seeking an entry-level opportunity as a Java Full Stack Developer
            or .NET Developer to contribute to real-world projects, solve
            technical challenges, and grow as a software engineer.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
