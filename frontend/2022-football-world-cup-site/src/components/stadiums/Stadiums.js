import "./stadiums.css"
import Stadium from "./Stadium";

function Stadiums(props) {
    const {stadiums} = props
    return (
        <section className="StadiumsWrapper">
            {stadiums.map(elem => <Stadium key={elem.id}
                                           id={elem.id}
                                           name={elem.name}
                                           city={elem.city}
                                           capacity={elem.capacity}
                                           image={elem.image}/>)}
        </section>
    );
}

export default Stadiums;