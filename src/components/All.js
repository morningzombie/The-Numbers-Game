import React, { useState } from 'react';
//import data from '../data';
//const { companies } = data;

function All() {
    //     // let randomNumber = Math.floor(Math.random() * 11);
    let [count, setCount] = useState(0);
    const handleClick = () => {
        // console.log("clicked")
        setCount(count + 1)
    };
    return (
        <div onClick={handleClick}>
            <Message count={count} />
        </div>
    );
}
/* <ul>
{
    companies.map(company => {
        return (
            <li className="box" key={company.id}>
                <b>{company.name}</b><br />in {company.state}
            </li>
        )
    })
}
</ul> */




export default All;