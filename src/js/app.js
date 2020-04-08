import React from 'react';
import ReactDOM from 'react-dom';
import './../sass/style.scss'; // adres do głównego pliku SASS
import Main from './main';
import Content from './content';
import Clock from './clock';


const App = () =>{
    return (
        <div className="appContainer">
        <Main/>
        <Content/>
        <Clock/>
        </div>
    )
}

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render( < App/ > , document.getElementById('app'))
})