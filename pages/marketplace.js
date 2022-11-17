import React, { useState, useEffect } from "react";
import Header from "../components/Headers";
import ListingsContainer from "../components/ListingsContainer";
import ListingCard from "../components/ListingCard";
import Search from "../components/Search";
function MarketPlace() {
  const url = "http://localhost:3001/listings";
  // state
  const [search, setSearch] = useState("");
  const [listings, setlistings] = useState([]);
  //fetch Data
  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setlistings(data);
      });
  }, []);
  // Delete
  function deleteListing(id) {
    // fetch(`${url}/${id}`, {
    //   method: "DELETE",
    // }); //rerender delete by changing State
    const updatedArray = listings.filter((listing) => {
      return listing.id !== id;
    });
    setlistings(updatedArray);
  }

  //Search Input
  const searchArr = listings.filter((list) => {
    return list.description.toLowerCase().includes(search.toLowerCase());
  });
  const listingData = searchArr.map((listing) => {
    return (
      <ListingCard
        listing={listing}
        key={listing.id}
        deleteListing={deleteListing}
      />
    );
  });
  return (
    <div className="app">
      <Header setSearch={setSearch} search={search} />
      <ListingsContainer
        listingData={listingData}
        searchArr={searchArr}
        setlistings={setlistings}
        listings={listings}
      />
      
    </div>
  );
}
export default MarketPlace;
