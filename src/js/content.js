import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './../sass/style.scss';
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import Form from './footer-form';
import Cooperation from './footer-cooperation';
import About from './footer-about';
import Menu from './menu';

const Content = () => {
    return (<HashRouter >
        <h1 className="content" >
            <Switch >
                <div className="pictures_container" >
                    <Route exact path="/form" component={Form}/>
                    <Route exact path="/cooperation" component={Cooperation}/>
                    <Route exact path="/about" component={About}/>
                </div>
                <div> 
                
                <nav className="content_nav" >
                    <div > 1 / 9 </div> 
                    <button > {'<-'} </button> 
                    <button > {'->'} </button> 
                    <button > {'all'} </button> 
                    <button > {'info'} </button> 
                </nav>
                </div>


            </Switch>

        </h1> </HashRouter>
    )
}

export default Content;