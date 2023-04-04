import PropTypes from 'prop-types';
import css from './TransactionEvents.module.css';

export const TransactionEvents = ({type, amount, currency}) => {
  return (
    <tr className={css.tableRow}>
      <td className={css.tableD}>{type}</td>
      <td className={css.tableD}>{amount}</td>
      <td className={css.tableD}>{currency}</td>
    </tr>
  )
}

TransactionEvents.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
}