import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './../sass/style.scss';
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import Form from './footer-form';
import Cooperation from './footer-cooperation';
import About from './footer-about';
import Menu from './menu';
import Project from './project';
import Book from './book'
import Logo from "./logo"


const Content = () => {
    return (<HashRouter >
        <h1 className="content" >
            <Switch >
                <div className="pictures_container" >
                    {/* <Route exact path="/" component={Logo}/> */}
                    <Route exact path="/book" component={Book}/>
                    <Route exact path="/form" component={Form}/>
                    <Route exact path="/cooperation" component={Cooperation}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/projects/:id" component={Project}/>
                </div>
            </Switch>
        </h1> 
        </HashRouter>
    )
}

export default Content;

{/* <Route exact path="/projects/:name/:idImage" component={Image}/> */}