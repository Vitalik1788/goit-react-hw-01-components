import PropTypes from 'prop-types';

import { FriendListItem } from './FriendsItems';
import css from './FriendList.module.css';

export const FriendList = ({friends}) => {
  return <ul className={css.friendList}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        status={isOnline}
      />
    ))}
  </ul>

}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
  }))
}