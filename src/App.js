import './App.css';
import { Routes,Route,useNavigate, Navigate} from 'react-router';
import React, { useEffect, useContext,useState} from 'react';
import {NavBar} from "./Navbar"
import {Home} from './components/home.js'
import { Menu } from './components/Menu';
import { Paycheck } from './components/Paycheck';
import { OrderItem } from './components/OrderItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { MyContext } from "./common";


function App() {
 
    
  return (
   <div>
       
       <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route  path="/Menu" element={<Menu />}/>
          <Route  path="/login" element={<Login />}/>
          <Route  path="/signin" element={<Signin />}/>
          <Route  path="/reservation" element={<RequiredAuth><Paycheck /></RequiredAuth>}/>
          <Route  path="/OrderItem/:id" element={<OrderItem />}/>
        </Routes>
    </div>

  );
}
function RequiredAuth({children}){
  const token = localStorage.getItem("token")
  return token ? children : <Navigate replace to ="/login"/>       
  
}

function Login(){
  const [email,setemail]=useState()
  const [password,setpassword]=useState()
  const [invalid,setinvalid]=useState("")
  const {logindata,setlogin} = useContext(MyContext)

  const navigate = useNavigate()  
  const style={
    width:300
  }
  const login=()=>{
    if(email,password!==""){
        const data ={
          email,
          password,
        }
      fetch("https://azzipshop.herokuapp.com/login",{
        method:"POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
                             
        }
      }).then(data=>data.json()).then(data=>{
           if(data.msg=="invalid"){
               setinvalid("Invaild Inputs")
           }else{
               localStorage.setItem("token",data.token)
               setlogin(true)
              navigate("/reservation")
               
           }
      })
    }
}

  return(
    <div className="login">
         <div  className="login_heading">
          <div>{invalid}</div>
         <TextField label="Email" variant="filled" color="success" type="email" focused style={style} onChange={e=>setemail(e.target.value)}/>
         <TextField label="Password" variant="filled" color="success" type="password" focused style={style} onChange={e=>setpassword(e.target.value)}/>
         <div className="login_button">
         <Button variant="contained" onClick={() =>login()}>Login</Button>
         <Button variant="contained"  onClick={() =>navigate("/signin")}>Sign in</Button>
         </div>
         </div>

    </div>
  )
}

function Signin(){
  const [email,setemail]=useState()
  const [password,setpassword]=useState()

  const navigate = useNavigate()
  const style={
    width:300
  }
  const signup=()=>{
        if(email,password!==""){
            const data ={
              email,
              password,
            }
          fetch("https://azzipshop.herokuapp.com/signin",{
            method:"POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json"
                                
            }
          }).then(data=>{
              navigate("/login")
          })
        }
  }

  return(
    <div className="login">
      
    <div  className="login_heading">
    <TextField label="Email" variant="filled" color="success" type="email" focused style={style} onChange={e=>setemail(e.target.value)}/>
    <TextField label="Password" variant="filled" color="success" type="password" focused style={style} onChange={e=>setpassword(e.target.value)}/>
    <div className="login_button">

    <Button variant="contained" onClick={() =>signup()}>Sign up</Button>
    </div>
    </div>

</div>
  )
}
export default App;