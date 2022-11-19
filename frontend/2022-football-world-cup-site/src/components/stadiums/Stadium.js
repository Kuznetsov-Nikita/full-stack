function Stadium(props) {
    const {id, name, city, capacity, image} = props;

    return (
        <article className="Stadium">
            <h2>{name}</h2>
            <img className="StadiumImage" src={image}/>
            <p>Город: {city}</p>
            <p>Вместимость: {capacity}</p>
        </article>
    );
}

export default Stadium;