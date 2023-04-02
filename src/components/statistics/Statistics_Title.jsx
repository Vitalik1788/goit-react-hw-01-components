import PropTypes from 'prop-types';
import css from "./Stats_Title.module.css";

export const StatsTitle = ({ title }) => {
  if (title === "") {
    return;
  }
  return <h2 className={css.title}>{ title }</h2>

}

StatsTitle.propTypes = {
  title: PropTypes.string,
}