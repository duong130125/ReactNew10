import React, { useCallback, useState } from 'react'

export default function B1() {
    const [count, setCount] = useState<number>(0)

    const increment = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, []);
      
  return (
    <>
    <h3>Count: {count}</h3>
    <button onClick={increment}>Increase</button>
    </>
  )
}
