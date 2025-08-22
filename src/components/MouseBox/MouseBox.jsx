// libs
import { useEffect, useState } from "react";

// styles
import classes from "./styles.module.css";

export default function MouseBox() {
  const [postions, setPositions] = useState([0, 0]);

  const mouseBoxStyle = {
    background: `radial-gradient(600px at ${postions[0]}px ${postions[1]}px, var(--c7), transparent 80%)`,
  };

  useEffect(() => {
    const mouseMoveEvent = (e) => {
      const { clientX, clientY } = e;
      setPositions([clientX, clientY]);
    };

    document.addEventListener("mousemove", mouseMoveEvent);

    return () => {
      document.removeEventListener("mousemove", mouseMoveEvent);
    };
  }, []);

  return <div className={classes.root} style={mouseBoxStyle}></div>;
}
