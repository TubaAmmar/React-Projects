import React, { useState } from "react";
import Header from '../Header';
import Footer from "../Footer";

import '../Allstyle.css';
import Card from "../Card";
import M1data from "./M1data";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Makeup1(){
  const [data, setData] = useState(M1data);
  const filterResult = (catItem) =>{
    const result= M1data.filter((currData) => {
      return currData.M1data !== catItem;
    } );

    setData(result);
 }
    return(
        <>
          <Header />
          <div class="my-5"></div>
<h3 class="container m1 text-center" >Makeup Products</h3>
<div className="my-4"></div>

<div className="container">
    <div className="row" style={{display:'flex', flexDirection: 'column'}}>
        <div className="col-12 border1">
        <div className="row" style={{display:'flex', flexDirection: 'column'}} >
        <div className="col-md-4"><Button onClick={() => filterResult('matt')} > Gloss</Button></div>
        <div className="col-md-4"><Button onClick={() => filterResult('glitter')}>Glittered Gloss</Button></div>
        <div className="col-md-4"><Button onClick={() => filterResult('lipoil')}>Lio Oil</Button></div>

        </div>
       

</div>
 

</div>

        </div>
 
    

<div  className="container" style={{}}>
{data.map((elem) => {
  const {id, imgsrc, link, name, category} = elem;
    return(
      <div className="container ">
        
         
        <div className="card" >
        <div className="row">
        <div className="col-md-3" >
            <div className="card-img text-center">
               <Link to={link}><img src={imgsrc}  className="i1" alt="error"/></Link></div> 
                <div className="card-body">
                <p style={{fontWeight:'700'}} className="text-center p1"><span></span>{name}</p>
                </div>

                
                </div>
            </div>
            </div>
        
            </div>
    )
})}
</div>




          <Footer />

          

          
        </>
    )
}

export default Makeup1;