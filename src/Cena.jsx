import React from 'react'
import { useEffect } from 'react';

function Cena({nombre, precio,color,SetTotal,alimento,reyes,total}) {
const ruta='http://www.html6.es/img/rey';
const imagenes= `${ruta}${nombre.toLowerCase()}.png`;

const comprar=(elemento)=>{
SetTotal((e)=> e+precio);
elemento.target.parentNode.parentNode.parentNode.style.display='none'

// se pone varios parentNode ya que tiene que llegar al div principal entonces tiene que pasar por tres



   }
  return (
    <div className='rey' style={{backgroundColor:color}}>
   
      <h1>{nombre}</h1>  
         <div className='alimento'> {alimento}</div>
      <img src={imagenes} alt='reyes'/>
      <div className='titulo'>Precio:</div>
      <div className='precio'>
        {precio}$
        <div>
            <button onClick={comprar}>Comprar</button>
        </div>
      </div>
    </div>
  )
}
export default Cena;