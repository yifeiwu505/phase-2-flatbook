import React, {useState} from "react";

function ListingCard({listing, deleteListing}) {
  const [favorite, setFavorite] = useState(false)
  function handleLike(){
    setFavorite(!favorite)
  }
  function handleDelete(){
    const id = listing.id
    deleteListing(id)
  }
  return (
    <li className="card3">
      <div className="image3">
        <span className="price3">{listing.price}</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details3">
        {favorite ? (
          <button onClick={handleLike} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleLike}className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
