import NearestMatch from "./NearestMatch";

const nearestMatches = [
    {id: 1, data: "20 ноября", time: "19:00", country1: "Катар", country2: "Эквадор", country1Code: "quatar", country2Code: "equador", score: "- : -"},
    {id: 2, data: "21 ноября", time: "16:00", country1: "Англия", country2: "Иран", country1Code: "england", country2Code: "iran", score: "- : -"},
    {id: 3, data: "21 ноября", time: "19:00", country1: "Сенегал", country2: "Нидерланды", country1Code: "senegal", country2Code: "niderlanden", score: "- : -"},
]

function NearestMatchesBlock() {
    return (
        <sections className="NearestMatches">
            {nearestMatches.map(elem => <NearestMatch key={elem.id}
                                                      id={elem.id}
                                                      data={elem.data}
                                                      time={elem.time}
                                                      country1={elem.country1}
                                                      country2={elem.country2}
                                                      country1Code={elem.country1Code}
                                                      country2Code={elem.country2Code}
                                                      score={elem.score}/>)}
        </sections>
    );
}

export default NearestMatchesBlock;