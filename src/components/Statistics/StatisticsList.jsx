import PropTypes from 'prop-types';
import { Statistics } from './Statistics';
import { StatisticsStyle } from './Statistics.styled.jsx';

export const StatisticsList = ({ items }) => {
  return (
    <StatisticsStyle>
      <ul>
        {items.map(item => {
          return (
            <li style={{ backgroundColor: getRandomHexColor() }} key={item.id}>
              <Statistics item={item} />
            </li>
          );
        })}
      </ul>
    </StatisticsStyle>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

StatisticsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
