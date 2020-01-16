import React, { useState } from 'react';

const _data = [
    { id: 1, name: 'foo', count: 0 },
    { id: 2, name: 'bar', count: 0 },
    { id: 3, name: 'bazz', count: 0 }
]
function App() {
    const [things, setThings] = useState(_data);
    const removeThing = (toRemove) => {
        //console.log(toRemove)
        setThings(things.filter(thing => thing.id !== toRemove.id))
    }
    const createThing = () => {
        const id = Math.floor(Math.random() * 1000)
        const name = `Thing with id ${id}`;
        const thing = { id, name };
        const updated = [...things, thing]
        things.push(thing)
        setThings(updated)
        console.log(thing)

    }
    const updateThing = (thingToUpdate) => {
        const _updated = things.map(thing => {
            if (thing.id !== thingToUpdate.id) {
                return thing;
            }
            else {
                return { ...thingToUpdate, count: thingToUpdate.count + 1 }
            }
        });
        setThings(_updated)
        // thingToUpdate.count++;
        // setThings([...things])
    }
    return (
        <div>
            <button onClick={createThing}>Create Thing</button>
            <ul>
                {
                    things.map(thing => {
                        return (
                            <li key={thing.id}>
                                {thing.name}
                                <button onClick={() => updateThing(thing)}> {thing.count}</button>
                                <button onClick={() => removeThing(thing)}>x</button>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    );
}

// function App() {
//   const [counter, setCounter] = useState({ count: 0 });
//   const increment = () => {
//     setCounter({ count: counter.count + 1 });
//   }
//   return (
//     <div>

//       <h1 onClick={increment}> {counter.count}</h1>

//     </div>
//   );
// }


// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>

//       <h1 onClick={() => setCount(count + 1)}>{count}</h1>

//     </div>
//   );
// }

export default App;
