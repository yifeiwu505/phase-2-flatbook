
function displayNews({elem}){

  const title = elem.country;
  console.log(title[0])
    return (
      <div className="news-cont">
        <img
          className="news-image"
          align="center"
          src="https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg"
          width={120}
          height={40}
          //   layout="flex"
        />
        <div className="news__content"></div>
        <div className="flex-center">
          <strong className="mx-auto">{title[0].charAt(0).toUpperCase() + title[0].slice(1)}</strong>
          <br />
          <a target={elem.link} className="news__link" href={elem.link}>
            {elem.title}
          </a>
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