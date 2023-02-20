import PropTypes from 'prop-types';

export const FriendItem = ({ item: { avatar, name, isOnline } }) => {
  return (
    <>
      <div className="box">
        <span
          className="status"
          style={{
            backgroundColor: isOnline ? 'green' : 'red',
            display: 'block',
            width: 15,
            height: 15,
            borderRadius: '50%',
            alignSelf: 'center',
          }}
        ></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
      </div>
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
