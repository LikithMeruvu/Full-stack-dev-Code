import React, { useState } from 'react';
import $ from 'jquery';
import '../App.css';

// let message;
export default function InputArea(props) {
    let prvStyle ={
        width : '90%',
        height : '95%',
        overflowX : 'scroll'
    }

    const DM = () =>{
        console.log('hello');
        let textAreaStyle = {
            backgroundColor : 'rgba(255,255,23)',
            color : 'red',
            border : '1px solid red'
            // backgroundColor : 'black',
            // fontWeight : 'bolder'
        };
        $(".dm").on("click",function(){
            $("code").setAttribute("style",textAreaStyle);
        });
    }

    let [text, setText] = useState("ENTER YOUR TEXT HERE");
    const Encript = () => {
        let inp = document.getElementById('input').value;
        const cap = inp.split('').reverse().join('');
        let charCodeArr = [];
        
        let code;
        for (let i = 0; i < cap.length; i++) {
            if(cap[i] === ' '){code += "!";}
            code = cap.charCodeAt(i) + cap.length;
            charCodeArr.push(code);
        }

       let txt =  String.fromCharCode(...charCodeArr)

        setText(txt);
        document.getElementById("ok").style.removeProperty('visibility');
        document.querySelector(".prv code").classList.replace("hide", "see");
        document.querySelector(".ec").classList.replace("see", "hide");
        document.querySelector(".dc").classList.replace("hide", "see");
        // if (document.querySelector(".btn").textContent === "Encript Text") {
        //     document.querySelector(".btn").textContent = "Decript text";
        //     document.getElementById("ok").textContent = "Your Text Has been Encripted copy the text";
        // }
        // else {
        //     document.querySelector(".btn").textContent = "Encript Text";
        //     document.getElementById("ok").textContent = "Your Text Has been Decripted copy the text";
        // }
    }
    const Decript = () => {
        let inp = document.getElementById('input').value;
        const cap = inp.split('').reverse().join('');
        let charCodeArr = [];
        let code ;
        for (let i = 0; i < cap.length; i++) {
            if(cap[i] === "!"){code += " ";}
            code = cap.charCodeAt(i) - cap.length;
            charCodeArr.push(code);
        }

       let txt =  String.fromCharCode(...charCodeArr)
        setText(txt);
        document.getElementById("ok").style.removeProperty('visibility');
        document.querySelector(".prv code").classList.replace("hide", "see");
        document.querySelector(".dc").classList.replace("see", "hide");
        document.querySelector(".ec").classList.replace("hide", "see");
    }
    const Lc = () => {
        let inp = document.getElementById('input').value;
        const cap = inp.toLowerCase();
        setText(cap);
        document.querySelector(".prv code").classList.replace("hide", "see");
        document.querySelector(".lc").classList.add("hide");
        document.querySelector(".uc").classList.replace("hide", 'see');
    }
    const Uc = () => {
        let inp = document.getElementById('input').value;
        const cap = inp.toUpperCase();
        setText(cap);
        document.querySelector(".prv code").classList.replace("hide", "see");
        document.querySelector(".uc").classList.add("hide");
        document.querySelector(".lc").classList.replace("hide", 'see');
    }
    const change = (event) => {
        setText(event.target.value);
    }
    return (
        <>
            <h1 className="IA-h1" id="h1">Write or Paste Your Text</h1>
            <div className="container my-2">
                <h4 id="ok" style={{visibility : 'hidden' , textAlign:'center'}}>Your Text Has been Encripted copy the text</h4>
            </div>
            <div className="mb-3 area">
                <textarea className="form-control" id="input" value={text} onChange={change} spellCheck="false" placeholder="enter your text here" rows="8"></textarea>
            </div>
            <button className="btn btn-outline-primary mx-1 see ec" onClick={Encript}>Encript Text</button>
            <button className="btn btn-outline-primary mx-1 hide dc" onClick={Decript}>Decript Text</button>
            <button className="btn btn-outline-primary lc mx-2" onClick={Lc}>Lower Case The Text</button>
            <button className="btn btn-outline-primary uc" onClick={Uc}>Upper Case The Text</button>
            <br/>
            <button className="btn dm" onClick={DM}>Enable Dark Mode</button>
            <div className="container my-3">
                <h5>You Have Written A Total {text.length} Charecters and  {text.split(" ").length} words</h5>
            </div>

            <div className="prv container" style={prvStyle}>
                <h2>Preview From Here</h2>
                <code className="hide">{text}</code>
            </div>

        </>
    );
    
}

