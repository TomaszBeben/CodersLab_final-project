import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import './../sass/style.scss';



const Menu = () =>{
    const [projectsName, setProjectsName] = useState([])
    useEffect(()=>{
        fetch("/build/data/data.json")
        .then(response=>{
            return response.json()
            console.log(response);
            
            })
        .then(data=>{
            setProjectsName(data.projects);
            console.log(data.projects);
            
        })
    },[])
    
    
    return (
        
        <HashRouter>
       <ul>
        {projectsName.map(data => (
          <li className="li" key={data.id}><Link to = {"/projects/"+data.id}> {data.name} </Link></li>
        ))}
      </ul>
        <ul>
            <li className="li">< Link to = "/book" > Book </Link></li>
        </ul>
        </HashRouter>
        
        )        
}

export default Menu;