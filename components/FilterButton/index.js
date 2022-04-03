import styles from './FilterButton.module.css';
import { useState } from 'react';

const FilterButton = ({ element, action }) => {

  const { addFilter, deleteFilter } = action;

  const [active, setActive] = useState(styles.optionAutor);

  const handleActive = () => {
    if (active === styles.optionAutor) {
      setActive(styles.optionAutor + ' ' + styles.active)
      addFilter(element.name);
    } else {
      setActive(styles.optionAutor)
      deleteFilter(element.name);
    }
  }

  return (
    <a onClick={handleActive} className={active}>{element.name}</a>
  )
}

export default FilterButton