function News(props) {
    const {id, title, image, text} = props;
    return (
        <article className="News">
            <h3 className="NewsTitle">{title}</h3>
            <img className="NewsImg" src={image}/>
            <p className="NewsText">{text}</p>
        </article>
    )
}

export default News;