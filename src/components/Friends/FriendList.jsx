import PropTypes from 'prop-types'; 
import { FriendListItem } from './FriendListItem';
import css from './Friends.module.css';



export const FriendList = ({ friends }) => { 
    return (
      <ul className={css.friendList}>
            {friends.map(friend =>{
                return (
                    <FriendListItem
                      key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}/>
                )}
    )}
</ul>
  )
}


  FriendList.propTypes = {
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    }