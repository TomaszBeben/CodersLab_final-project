import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, Link } from "react-router-dom";

const About = () => {
    
    return(
    <>
     <div className="text-about">
         <ul >
             <h1 className="headers"><strong className="strong">Wiktor Kubiak</strong>  - Born in 1992. Student of the Institute of Creative Photography in Opava, Czech Repubic. Currently working for the EDYTOR Photo Agency in Katowice, Poland.</h1>
             <h1 className="headers"><strong className="strong">Awards / Exhibitons :</strong> </h1>
             <li>1st place in the People - Photo story category for the project "Kleofas" in GRAND PRESS PHOTO 2015</li>
             <li>3rd place in BZ WBK Press Foto 2015 for the project "Kleofas"</li>
             <li>Group exhibition "DEBUTS" at the Lodz Fotofestiwal 2015</li>
             <li>Publication in the book "DEBUTS" 2015</li>
             <li>Exhibition at Silesian Press Photography 2014</li>
             <li>Tychy Press Photo 2014</li>
             <li>Exhibition at Silesian Press Photography 2013</li>
             <li>Group exhibition at Rybnik Photo Festival 2013</li>
         </ul>
     </div>
     </>
     )
}
export default About; 