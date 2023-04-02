import { VscCircleFilled } from "react-icons/vsc";
import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, status }) => {
  
  return (
    <li className={css.friendItem}>
      <span className={`${css.status} ${css[status]}`}> <VscCircleFilled /> </span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className={css.friendName}>{name}</p>
    </li>
  )
}