import DCard from "./DCard";
import {useState} from 'react'


function Card ({elem,show,handlePatch}){
  const [follow,setFollow] =useState(false)
  function handleBan(){
  const id = elem.id
  handlePatch(id)
 }
 
return (
  <li className="cards__item">
    <div className="card">
      <img
        // onClick={handleTruth}
        src={elem.image}
        alt={elem.name}
        className="card__image"
      />
      <div className="card__content">
        <div className="card__title">{elem.name}</div>
        <p className="card__text">{elem.description}</p>
        {/* <h4> Age : {age} </h4> */}

        <div className="card__detail">
          <button
            onClick={() => setFollow(!follow)}
            className={
              follow
                ? "bg-red-300 hover:bg-red-500 text-black font-bold py-2 px-4 rounded-full"
                : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            }
          >
            {follow ? "Unfollow" : "Follow"}{" "}
          </button>
          <button
            onClick={handleBan}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
          >
            {" "}
            Banish{" "}
          </button>
        </div>
      </div>
    </div>
  </li>
);
}
export default Card