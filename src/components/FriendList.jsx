import PropTypes from 'prop-types';
import { FriendItem } from './FriendItem';

export const FriendList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <FriendItem item={item} />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
