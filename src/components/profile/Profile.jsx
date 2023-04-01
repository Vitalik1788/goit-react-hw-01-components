import { ProfileEvents } from 'components/profile_events/ProfileEvents';
import css from './Profile.module.css';

export const Profile = ({user}) => {
  return <div className={css.container}>
    <ProfileEvents
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} />
  </div>
}