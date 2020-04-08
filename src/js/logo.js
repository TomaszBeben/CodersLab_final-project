import React from 'react';
import ReactDOM from 'react-dom';
import './../sass/style.scss';
import { HashRouter } from 'react-router-dom';


const Logo = () =>{
    
    return (
        <HashRouter>
        <a className="logo" href="/">
            <h1 className="logo">Wiktor <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kubiak</h1>
        </a>
        </HashRouter>
    )
}

export default Logo;