import '../styles/globals.css'
import Header from '../components/Header'
import {useState,useEffect} from 'react'

function MyApp({ Component, pageProps }) {
   const [search, setSearch] = useState('')
   const url = "http://localhost:3001/Cohort"
  const [people,setPeople] = useState([])
  
  
  useEffect(()=>{
    fetch(url)
    .then(r=>r.json())
    .then(data =>{
      setPeople(data)
    })
    
  },[])
  return (
  <>
  <Header setSearch={setSearch} search={search}/>
  <Component 
  people={people}
  search={search}
  setPeople={setPeople}
  
  {...pageProps} 
  /> 
  
  </>)
}

export default MyApp
