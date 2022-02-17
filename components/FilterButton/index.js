import styles from './FilterButton.module.css';
import { useState } from 'react';

const FilterButton = ({ element }) => {

  const [active, setActive] = useState(styles.optionAutor);

  const handleActive = () => {

    active === styles.optionAutor ? setActive(styles.optionAutor + ' ' + styles.active) : setActive(styles.optionAutor)
  }

  return (
    <a onClick={handleActive} className={active}>{element.name}</a>
  )
}

export default FilterButton