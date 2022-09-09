/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState} from 'react';
// import React from 'react';
// import $ from 'jquery';


export default function darkMode() {
    const [styles, setStyles] = useState({
        backgroundColor : 'white',
        color : 'black'
    });
    const [btnText,setBtnText] = useState("Enable Dark Mode");

    let toggleDM = () => {
        if(styles.color === 'black'){
            setStyles({
                backgroundColor :'black',
                color : 'white'
            });
            setBtnText("Enable Light Mode");
        }
        else{
            setStyles({
                backgroundColor :'white',
                color : 'black'
            });
            setBtnText("Enable Dark Mode");
        }
    }
    
    return (
        <>  
            <div className="container" style={styles}>
            <div className="accordion accordion-flush" id="accordionFlushExample" style={styles}>
                <div className="accordion-item"  style={styles}>
                    <h2 className="accordion-header" id="flush-headingOne" style={styles}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={styles}>
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" style={styles}>
                        <div className="accordion-body" style={styles}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                    </div>
                </div>
                <div className="accordion-item" style={styles}>
                    <h2 className="accordion-header" id="flush-headingTwo" style={styles}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={styles}>
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample" style={styles}>
                        <div className="accordion-body" style={styles}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                </div>
                <div className="accordion-item" style={styles}>
                    <h2 className="accordion-header" id="flush-headingThree" style={styles}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={styles}>
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample" style={styles}>
                        <div className="accordion-body" style={styles}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div>
            </div>
            </div>
            <button className="btn" onClick={toggleDM}>{btnText}</button>
        </>
    )
}
