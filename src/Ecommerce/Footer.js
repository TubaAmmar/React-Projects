import React from "react";
import './Allstyle.css';


function Footer(){
    return(
        <>
     
     <footer>
     <div className="container-fluid">
        <div className="row">
            <div className="col-md-12 btn btn-dark b1" ><button className="btn btn-dark bg-dark"><a href="#">Back to Top</a></button></div>
        </div>
        <div className="row t1">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 bg-dark text-center ft2">
                <h5>About</h5>
                <p>International Company</p>
                <p>Shopping Store</p>
                <p>Lorem, ipsum dolor.</p>
                <p>Lorem, ipsum dolor.</p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 bg-dark text-center t2">
                <h5 className="text-center">Company</h5>
                <p>International Company</p>
                <p>Shopping Store</p>
                <p>Lorem, ipsum dolor.</p>
                <p>Lorem, ipsum dolor.</p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 bg-dark text-center t2">
                <h5 className="text-center ">Resources</h5>
                <p>International Company</p>
                <p>Shopping Store</p>
                <p>Lorem, ipsum dolor.</p>
                <p>Lorem, ipsum dolor.</p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 bg-dark text-center t2">
                <h5 className="text-center ">Social Links</h5>
                <a href=""><i className= "fas fa-facebook " ></i></a>
                <a href=""><i className="fas fa-instagram"></i></a>
                <a href=""><i className="fas fa-twitter"></i></a>
                
            </div>
        </div>
    </div>
   
    
</footer>
          

          
        </>
    )
}

export default Footer;