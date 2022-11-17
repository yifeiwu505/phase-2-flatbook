import React from "react";

function Search({setSearch,search}) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }
  function handleSearch(e){
    setSearch(e.target.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={handleSearch}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
