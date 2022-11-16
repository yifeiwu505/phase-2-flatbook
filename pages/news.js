import {useEffect,useState} from 'react'
import { coco } from '../components/key'
import DisplayNews from '../components/DisplayNews'

function News(){
  const [news,setNews] =useState([])
  //const coco = "https://newsdata.io/api/1/news?apikey=pub_135484d2186e88cae6b3a2c626eabccb1eacf"
  
    useEffect(() => {
    fetch(coco)
    .then(r=>r.json())
    .then(d => setNews(d.results))
  }, [])

 
   const displayNews = news.map((elem) => {
    console.log(elem);
    return <DisplayNews elem={elem} />
    
})
   
  return([...displayNews])

}
export default News