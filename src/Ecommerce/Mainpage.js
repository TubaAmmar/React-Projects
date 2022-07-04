import React from "react";


import './Allstyle.css';
import Card from "./Card";
import Cat1data from "./Carddata/Cat1data";
import Cat2data from "./Carddata/Catdata2";
import Cat3data from "./Carddata/Cat3data";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Modal} from 'react-bootstrap';
import {Link,Routes,Route} from 'react-router-dom';
import Makeup1 from "./makeup/Makeup1";


function Main(){

   

    return(
        <>
    

    <div className="my-2"></div>
<div className="container-fluid">
    <div id="slides" className="carousel slide" data-ride="carousel" >
        <div className="carousel-inner">
            <div className="carousel-item active"><img src="img/banner/2.jpg" alt="error"/></div>
            <div className="carousel-item"><img src="img/banner/2.jpg" alt="error" /></div>
            <div className="carousel-item"><img src="img/banner/1.jpg" alt="error"/></div>
        </div>
    </div>
     </div>

     <div className="my-4"></div>

     <div className="container">
         <div className="row">
             <div className="col-12 border1">

             </div>
         </div>
     </div>
     
     <div className="my-4"></div>
    <h1 className="text-center" style={{fontWeight:'600'}}>Categories</h1>
    <div className="my-5"></div>
    <h3 className="container m1 text-center">Makeup Products</h3>


<div className="container makeup1">

{Cat1data.map(function card1(val){
    return(
        <Card
        key = {val.id}
        imgsrc = {val.imgsrc}
        link ={val.link}
        name = {val.name}
      />
    )
})}</div>


<div className="my-5"></div>
    <h3 className="container m1 text-center" >Watches</h3>
      
    <div className="my-4"></div>

    <div className="container makeup1">
    {Cat2data.map(function card1(val){
    return(
        <Card
         key = {val.id}
        imgsrc = {val.imgsrc}
        link ={val.link}
        name = {val.name}
      />
    )
})}</div>

<div className="my-5"></div>
    <h3 className="container m1 text-center" >Bags</h3>
      
    <div className="my-4"></div>

<div className="container  makeup1">
    {Cat3data.map(function card1(val){
    return(
        <Card
         key = {val.id}
        imgsrc = {val.imgsrc}
        link ={val.link}
        name = {val.name}
      />
    )
})}</div>

<div className="my-4"></div>


   
 

          
        </>
    )
}
export default Main;
