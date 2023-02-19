import PropTypes from 'prop-types';

export const TransactionHistoryItem = ({
  item: { type, amount, currency },
}) => {
  return (
    <div>
      <table className="transaction-history">
        <tbody>
          <tr>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

TransactionHistoryItem.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
