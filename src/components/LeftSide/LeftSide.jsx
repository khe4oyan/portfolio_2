// libs
import { useState, useEffect } from "react";

// components
import SvgIcon from "../SvgIcon";

// styles
import classes from "./styles.module.css";

export default function LeftSide() {
  const [activeSectionInd, setActiveSectionInd] = useState(0);

  const navigation = [
    { id: "#about", title: "about" },
    { id: "#experience", title: "experience" },
    { id: "#projects", title: "projects" },
  ];

  const links = [
    { icon: "github", link: "https://github.com/khe4oyan" },
    { icon: "linkedIn", link: "https://www.linkedin.com/in/khe4oyan/" },
    { icon: "npm", link: "https://www.npmjs.com/~nerusnotfound" },
    { icon: "vscode", link: "https://marketplace.visualstudio.com/publishers/khechoyan", },
    { icon: "telegram", link: "https://t.me/+WfJH-Lbgunw0ZmNi", },
  ];

  useEffect(() => {
    // if (window.innerWidth < 1000) { return; }

    const eventHandler = () => {
      const currentPos = window.scrollY;
      const expPos = 344; // 344
      const projPos = 1520; // // 1520

      if (currentPos < expPos && activeSectionInd !== 0) {
        setActiveSectionInd(0);
      } else if (
        expPos < currentPos &&
        currentPos < projPos &&
        activeSectionInd !== 1
      ) {
        setActiveSectionInd(1);
      } else if (currentPos > projPos && activeSectionInd !== 2) {
        setActiveSectionInd(2);
      }
    };

    document.addEventListener("scroll", eventHandler);

    return () => {
      document.removeEventListener("scroll", eventHandler);
    };
  });

  return (
    <div className={classes.root}>
      <div className={classes.infoBox}>
        <div className={classes.header}>
          <h1 className={classes.name}>Suren Khechoyan</h1>
          <p className={classes.profession}>Frontend Engineer</p>
          <p className={classes.title}>
            I build pixel-perfect, engaging, and accessible digital experiences.
          </p>
        </div>
        <div className={classes.navigation}>
          {navigation.map((link, i) => (
            // <a
            //   href={link.id}
            //   className={`${classes.link} ${
            //     i === activeSectionInd && classes.activeLink
            //   }`}
            //   key={i}
            //   onClick={() => setActiveSectionInd(i)}
            //   rel="noreferrer"
            // >
            //   <div className={classes.linkLine}></div>
            //   <span className={classes.linkTitle}>{link.title}</span>
            // </a>

            <div
              className={`${classes.link} ${i === activeSectionInd && classes.activeLink}`}
              key={i}
            >
              <div className={classes.linkLine}></div>
              <span className={classes.linkTitle}>{link.title}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={classes.linkBox}>
        <div className={classes.links}>
          {links.map((linkData, i) => (
            <a
              href={linkData.link}
              target="_blank"
              key={i}
              rel="noreferrer"
              className={classes.link}
            >
              <SvgIcon iconName={linkData.icon} className={classes.icon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
