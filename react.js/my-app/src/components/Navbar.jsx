import React,{useState} from 'react';
import Cards from "./Cards";


export default function Navbar(props) {
    let [pMode,setPmode] = useState(props.Mode);
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${pMode} bg-${pMode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Pricing</a>
                            </li>
                        </ul>
                        <div className={`form-check form-switch bg-${pMode} text-${pMode}`}>
                            <input className="form-check-input" onClick={() =>pMode=== "light"? setPmode("dark") : setPmode("light")} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className={`form-check-label text-${pMode==="light"?"dark":"light"}`} htmlFor="flexSwitchCheckDefault"> {pMode==="light"?"dark":"light"} mode</label>
                        </div>
                    </div>
                </div>
            </nav>

            <Cards Tm={pMode}/>
        </>
    );
}
