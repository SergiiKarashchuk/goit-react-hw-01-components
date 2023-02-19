import PropTypes from 'prop-types'
import { Statistics } from './Statistics'

export const StatisticsList = ({items}) => {
    return <ul>
        {items.map((item) => {
            return <li key={item.id}> 
            < Statistics item = {item} />
             </li>
        })}

    </ul>
    }

    StatisticsList.propTypes = {
        items: PropTypes.arrayOf(
            PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ).isRequired,
};
