import React, { useState } from 'react';


export default function Counter() {
    let update = 0;
    let target = document.querySelector('h2');
    const [count, setCount] = useState(0);
    const change = () => {

        if(count >= 10) {
            return target.textContent = `Max Limit Reached`;
        }
        if (count >= 0) {
            update = count;
            update++;
            return setCount(update);
        }

        
    }
    return (
        <div>
            <h2>{count}</h2>
            <button className="btn" onClick={change}>Count ++</button>
        </div>
    )
}
