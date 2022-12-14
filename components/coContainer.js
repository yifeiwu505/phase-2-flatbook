import React, { useState, useEffect } from "react";
import Card from "./Card";

function CoContainer({ search, people, handleShow, show, setPeople }) {
  const url = "http://localhost:3001/Cohort";

  function handlePatch(id) {
    const newData = {
      ban: "true",
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
        return { ...elem, ban: "true" };
      } else {
        return elem;
      }
    })
    setPeople(updatedToys);
  }

  const newSearch = people.filter((elem) => {
    return elem.name.toLowerCase().includes(search.toLowerCase());
  });

  const display = newSearch.map((elem) => {
    if (elem.ban === "false") {
      return (
        <Card
          handleShow={handleShow}
          elem={elem}
          show={show}
          handlePatch={handlePatch}
        />
      );
    } else {
      return "";
    }
  });

  return <ul className="cards">{display}</ul>;
}

export default CoContainer;
