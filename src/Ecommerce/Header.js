import React, { useState } from "react";
import './Allstyle.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal, ModalBody, ModalFooter, ModalTitle} from 'react-bootstrap';
import { createGlobalStyle, css } from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { ReactDOM } from "react-dom";
import Navbar from "./Navbar/Navbar";

import { Route, Router } from "react-router-dom";
import { BrowserRouter as  Switch} from 'react-router-dom';
import NavbarData from "./Navbar/Navbardata";
import Navbar2Data from "./Navbar/Navbar2data";
import { Link } from "react-router-dom";
import './Mainpage';
import Shopall from "./pages/Shopall";








function Header(){
   
    const[show, setShow] = useState(false);
    const modalOpen = () => setShow(true);
    const modalClose = () => setShow(false);
  
    const[show2, setShow2] = useState(false);
    const barOpen = () => setShow2(true);
    const barClose = () => setShow2(false);

    const [userData, setUserData] = useState({
        username:'',
        useremail:'',
        userphone:'',
        userpassword:''


    });

    const inputEvent = (event) =>{
        const {value, name} = event.target;

      

        setUserData((preValue) =>{
            console.log(preValue);
            
            return{

                ...preValue,
                [name]:value,
            }
        }
        )


      

    }

   



return(
        <>

<header className="header">
<Navbar />
<div className="logo text-center "><a href  >PhantomStore</a></div>

 <div className="responsive1">
         <div className="searchbox">
            <input type="text" placeholder="&xF007; &nbsp; Search Here" className="searchtext" />
       
            <Button variant="light"  style={{outline:'none'}} className='nb1'><span className="fas fa-search searchbtn text-center "  ></span></Button> </div>

        <Button onClick={modalOpen} variant="light"  style={{outline:'none'}} className='nb2'><span className="fas fa-user menu-user text-center "  ></span></Button>

      <div className="menu-cart">
    <Button variant="light" style={{outline:'none'}} className='nb3 '><span className="fas fa-shopping-cart search-icon text-center "  ></span></Button></div>
</div>

</header>

<div class="header2">
    <div class="container">
    {Navbar2Data.map((val) =>{
        return(
            <Link to={val.path} className='link2'>
                        
                        <span> {val.title}</span>
                       
                    </Link>
        )
    })}
</div>
</div>




<Modal show={show} onHide={modalClose}>
<Modal.Header closeButton>
<h4 className="text-center">Login</h4>
</Modal.Header>


<ModalBody>


<form class="f1" action="/login" method="POST">
                    <label>User-Email</label><br/>

                    <input type="text" placeholder="&#xF007; &nbsp; Tuba Ammar" style={{fontFamily: 'arial, fontawesome'}} name="email"  /><br/>

                    <label>Password</label><br/>

                    <input type="password" placeholder=" &#xF023; &nbsp; your password"  style={{fontFamily: 'arial, fontawesome'}} name="password"    /><br/>

                    <p class="para1">Forgot password?</p>

                    <button className="text-center button1"><input type="submit" value="Log In" style={{width:'97%'}}/></button>
                
                
                <div className="account"> 
                <p className="para3 text-center">Don't have an account?</p>
                <span className="para4"><Button onClick={barOpen}>Sign Up</Button></span></div>
                    
                
                
                </form>



</ModalBody>

</Modal>





<Modal show={show2} onHide={barClose}>

<Modal.Header closeButton>
<ModalTitle style={{marginLeft: '1.5rem', marginTop: '2rem'}}>Create an Account</ModalTitle>
</Modal.Header>

<ModalBody>

<form class="f1" action="/" method="POST">
                <label>Name</label> 
                <input type="text" placeholder="&#xF007; &nbsp; Tuba Ammar" style={{fontFamily: 'arial, fontawesome'}}  name="username" onChange={inputEvent} value={userData.username}  /><br/>
                
                <label>Email Address</label>
                <input type="email" placeholder=" &#xF0e0; &nbsp; your email address" style={{fontFamily: 'arial, fontawesome'}}  name="useremail" onChange={inputEvent} value={userData.useremail} /><br/>

                <label>Phone No.</label>
                <input type="number" placeholder=" &#xf879; &nbsp; your phone #" style={{fontFamily: 'arial, fontawesome'}}  name="userphone" onChange={inputEvent} value={userData.userphone} />

                <label>Password </label>
                <input type="password" placeholder=" &#xF023; &nbsp; your password" style={{fontFamily: 'arial, fontawesome'}}  id="mypassword" name="userpassword"  onChange={inputEvent} value={userData.userpassword} /> 
           
                <span style={{position: 'absolute', top: '75%', right: '20%'}} ><i className="fLink fa-eye" id="eye"  ></i></span>
                
                <button type="button" className="btn btn-sucess text-center button1" style={{marginTop: '2rem', marginBottom: '2rem'}}><input type="submit" value="Create an Account"/></button>
            
        
            </form>

</ModalBody>


</Modal>




    </>
    
    )
}

   
    
             

          
     
export default Header;