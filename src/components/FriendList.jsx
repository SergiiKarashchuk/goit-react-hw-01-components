import PropTypes from 'prop-types';
import { FriendItem } from './FriendItem';
import { FriendBlock } from './FriendList.styled.jsx';

export const FriendList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <FriendBlock>
          <li className="item" key={item.id}>
            <FriendItem item={item} />
          </li>
        </FriendBlock>
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
