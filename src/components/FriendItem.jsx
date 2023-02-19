import PropTypes from 'prop-types'

export const FriendItem = ({item: {avatar, name, isOnline}})=> {
    return <ul> 
        <li className="item">
  <span className="status">{isOnline}</span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
  <p className="name">{name}</p>
</li>
</ul>
}

FriendItem.propTypes = {
    item: PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,

    }).isRequired,
};