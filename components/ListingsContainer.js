import {React, useState, useEffect} from "react";
import ListingCard from "./ListingCard";
 
function ListingsContainer({setlistings,listings , searchArr, listingData}) {
 

 

  return (
    <main>
      <ul className="cards">
       {listingData}
      </ul>
    </main>
  );
}

export default ListingsContainer;
