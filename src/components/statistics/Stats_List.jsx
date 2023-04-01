import css from './StatsList.module.css';
import Function from '../../random_colour';

export const StatsList = ({label, amount}) => {
  return (
    <li className={css.statsItem} style={{ backgroundColor: Function() }}>
      <span className={css.statsLabel}>{label}</span>
      <span className={css.percentage}>{amount}%</span>
    </li>
  )

}