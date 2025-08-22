// styles
import classes from "./styles.module.css";

export default function Footer() {
  return (
    <div className={classes.footer}>
      <p className={classes.footerText}>
        Coded in{" "}
        <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
          Visual Studio Code.
        </a>{" "}
        Built with{" "}
        <a href="https://react.dev/" target="_blank" rel="noreferrer">
          React.js.
        </a>
      </p>
    </div>
  );
}
