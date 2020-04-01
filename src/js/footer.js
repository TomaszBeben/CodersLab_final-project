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
                <li > < Link to = "/about" > O Mnie </Link></li >
                <li > < Link to = "/form" > Kontakt </Link></li >
                <li > < Link to = "/cooperation" > Współpraca </Link></li >
                <li > < Link to = "/IdontKnow" > jeszcze nie wiem </Link></li >
            </ul> 
        </HashRouter>

    )
}

export default Footer;