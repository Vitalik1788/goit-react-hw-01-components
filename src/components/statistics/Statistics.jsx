import PropTypes from 'prop-types';
import css from "./statistics.module.css";
import { StatsTitle } from "./Statistics_Title";
import { StatsList } from "./Stats_List";

export const Statistics = ({ userStats }) => {
  return (
    <section className={css.statistics}>
      <StatsTitle title={'Upload stats'} />
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
  userStats: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }))
}