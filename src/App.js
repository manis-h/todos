import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Todos from './Todos';

function App() {
  const [pass,setPass]=useState()
  const [password,setPassword]=useState()
  
  const [email,setEmail]=useState()
  const [errorMail,setErrorMail]=useState()
  const [errorPass,setErrorPass]=useState()
  
  useEffect(()=>{
    if(password?.length<8){
      setErrorPass(true)
    }
    else{
      setErrorPass(false)
    }
  },[password])
  useEffect(()=>{
    if(!email?.includes('@gmail')){
      setErrorMail(true) 
    
    }
    else{
      setErrorMail(false)
    }
  },[email])
  const HandleSubmit=(e)=>{
    e.preventDefault()
   

if(errorMail){
  alert('Please Enter Correct Email')
}
else if(errorPass){
  alert('Password should be greater than 8')

}

if(errorMail||errorPass){setPass(false)

}
else if(!errorMail&&!errorPass) {
  setPass(true)}

  }

//   useEffect(()=>{
// error && alert(error)
//   },[error])
  return (

    <div className="App">
      <div className= 'container'>
      
{pass?<Todos/>:
<form onSubmit={HandleSubmit}>
      <input required  onChange={(e)=>setEmail(e.target.value)} placeholder='Your Email' type='text'/>
      <input required  onChange={(e)=>setPassword(e.target.value)} placeholder='Your Password' type='password'/>
      <button role='submit'>Submit</button>
      </form>

}
      </div>
    </div>
  );
}

export default App;
