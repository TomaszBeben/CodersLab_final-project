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
            })
        .then(data=>{
            setProjectsName(data.projects);
            
        })
    },[])
    
    
    return (
        
        <HashRouter>
       <ul>
        {projectsName.map(data => (
          <li key={data.id}><Link to = {"/",data.name}> {data.name} </Link></li>
        ))}
      </ul>
        <ul>
            <li>Książka</li>
        </ul>
        </HashRouter>
        
        )        
}

export default Menu;