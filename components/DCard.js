import {useState} from 'react'
function DCard ({elem,handlePatch}){
 function handleUnBan(){
  const id = elem.id
  handlePatch(id)
 }
return (
  <li className='card_display' >
    <div className="card">
      <img
        
        src={elem.image}
        alt={elem.name}
        className="card__image"
      />
      <div className="card__content">
        <div className="card__title">{elem.name}</div>
        <p className="card__text">{elem.description}</p>
        {/* <h4> Age : {age} </h4> */}
       
        <div className="card__detail">
          
          <button onClick={handleUnBan}className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" > UnBanish </button>
          

        </div>
      </div>
    </div>
  </li>
);
}
export default DCard