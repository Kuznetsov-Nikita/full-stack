import GroupTable from "./GroupTable";
import "./turnierTable.css"

const groups = [
    {id: 1, group: "A", countries: ["quatar", "equador", "senegal", "niderlanden"],
     scores: [["- : -", "- : -", "- : -"], ["- : -", "- : -", "- : -"], ["- : -", "- : -", "- : -"], ["- : -", "- : -", "- : -"]]},

    {id: 2, group: "B", countries: ["england", "iran", "usa", "wales"],
     scores: [["- : -", "- : -", "- : -"], ["- : -", "- : -", "- : -"], ["- : -", "- : -", "- : -"], ["- : -", "- : -", "- : -"]]},

    {id: 3, group: "C", countries: ["argentina", "saudi_arabia", "mexico", "poland"],
     scores: [["- : -", "- : -", "- : -"], ["- : -", "- : -", "- : -"], ["- : -", "- : -", "- : -"], ["- : -", "- : -", "- : -"]]},

    {id: 4, group: "D", countries: ["france", "australia", "denmark", "tunis"],
     scores: [["- : -", "- : -", "- : -"], ["- : -", "- : -", "- : -"], ["- : -", "- : -", "- : -"], ["- : -", "- : -", "- : -"]]},

    {id: 5, group: "E", countries: ["spain", "costa_rika", "germany", "japan"],
     scores: [["- : -", "- : -", "- : -"], ["- : -", "- : -", "- : -"], ["- : -", "- : -", "- : -"], ["- : -", "- : -", "- : -"]]},

    {id: 6, group: "F", countries: ["belgium", "canada", "marocco", "chroatia"],
     scores: [["- : -", "- : -", "- : -"], ["- : -", "- : -", "- : -"], ["- : -", "- : -", "- : -"], ["- : -", "- : -", "- : -"]]},

    {id: 7, group: "G", countries: ["brazil", "serbien", "shwitzerland", "kamerun"],
     scores: [["- : -", "- : -", "- : -"], ["- : -", "- : -", "- : -"], ["- : -", "- : -", "- : -"], ["- : -", "- : -", "- : -"]]},

    {id: 8, group: "H", countries: ["portugalien", "gana", "urugwai", "south_corea"],
     scores: [["- : -", "- : -", "- : -"], ["- : -", "- : -", "- : -"], ["- : -", "- : -", "- : -"], ["- : -", "- : -", "- : -"]]},
]

function TurnierTable() {
    return (
        <section className="TurnierTables">
            {groups.map(elem => <GroupTable key={elem.id}
                                            id={elem.id}
                                            group={elem.group}
                                            countries={elem.countries}
                                            scores={elem.scores}/>)}
        </section>
    );
}

export default TurnierTable;