import React, { useMemo, useState } from 'react'

export default function B4() {
    const [count, setCount] = useState<number>(0);
    const randomNumber = useMemo(() => {
        return Math.floor(Math.random() * 100) + 1;
    }, [count]);
    return (
        <>
        <h3>Number random: {count}</h3>
        <button onClick={() => setCount(randomNumber)}>Generate</button>
        </>
    )
}
