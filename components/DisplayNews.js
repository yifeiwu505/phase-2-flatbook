
function displayNews({elem}){
    return (
      <div className="  md:flex bg-grey-100 rounded-xl p-8 md:p-0 dark:bg-grey-800">
        <img
          className="md:w-48 md:h-auto md:rounded-none"
          align="center"
          src="https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg"
          width={120}
          height={40}
          //   layout="flex"
        />
        <div className="news__content"></div>
        <div className="flex-center">
          <h2 className="mx-auto">{elem.country}</h2>
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
    );
}

export default displayNews;