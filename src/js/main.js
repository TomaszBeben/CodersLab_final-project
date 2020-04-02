import React from 'react';
import ReactDOM from 'react-dom';
import './../sass/style.scss';

import Logo from './logo'
import Menu from './menu'
import Footer from './footer'

const Main = () => {
    return(

        <div className="main">
        <Logo/>
        <Menu/>
        <Footer/>
        </div>
    ) 
}
export default Main; 