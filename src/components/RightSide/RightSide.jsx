// components
import Experience from "../Experience";
import Project from "../Project";
import SvgIcon from "../SvgIcon/SvgIcon";
import Footer from "../Footer/Footer";

// data
import experienceData from "../../data/experience";
import selectedProjectsData from "../../data/selectedProjects";

// styles
import classes from "./styles.module.css";

export default function RightSide() {
  return (
    <div className={classes.root}>
      <div className={classes.aboutMe} id="about">
        <h2 className={classes.sectionHeaderText}>About</h2>
        <p>
          Back in 2020, I decided to try my hand at creating interactive web
          applications and plunged headfirst into the rabbit hole of coding and
          web development. Fast forward to today: I have the honor of creating
          software for{" "}
          <a href="https://picsartacademy.am/" target="_blank" rel="noreferrer">
            Picsart Academy.{" "}
          </a>
          {/* {" "} */}
          {/* —{" "}
          <a href="https://chessnoor.com" target="_blank" rel="noreferrer">
            Chessnoor
          </a>
          . */}
        </p>
        <p>
          Now I am focused on creating accessible user interfaces. I most enjoy
          creating software where design and engineering meet — things that look
          good but are also well-constructed under the hood.
        </p>
        <p>
          When I'm not at the computer, I usually spend my time reading, hanging
          out with friends, and spending time with family.
        </p>
      </div>

      <div className={classes.experienceBox} id="experience">
        <h2 className={classes.sectionHeaderText}>Experience</h2>

        {experienceData.map((data, i) => (
          <Experience key={i} data={data} />
        ))}
      </div>

      {/* <a
        className={classes.linkCV}
        href="/Suren Khechoyan CV.pdf"
        target="_blank"
      >
        View Full Resume <SvgIcon iconName="arrowRight" />
      </a> */}

      <div className={classes.projects} id="projects">
        <h2 className={classes.sectionHeaderText}>Projects</h2>
        {selectedProjectsData.map((data, i) => (
          <Project key={i} data={data} />
        ))}
      </div>

      <Footer />
    </div>
  );
}
