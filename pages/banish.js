import React, { useState, useEffect } from "react";
import DCard from "../components/DCard";

function Banish({ search, people, setPeople }) {
  const url = "http://localhost:3001/Cohort";
  function handlePatch(id) {
    const newData = {
      ban: "false",
    };
    fetch(`${url}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });
    const updatedToys = people.map((elem) => {
      if (elem.id === id) {
        return { ...elem, ban: "false" };
      } else {
        return elem;
      }
    });
    setPeople(updatedToys);
  }

  const newSearch = people.filter((elem) => {
    return elem.name.toLowerCase().includes(search.toLowerCase());
  });
  const display = newSearch.map((elem) => {
    if (elem.ban === "true") {
      return <DCard handlePatch={handlePatch} elem={elem} />;
    } else {
      return "";
    }
  });

  return <div className="Bcards">{display}</div>;
}

export default Banish;
