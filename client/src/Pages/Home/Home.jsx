import React, { useEffect, useRef } from "react";
import "./Home.css";
import Earth from "../../Asets/Svgs/Mars-3D-Globe.svg";
import SpecsContainer from "../../Components/SpecsContainer/SpecsContainer";
import TraceLine from "../../Components/TraceLine/TraceLine";

function Home() {
  const skills = [
    "C++",
    "Data Structue and Algorithms",
    "Database Management System (SQL)",
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MongoDB",
    "React.js",
    "Figma",
  ];

  const fadeAnimRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const { top, bottom } = fadeAnimRef.current.getBoundingClientRect();
      const windowCenter = windowHeight / 2;

      if (top < windowCenter && bottom > windowCenter) {
        fadeAnimRef.current.classList.add("fade-in");
        fadeAnimRef.current.classList.remove("fade-out");
      } else {
        fadeAnimRef.current.classList.remove("fade-in");
        fadeAnimRef.current.classList.add("fade-out");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home">
      <div className="planet_svg">
        <img src={Earth} alt="error" />
      </div>
      <div>
        <SpecsContainer
          ref={fadeAnimRef}
          head={"About Me"}
          exp={
            <ul>
              <li>
                My name is Anand Kumar Singh. I'm pursuing Btech at Indian
                Institute of Information Technology Dharwad (IIIT Dwd) in CSE
                branch. I was born and raised in Varanasi. I like photography.
              </li>
            </ul>
          }
          bgcolor="linear-gradient(180deg, rgba(2, 0, 36, 1) 8%, rgba(54, 121, 9, 1) 32%, rgba(6, 160, 9, 1) 64%, rgba(0, 255, 65, 1) 100%)"
        />

        <SpecsContainer
          ref={fadeAnimRef}
          head={"Skills"}
          exp={
            <ul>
              {skills.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          }
          bgcolor="linear-gradient(180deg, rgba(2, 0, 36, 1) 8%, rgba(54, 121, 9, 1) 32%, rgba(6, 160, 9, 1) 64%, rgba(0, 255, 65, 1) 100%)"
        />

        <SpecsContainer
          ref={fadeAnimRef}
          head={"Education"}
          exp={
            <ul>
              <li>
                <h3>IIIT Dharwad</h3>
                Computer Science Engineering(CSE) / 2021 - 2025
              </li>
              <br />
              <li>
                <h3>Mukularanyam English School</h3>
                Higher Secondary Education / 2018 - 2020
              </li>
            </ul>
          }
          bgcolor="linear-gradient(180deg, rgba(2, 0, 36, 1) 8%, rgba(54, 121, 9, 1) 32%, rgba(6, 160, 9, 1) 64%, rgba(0, 255, 65, 1) 100%)"
        />

        <div className="projectContainer" ref={fadeAnimRef}>
          <TraceLine
            background="linear-gradient(180deg, rgba(2, 0, 36, 1) 8%, rgba(54, 121, 9, 1) 32%, rgba(6, 160, 9, 1) 64%, rgba(0, 255, 65, 1) 100%)"
          />
          <div className="removeScroll">
          <div className="Projects">Projects</div>
            <iframe className="projectIframe" src="/projects"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
