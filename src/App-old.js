import React, { useState } from 'react';
// import Stats from './components/Stats'
//import All from './components/All'
// import Even from './components/Even'
// import Odd from './components/Odd'

import './index.css'

let allNumsArr = []
let id = 0
let evenId = 0
let oddId = 0
function App() {
    let [count, setCount] = useState(0);
    const handleClick = () => {
        let newNum = Math.floor((Math.random() * 10) + 1);
        allNumsArr.push(newNum)
        id = id + 1
        setCount(newNum)
        console.log('the new num?', newNum)

        // let node = document.createElement("li");
        // let t = document.createTextNode(count);
        // node.appendChild(t);
        // document.getElementById("allNums").appendChild(node);

        if (count % 2 === 0) {
            let evenNum = count
            let node = document.createElement("li");
            let e = document.createTextNode(evenNum);
            node.appendChild(e);
            document.getElementById("evenNums").appendChild(node);
            evenId = evenId + 1
        } else {
            let oddNum = count
            let node = document.createElement("li");
            let o = document.createTextNode(oddNum);
            node.appendChild(o);
            document.getElementById("oddNums").appendChild(node);
            oddId = oddId + 1
        }
    };
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    let uniqueNums = allNumsArr.filter(onlyUnique);
    let uniqueNumsAmt = uniqueNums.length

    return (
        <div className="flex-container">
            <div>
                <h1>The Numbers Games</h1>
            </div>

            <button onClick={handleClick}>
                Add Number</button>

            <div className="stats">
                <h2>Stats</h2>
                <p>{uniqueNumsAmt} Unique Numbers</p>
            </div>
            <div>
                <h2>All ({id})</h2>
                <ul id="allNums">
                    <li>{count}</li>
                </ul>
            </div>
            <div>
                <h2>Even ({evenId})</h2>
                <p id="evenNums"></p>
            </div>
            <div>
                <h2>Odd ({oddId})</h2>
                <p id="oddNums"></p>
            </div>
        </div>
    );
}
export default App;