import React from "react";


 
 
 function Calc(){
 
 function add(a, b){
    var sum = a + b;
    return sum;}

    function sub(a,b){
        var sub = a-b;
        return sub;}

        function multiply(a, b){
            var multiply = a*b;
            return multiply;}


            return(
                <ol>
                <li>{add(20,50)}</li>
                <li>{sub(20,30)}</li>
                <li>{multiply(20,10)}</li>
            </ol>
            )
        }

        

    export default Calc;



