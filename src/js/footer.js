import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import './../sass/style.scss';
import Form from './footer-form'
import About from './footer-about'
import Cooperation from './footer-cooperation'


const Footer = () => {

    return (

        <HashRouter >
            <ul >
                <li className="li"> < Link to = "/about" > About </Link></li >
                <li className="li"> < Link to = "/form" > Contact </Link></li >
                <div className="icons">
                    <li className="one_icon"> < Link to = "/cooperation" ><i class="fab fa-facebook-square"></i></Link></li >
                    <li className="one_icon"> < a href="https://wiktorkubiak.tumblr.com"><i class="fab fa-tumblr"></i></a></li >
                </div>
            </ul> 
        </HashRouter>

    )
}

export default Footer;