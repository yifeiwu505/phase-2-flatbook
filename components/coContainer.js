import React, {useState, useEffect} from 'react';
import Card from './Card'

function CoContainer ({search}){
  const url = "http://localhost:3001/Cohort"
  const [people,setPeople] = useState([])
 
  useEffect(()=>{
    fetch(url)
    .then(r=>r.json())
    .then(data =>{
      setPeople(data)
    })
    
  },[])
  const newSearch = people.filter(elem => {
    return elem.name.toLowerCase().includes(search.toLowerCase())
  })
  const display = newSearch.map(elem=>{
    console.log(elem);
    return (
      <Card elem={elem} />
    )
})
  
  return (
    
    <ul className="cards">
      {display}
    </ul>
  )
}

export default CoContainer