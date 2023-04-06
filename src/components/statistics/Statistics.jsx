import PropTypes from 'prop-types';
import css from "./statistics.module.css";
import { StatsList } from "./Stats_List";

export const Statistics = ({ title, userStats }) => {
  return (
    <section className={css.statistics}>
      {title.length !== 0 && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>  
      {userStats.map(({ id, label, percentage }) => (
        <StatsList
        key={id}
        label={label}
        amount={percentage}
      />))}      
      </ul>
    </section>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  userStats: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }))
}