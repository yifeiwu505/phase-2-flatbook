



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
          
          

        </div>
      </div>
    </div>
  </li>
);
}
export default Card