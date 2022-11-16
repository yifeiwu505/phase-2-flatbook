import '../styles/globals.css'
import Header from '../components/Header'
import {useState} from 'react'
function MyApp({ Component, pageProps }) {
   const [search, setSearch] = useState('')
  return (
  <>
  <Header setSearch={setSearch} search={search}/>
  <Component search={search} {...pageProps} />
  </>)
}

export default MyApp
