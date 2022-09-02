import React,{useState} from 'react';
import '../App.css';

// let message;
export default function InputArea(props) {
    let [text,setText] = useState(null);
    const Hi = () =>{
        let inp = document.getElementById('input').value;
        const cap = inp.split('').reverse().join('');
        setText(cap);
        document.querySelector('#output').innerHTML = text;
    }
    return (
        <>
              <h1 className="IA-h1" id= "h1">Write or Paste Your Text</h1>
            <div className="mb-3 area">
                <textarea className="form-control" id="input" placeholder = "enter your text here" rows="8"></textarea>
            </div>
                <button className="btn btn-outline-primary" onClick={Hi}>ENcript Text</button>
                <br />
                <h3 id= "output">here</h3>
        </>
    );
}

