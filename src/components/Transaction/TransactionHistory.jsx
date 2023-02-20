import PropTypes from 'prop-types';
import { TransactionHistoryItem } from './TransactionHistoryItem';
import { Transaction } from './Transaction.styled.jsx';

export const TransactionHistory = ({ items }) => {
  return (
    <ul>
      <Transaction>
        <table className="transaction-history">
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>
        </table>
        {items.map(item => (
          <li key={item.id}>
            <TransactionHistoryItem item={item} />
          </li>
        ))}
      </Transaction>
    </ul>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
