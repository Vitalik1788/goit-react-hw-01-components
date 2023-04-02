import events from '../data/user.json';
import stats from '../data/data.json';
import friends from '../data/friends.json';

import css from './app/app.module.css';

import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friends/FriendList';


export const App = () => {
  return (
    <section className={css.section}>
      <Profile user={events} />
      <Statistics userStats={stats} />
      <FriendList friends={friends} />
    </section>
  );
};
