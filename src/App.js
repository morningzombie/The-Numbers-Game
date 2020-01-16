import React, { useState } from 'react';
import Stats from './components/Stats'
//import All from './components/All'
import Even from './components/Even'
import Odd from './components/Odd'

import './index.css'

//function App() {
// const addNumber = () => {
//     const num = Math.floor(Math.random() * 1000)
// }
let id = 0
let nums = []
function App() {
    let [count, setCount] = useState(0);
    const handleClick = () => {
        // console.log("clicked")
        let newNum = Math.floor(Math.random() * 11)
        id = id + 1
        console.log('the new num?', newNum)
        nums.push(newNum)
    };
    console.log(nums)

    return (
        <div className="flex-container">
            <div>
                <h1>The Numbers Games</h1>
            </div>

            <button onClick={handleClick}>
                Add Number</button>

            <div className="stats">
                <h2>Stats</h2>
                <Stats />
            </div>


            <div>
                <h2>All</h2>
                <p> clicked {count} times</p>
                <ul>
                    {nums.map((number, i) => {
                        return (
                            <li key={i}>
                                {number}
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
            <div>
                <h2>Even</h2>
                <Even />
            </div>
            <div>
                <h2>Odd</h2>
                <Odd />
            </div>
        </div>

    );
}

export default App;