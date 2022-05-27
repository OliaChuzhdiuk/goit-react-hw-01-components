import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import getRandomHexColor from './getRandomHexColor';


function Statistics({ title, stats }) {
    return (
      <section className={s.statistics}>
        {title && <h2 className={s.title}>{title}</h2>}
  
        <ul className={s.stats}>
          {stats.map(({ id, label, percentage }) => {
            return (
              <li
                className={s.item}
                key={id}
                style={{ backgroundColor: getRandomHexColor() }}
              >
                <span className={s.label}>{label}</span>
                <span className={s.percentage}>{percentage}%</span>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
    
   
  
  Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      }),
    ),
  };


export default Statistics;






