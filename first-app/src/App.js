import React from 'react'


const App = () =>{
  return (
     <>
       
       <h1> hello world</h1>
       < myName />



       <h1>hi this is my home </h1>
     </>
   )
 };
 // how actually react look like 
// const App = () => { 
//   return  (
//   // <h1> hello world</h1>
//   React.createElement("h1",{},"hello world")
//   )
// }
 const myName = () =>{
   return(
   <div>this is saheb</div>
   )
  };

export default App;

