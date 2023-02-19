import PropTypes from 'prop-types'
import { ProfileContainer, ProfileInfo, Stats  } from './Profile.styled';


export const Profile = ({item: {avatar, username, tag, location, stats: { followers, views, likes }}}) => {
    return <ProfileContainer>
    <div className="profile"> 
    <div className="description">
        <img src={avatar} alt={username} className="avatar" width="100%" />
        <ProfileInfo>
        <p className="name"> {username} </p> 
        <p className="tag"> {tag} </p>
        <p className="location"> {location} </p>
        <Stats>
        <ul className="stats">
            <li> 
            <span className="label">Followers</span> 
            <span className="quantity"> {followers} </span> </li>
            <li> 
            <span className="label">Views</span> 
            <span className="quantity"> {views} </span>  </li>
            <li>
            <span className="label">Likes</span> 
            <span className="quantity"> {likes} </span>  </li>
        </ul>
        </Stats>
        </ProfileInfo>
        </div>
         </div>;
         </ProfileContainer>
    }

Profile.propTypes = {
    item: PropTypes.shape({
        username: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        })

    }).isRequired,
};