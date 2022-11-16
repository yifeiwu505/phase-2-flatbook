



function Card ({elem}){
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
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"> Follow </button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" > Banish </button>
          

        </div>
      </div>
    </div>
  </li>
);
}
export default Card