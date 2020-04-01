import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './../sass/style.scss';



const Form = () => {
    const[name, setName]=useState("")
    const[phone, setPhone]=useState("")
    const[email, setEmail]=useState("")
    const[message, setMessage]=useState("")
    const [error, setError] = useState("");

    const submitButton= e =>{
        e.preventDefault()
        const storageData = {
            "imię":name,
            "telefon":phone,
            "email":email,
            "wiadomość":message
            
        }
        localStorage.setItem("formularz", JSON.stringify(storageData))
        
        if(name.length < 3){
            setError("imię musi zawierać przynajmniej 3 znaki");
        }else if (email.length < 2 || email.indexOf("@") === -1){
            setError("adres email musi posiadać znak '@' i mięć conajmniej 2 znaki")
        }
    }
    
    return (
        <>
        {error && alert(error)}
        <div className="formStyle">
        <form >
            <input type="text" placeholder="imię i nazwisko" value={name} onChange={e => setName(e.target.value)} />
            <input type="text" placeholder="numer telefonu" value={phone} onChange={e => setPhone(e.target.value)}/>
            <input type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
            <textarea rows="3" cols="50" value={message} onChange={e => setMessage(e.target.value)}/>
            <input onClick={submitButton} type="submit" value="Wyślij"/>
        </form>
        </div>
        </>
    )
}
export default Form; 