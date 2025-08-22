// components
import Tags from "../Tags";
import SvgIcon from "../SvgIcon/SvgIcon";

// styles
import classes from "./styles.module.css";

export default function Experience({ data }) {
  const { link, date, title, company, whatIDo, links, tags } = data;

  const onClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className={classes.root}>
      <a href={link} target="_blank" rel="noreferrer" className={classes.projectLink}>
        <div className={classes.dateBox}>
          <p className={classes.date}>
            <span>{date.start} — </span> <span>{date.end}</span>
          </p>
        </div>
      </a>
      <div className={classes.info}>
        <a href={link} target="_blank" rel="noreferrer" className={classes.projectLink}>
          <div className={classes.titleBox}>
            <p className={classes.title}>{title} ·</p>
            <p className={classes.companyName}>
              {company}{" "}
              {link && (
                <SvgIcon
                  iconName="arrowTopRightArrow"
                  width={18}
                  height={18}
                  className={classes.titleIcon}
                />
              )}
            </p>
          </div>
          <div className={classes.whatIDo}>{whatIDo.join(" ")}</div>
        </a>
        {links && (
          <div className={classes.links}>
            {links.map((link, i) => (
              <button
                onClick={() => onClick(link.link)}
                key={i}
                href={link.link}
                target="_blank"
                rel="noreferrer"
                className={classes.link}
              >
                <SvgIcon iconName="link" width={17} height={17} />
                {link.title}
              </button>
            ))}
          </div>
        )}
        <Tags tags={tags} />
      </div>
    </div>
  );
}
