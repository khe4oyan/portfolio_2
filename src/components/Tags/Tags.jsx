// styles
import classes from './styles.module.css';

export default function Tags({ tags }) {
  return (
    <div className={classes.tags}>
      {tags.map((tag, i) => (
        <p key={i} className={classes.tag}>
          {tag}
        </p>
      ))}
    </div>
  )
}