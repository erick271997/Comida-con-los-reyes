
import './App.css';
import { useEffect, useState } from 'react';
import Cena from './Cena';

function App() {

  const reyes=[
    {
      nombre:"Atanagildo",
      color:"darkolivegreen",
      precio:178,
      alimento:["1. Papas fritas, pollo asado. ",
      "2. Ensalada agri-dulce .  ", " ",
    "3 . Arroz a la Valecia coco. ",
  "4. Camaron fitos y tè"],
      
      alimento3:"3.sancocho "
    },{
      nombre:"Ervigio",
      color:"crimson",
      precio:169,
      alimento:["1. Papas fritas, pollo asado. ",
      "2. Ensalada agri-dulce .  ", " ",
    "3 . Arroz a la Valecia coco. ",
  "4. Camaron fitos y tè"],
    },{
      nombre:"Ataúlfo",
      color:"peru",
      precio:81,
      alimento:["1. Papas fritas, pollo asado. ",
      "2. Ensalada agri-dulce .  ", " ",
    "3 . Arroz a la Valecia coco. ",
  "4. Camaron fitos y tè"],
    },{
      nombre:"Leogivildo",
      color:"darkmagenta",
      precio:126,
      alimento:["1. Papas fritas, pollo asado. ",
      "2. Ensalada agri-dulce .  ", " ",
    "3 . Arroz a la Valecia coco. ",
  "4. Camaron fitos y tè"],
    },{
      nombre:"Recesvinto",
      color:"royalblue",
      precio:141,
      alimento:["1. Papas fritas, pollo asado. ",
      "2. Ensalada agri-dulce .  ", " ",
    "3 . Arroz a la Valecia coco. ",
  "4. Camaron fitos y tè"],
    },{
      nombre:"Sisebuto",
      color:"teal",
      precio:69,
      alimento:["1. Papas fritas, pollo asado. ",
      "2. Ensalada agri-dulce .  ", " ",
    "3 . Arroz a la Valecia coco. ",
  "4. Camaron fitos y tè"],
    }
  ]
const [total, SetTotal]= useState(0);

useEffect(() => {
  if (total === 764) {
    alert("¡Gracias por su compra!");
  }
}, [total]);

  return (
    <>
    
    <h1>Total a Pagar: {total} $</h1>
    <div className='cajacentral'>
       <Cena nombre={reyes[0].nombre} color={reyes[0].color} precio={reyes[0].precio} alimento={reyes[0].alimento} 
      SetTotal={SetTotal}/>
      <Cena nombre={reyes[1].nombre} color={reyes[1].color} precio={reyes[1].precio} alimento={reyes[1].alimento} SetTotal={SetTotal}/>
      <Cena nombre={reyes[2].nombre} color={reyes[2].color} precio={reyes[2].precio} alimento={reyes[2].alimento} SetTotal={SetTotal}/>
      <Cena nombre={reyes[3].nombre} color={reyes[3].color} precio={reyes[3].precio} alimento={reyes[3].alimento} SetTotal={SetTotal}/>
      <Cena nombre={reyes[4].nombre} color={reyes[4].color} precio={reyes[4].precio} alimento={reyes[4].alimento} SetTotal={SetTotal}/>
      <Cena nombre={reyes[5].nombre} color={reyes[5].color} precio={reyes[5].precio} alimento={reyes[5].alimento} SetTotal={SetTotal}/>

   </div> 
   </>
  );
}

export default App;
