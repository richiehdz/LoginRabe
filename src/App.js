import React, { useState } from 'react';
import './App.css';
import HeaderLogin from './HeaderLogin';
import FormularioLogin from './formularioLogin';
import './assets/fondo.jpg';


function App() {

  return (
<div style={{backgroundImage:'url("https://i0.wp.com/blog.nu.com.co/wp-content/uploads/2023/05/EconomiaDomestica_Thumb1.jpg?fit=2668%2C1559&ssl=1")',flexDirection: 'column',minHeight: '100vh',}}>
  
    <div style={{backgroundColor:'purple',display: 'flex',flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
      <HeaderLogin/>
    </div>
     <div className='rectangleLogin' style={{marginTop:'5%',marginLeft:'40%'}}>
     
      <FormularioLogin/>
     </div>
     
     </div> 
  );
}

export default App;
