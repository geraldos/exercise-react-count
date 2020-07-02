import React, { useState } from 'react'

function LandingPagesFunctionComponenet () {

    const [count, setCount] = useState(0)

    return (
        <div>
            <div className='count'>
                <h1>Count:</h1>
                <h2>{count}</h2>
            </div>

            <div className='buttons'>
                <button onClick={() => setCount(count + 1)}> + </button>
                <button onClick={() => 
                    {if (count < 1) {
                        alert('Maaf, Angka tidak boleh kosong')
                    } else {
                        setCount(count - 1)
                    }}}> - </button>
                <button onClick={() => setCount(count = 0)}> Reset </button>
            </div>
        </div>
    )
}

export default LandingPagesFunctionComponenet;

