import PropTypes from 'prop-types';
import { TransactionEvents } from "./TransactionEvents";
import css from './transaction_history.module.css';

export const TransactionHistory = ({transactions}) => {
  return (
    <table className={css.transactionHistory}>
  <thead>
    <tr className={css.tr}>
      <th className={css.th}>Type</th>
      <th className={css.th}>Amount</th>
      <th className={css.th}>Currency</th>
    </tr>
  </thead>

  <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <TransactionEvents
            key={id}
            type={type}
            amount={amount}
            currency={currency}          
          />
    ))}
  </tbody>
</table>
)
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }))
}