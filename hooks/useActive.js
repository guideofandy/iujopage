import { useState } from 'react'

const useActive = () => {

  const [active, setActive] = useState(false)

  const handleActiveChange = () => {
    setActive(!active)
  }

  return { active, handleActiveChange }
}

export default useActive