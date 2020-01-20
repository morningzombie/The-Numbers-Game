import React, { useState } from 'react';
import './index.css'

let id = 0
let evenId = 0
let oddId = 0
let evenNum = []
let oddNum = []
let allNums = []
const _data = []
function App() {
    const [count, setCount] = useState(_data);

    const createCount = () => {
        id = id + 1
        const name = Math.floor((Math.random() * 10) + 1);
        const currentNum = { id, name };
        const updated = [...count, currentNum]
        count.push(currentNum)
        allNums.push(currentNum.name)
        setCount(updated)
        console.log("NUM", currentNum)
        console.log("count", count)

        if (currentNum.name % 2 === 0) {
            console.log("NUM is even", currentNum.name)
            evenNum.push(currentNum.name)
            evenId = evenId + 1
        } else {
            console.log("NUM is odd", currentNum)
            oddNum.push(currentNum.name)
            oddId = oddId + 1
        }
    }
    // function onlyUnique(value, index, self) {
    //     return self.indexOf(value) === index;
    // }
    // let uniqueNums = count.filter(onlyUnique);
    // console.log("UNIQUENUMS", uniqueNums)
    // let uniqueNumsAmt = uniqueNums.length

    const unique = (value, index, self) => {
        return self.indexOf(value) === index
    }
    const uniqueNums = allNums.filter(unique)

    return (
        <div className="flex-container">
            <div>
                <h1>The Numbers Games</h1>
            </div>
            <button onClick={createCount}>Create Num</button>
            <div className="stats">
                <h2>Stats</h2>
                <p>{uniqueNums.length} Unique Numbers</p>
            </div>
            <div>
                <h2>All ({id})</h2>
                <ul>
                    {
                        count.map(currentNum => {
                            return (
                                <li key={currentNum.id}>{currentNum.name}</li>
                            )
                        })
                    }
                </ul>
            </div>

            <div>
                <h2>Even ({evenId})</h2>
                <ul>
                    {
                        evenNum.map(even => {
                            return (
                                <li>{even}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <div>
                <h2>Odd ({oddId})</h2>
                <ul>
                    {
                        oddNum.map(odd => {
                            return (
                                <li>{odd}</li>
                            )
                        })
                    }
                </ul>
            </div>

        </div >

    );
}

export default App;
