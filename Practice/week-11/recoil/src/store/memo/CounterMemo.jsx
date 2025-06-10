import React, { memo, useEffect, useState } from 'react'

function CounterMemo() {
    return <div>
        <Counter />
    </div>
}

function Counter() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setCount(c => c + 1)
        }, 3000)
    }, [])
    return (
        <div> 
            <MemoizedCount count={count} />
            <Increase />
            <Decrease />
        </div>
    )
}

const MemoizedCount = memo(CurrentCount)
function CurrentCount({count}) {
    return (
        <div>
            {count}
        </div>
    )
}

const Decrease = memo(() => {
    function decrease() {
    }
    return (
        <div>
            <button onClick={decrease}>Decrease</button>
        </div>
    )
})

const Increase = memo(() => {
    function increase() {
    }
    return (
        <div>
            <button onClick={increase} >Increase</button>
        </div>
    )
})

export default CounterMemo