// components
import LeftSide from '../../components/LeftSide';
import RightSide from '../../components/RightSide';

// styles
import classes from './styles.module.css';

export default function HomePage() {
  return (
    <div className={classes.root}>
      <LeftSide />
      <RightSide />
    </div>
  )
}