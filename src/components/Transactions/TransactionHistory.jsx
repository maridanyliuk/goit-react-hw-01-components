import css from './Transactions.module.css';
import PropTypes from 'prop-types';



const createColor = () => {
  const color =
    'rgba(' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    0.2 +
    ')';

  return color;
};
export const TransactionHistory = ({ items }) => { 
  return (
    <table className={css.transactionHistory}>
  <thead className={css.thead}>
    <tr style={{ backgroundColor: createColor() }}>
      <th className={css.thItem}>Type</th>
      <th className={css.thItem}>Amount</th>
      <th className={css.thItem}>Currency</th>
    </tr>
  </thead>

  <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} className={css.trItem} style={{ backgroundColor: createColor() }}>
              <td className={css.tdItem}>{type}</td>
              <td className={css.tdItem}>{amount}</td>
              <td className={css.tdItem}>{currency}</td>
            </tr>
          )
        })}
  </tbody>
</table>
  )
 
}

   TransactionHistory.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};