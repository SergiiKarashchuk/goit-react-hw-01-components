import PropTypes from 'prop-types';
import { FriendItem } from './FriendItem';
import { FriendBlock } from './FriendList.styled.jsx';

export const FriendList = ({ items }) => {
  return (
    <FriendBlock>
      <ul>
        {items.map(item => (
          <li className="item" key={item.id}>
            <FriendItem item={item} />
          </li>
        ))}
      </ul>
    </FriendBlock>
  );
};

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
