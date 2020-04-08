import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './../sass/style.scss';



const Form = () => {
    const[name, setName]=useState("")
    const[phone, setPhone]=useState("")
    const[email, setEmail]=useState("")
    const[message, setMessage]=useState("")

    const submitButton= e =>{
        e.preventDefault();
        let err = '';

        const storageData = {
            "imię":name,
            "telefon":phone,
            "email":email,
            "wiadomość":message
            
        }
        localStorage.setItem("formularz", JSON.stringify(storageData))
        
        if(name.length < 3){
            err = ("imię musi zawierać przynajmniej 3 znaki");
        }else if (email.length < 2 || email.indexOf("@") === -1){
            err = ("adres email musi posiadać znak '@' i mięć conajmniej 2 znaki")
        }

        if(err === '') {
            setName('');
            setPhone('');
            setEmail('');
            setMessage('');
        } else {
            alert(err);
        }

    }
    
    return (
        <>
        <div className="formStyle">
        <form onSubmit={submitButton} >
            <div className="form-info">
            <p className="icon-box">
            <h1 className="form-icon"><i class="fas fa-phone-volume fab"></i></h1>
            <h1 className="form-icon-text">nr telefonu</h1>
            </p>
            <p className="icon-box">
            <h1 className="form-icon"><i class="fas fa-at fab"></i></h1>
            <h1 className="form-icon-text">email</h1>
            </p>
            </div>
            <input type="text" placeholder="name" value={name} onChange={e => setName(e.target.value)} />
            <input type="text" placeholder="phone number" value={phone} onChange={e => setPhone(e.target.value)}/>
            <input type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
            <textarea rows="3" cols="50" value={message} onChange={e => setMessage(e.target.value)}/>
            <input className="form-button" type="submit" value="SEND"/>
        </form>
        </div>
        </>
    )
}
export default Form; 