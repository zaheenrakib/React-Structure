import React, { useState } from 'react'

const Home = () => {
    const [counter, setCounter] = useState(0);
    const handleCount = () => {
        const count = counter + 1;
        setCounter(count);
    }
    return (
        <>
            <div className='flex justify-center items-center h-screen'>
                <div>
                    <center>{counter}</center><br />
                    <button onClick={handleCount} className='btn btn-secondary'>Hello Bangladesh</button>
                </div>
            </div>
        </>
    )
}

export default Home