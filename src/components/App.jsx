import events from '../data/user.json';
import stats from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

import css from './app/app.module.css';

import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friends/FriendList';
import { TransactionList } from './transactions/TransactionList';

export const App = () => {
  return (
    <section className={css.section}>
      <Profile
        username={events.username}
        tag={events.tag}
        location={events.location}
        avatar={events.avatar}
        stats={events.stats}
      />

      <Statistics
        title={'Upload stats'}
        userStats={stats}
      />

      <FriendList friends={friends} />

      <TransactionList transactions={transactions} />
    </section>
  );
};
