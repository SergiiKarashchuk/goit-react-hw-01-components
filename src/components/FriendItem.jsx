import PropTypes from 'prop-types';

export const FriendItem = ({ item: { avatar, name, isOnline } }) => {
  return (
    <>
      <span
        className="status"
        style={{
          backgroundColor: isOnline ? 'green' : 'red',
          display: 'block',
          width: 30,
          height: 30,
          borderRadius: '50%',
        }}
      ></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </>
  );
};

FriendItem.propTypes = {
  item: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
