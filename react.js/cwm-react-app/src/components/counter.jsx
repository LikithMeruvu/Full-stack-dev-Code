import React,{ useState } from 'react';


export default function Counter() {
    const target = document.querySelector(".counter")
    const [count,setCount] = useState(0);
    const change =()=>(count >= 10)? target.innerHTML = `The Number ${count} Max Limit Reached` :setCount(count+1);
    return (
        <div>
            <h2 className="counter">{count}</h2>
            <button className="btn" onClick={change}>Count ++</button>
        </div>
    )
}

