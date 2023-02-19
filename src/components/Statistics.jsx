import PropTypes from 'prop-types';

export const Statistics = ({ item: { title, label, percentage } }) => {
  return (
    <div>
      <section className="statistics">
        <h2 className="title"> {title} </h2>
        <ul className="stat-list">
          <li className="item">
            <span className="label"> {label} </span>
            <span className="percentage"> {percentage} % </span>
          </li>
        </ul>
      </section>
    </div>
  );
};

Statistics.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
