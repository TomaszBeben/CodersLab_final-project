import React from 'react';
import ReactDOM from 'react-dom';

import './../sass/style.scss'; // adres do głównego pliku SASS
import Main from './main';
import Content from './content';
import Description from './description';


const App = () =>{
    return (
        <div className="appContainer">
        <Main/>
        <Content/>
        <Description/>
        </div>
    )
}

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render( < App/ > , document.getElementById('app'))
})