import PropTypes from 'prop-types';

import { VscCircleFilled } from "react-icons/vsc";
import css from './Friends_Items.module.css';

export const FriendListItem = ({ avatar, name, status }) => {
  
  return (
    <li className={css.friendItem}>
      <span className={`${css.status} ${css[status]}`}> <VscCircleFilled /> </span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className={css.friendName}>{name}</p>
    </li>
  )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired, 
}