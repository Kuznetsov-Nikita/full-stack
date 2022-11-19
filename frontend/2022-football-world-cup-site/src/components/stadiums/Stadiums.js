import "./stadiums.css"
import Stadium from "./Stadium";

const stadiums = [
    {id: 1, name: "Стадион 974", city: "Доха", capacity: "40000", image: "/stadiums/stadium1.jpg"},
    {id: 2, name: "Эль-Джануб", city: "Эль-Вакра", capacity: "40000", image: "/stadiums/stadium2.jpg"},
    {id: 3, name: "Эдьюкейшн-Сити", city: "Эр-Райян", capacity: "45350", image: "/stadiums/stadium3.jpg"},
    {id: 4, name: "Халифа", city: "Эр-Райян", capacity: "45416", image: "/stadiums/stadium4.jpg"},
]

function Stadiums() {
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