import PropTypes from 'prop-types';
import css from './Transaction_Items.module.css';

export const TransactionItems = ({type, amount, currency}) => {
  return (
    <tr className={css.tableRow}>
      <td className={css.tableD}>{type}</td>
      <td className={css.tableD}>{amount}</td>
      <td className={css.tableD}>{currency}</td>
    </tr>
  )
}

TransactionItems.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
}