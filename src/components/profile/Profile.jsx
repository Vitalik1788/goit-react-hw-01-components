import PropTypes from 'prop-types';

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

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    })
  })
}
