import PropTypes from 'prop-types'
import css from './Statistics.module.css'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


export const Statistics = ({data, title}) => {
    return (
        <section className={css.statistics}>

            {title && <h2 className={css.title}>{title}</h2>} 
            <ul className={css.stat__list}>
                {data.map(({ id, label, percentage }) => (
                
                    < li className={css.item} key={id} style={{ backgroundColor: getRandomHexColor()}}>
                    <span className={css.label}>{label}</span>
                    <span className={css.percentage}>{percentage}%</span>
    </li>
))}
 
  </ul>
</section>)
}
Statistics.propTypes = {
    
    data: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    })),
    title: PropTypes.string
}

