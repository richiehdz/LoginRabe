import React, { useState } from 'react';

const FormularioLogin = () => {



      
  return (
    <div>
      <h1 className='centerDIV'>Inicio de sesión</h1>
      <div>
        <div className='centerDIV'>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <input type="email" placeholder="Correo" style={{width:'300px',height:'30px'}} />
            <input type="password" placeholder="Contraseña" style={{ width: '300px', height: '30px',marginTop:'20px' }} />
            <button type="submit" style={{width:'100px',height:'30px',marginTop:'20px'}} >Entrar</button>
            <button type="submit" style={{width:'100px',height:'30px', marginTop:'50px'}}>Registrar</button>
            </div>
            
             
      </div>
      </div>
    </div>
  );
};

export default FormularioLogin;
