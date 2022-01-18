import React from 'react';
import '../assets/style/formulario.scss';

const Formulario = () => {
          return(
         
              <section className="register__container">
               
                <h2>Crouwdfundig application</h2>
                <form className="register__container--form" >
                  
                  <input 
                  name='name'
                  className="input" 
                  type="text"
                  placeholder="Nombre"
                 
                   />
                  

                  <input 
                  name='text'
                  className="input" 
                  type="text" 
                  placeholder="Correo"
              
                  />
                  <button className="button">Submmit</button>
                  
                  </form>

           
            </section>
          
 )
}

export default Formulario;