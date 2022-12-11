import News from "./News";

function NewsBlock(props) {
    const {news} = props
    return (
        <section>
            <h1 className="NewsBlockTitle">Новости</h1>
            <div className="NewsBlock">
                {news.map(elem => <News key={elem.id}
                                    id={elem.id}
                                    title={elem.title}
                                    image={elem.image}
                                    text={elem.text}/>)}
            </div>
        </section>
    );
}

export default NewsBlock;