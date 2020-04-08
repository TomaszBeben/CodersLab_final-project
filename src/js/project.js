import React,{useState, useEffect} from 'react';
import Popup from "reactjs-popup";

const Project = props => {
    console.log(props, 'project', props.match.params.id);
    // ponownie pobierm dane z fetch i wybieram projekt o danym id
        const [project, setProject] = useState(null);
        // const [num, setNum] = useState(0);
        useEffect(()=>{
            fetch("/build/data/data.json")
            .then(response=>{
                return response.json()
                console.log(response);
            })
            .then(data=>{
                console.log(data);
                const [projectFromUrl] = data.projects.filter( p => p.id === props.match.params.id);
                
                setProject(() => projectFromUrl);
            })
        },[])
    
    if(project === null) {
        return null;
    }
    let count  = project.count;
    let images = [];
    for(let i=1; i<=count; i++) {
        const  img = <img className="images" src={`./build/images/projekt ${props.match.params.id}/${i}.jpg`} />
        images.push(
            <Popup trigger={ img } >
                 { img }
            </Popup>
        )
    }
    return(
    <>
    <div>{ images }</div>
   </>
)
}
export default Project;