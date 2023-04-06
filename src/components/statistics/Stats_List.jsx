import PropTypes from 'prop-types';
import css from './StatsList.module.css';
import Function from '../../utils/random_colour';

export const StatsList = ({label, amount}) => {
  return (
    <li className={css.statsItem} style={{ backgroundColor: Function() }}>
      <span className={css.statsLabel}>{label}</span>
      <span className={css.percentage}>{amount}%</span>
    </li>
  )
}

StatsList.propType = {
  label: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
}