
function displayNews({elem}){
    return(
            <div className = " Card flex-center z-50 bg-white items-center p-2 lg:px-5 shadow-md">
                <img 
                align = "center"
                src= "https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg" 
                width = {120} 
                height = {40} 
                layout='flex'
                />
                <div className="news__content"></div>
                <div className="flex-center"><h2>{elem.country}</h2>
                <p className="news__text">{elem.title}</p>
                <p className="news__text">{elem.description}</p>

                </div>
                
            {/* <p>{elem.title}</p>
            <p>{elem.author}</p>
            <p>{elem.description}</p>
            <p>{elem.content}</p>
            <p>{elem.url}</p>
            <p>{elem.publishedAt}</p> */}

        </div>
    )
}

export default displayNews;