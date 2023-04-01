import css from './app/app.module.css';
import { Profile } from './profile/Profile';
import events from '../data/user.json';

export const App = () => {
  return (
    <section className={css.section}>
      <Profile user={events} />
    
    </section>
  );
};
