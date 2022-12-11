import GroupTable from "./GroupTable";
import GroupScoresTable from "./GroupScoresTable";
import PlayOffTable from "./PlayOffTable";
import "./turnierTable.css"

const groups = [
    {id: 1, group: "A", countries: ["quatar", "equador", "senegal", "niderlanden"],
     scores: [["0 : 2", "1 : 3", "0 : 2"], ["2 : 0", "1 : 2", "1 : 1"], ["3 : 1", "2 : 1", "0 : 2"], ["2 : 0", "1 : 1", "2 : 0"]]},

    {id: 2, group: "B", countries: ["england", "iran", "usa", "wales"],
     scores: [["6 : 2", "0 : 0", "3 : 0"], ["2 : 6", "0 : 1", "2 : 0"], ["0 : 0", "1 : 0", "1 : 1"], ["0 : 3", "0 : 2", "1 : 1"]]},

    {id: 3, group: "C", countries: ["argentina", "saudi_arabia", "mexico", "poland"],
     scores: [["1 : 2", "2 : 0", "2 : 0"], ["2 : 1", "1 : 2", "0 : 2"], ["0 : 2", "2 : 1", "0 : 0"], ["0 : 2", "2 : 0", "0 : 0"]]},

    {id: 4, group: "D", countries: ["france", "australia", "denmark", "tunis"],
     scores: [["4 : 1", "2 : 1", "0 : 1"], ["1 : 4", "1 : 0", "1 : 0"], ["1 : 2", "0 : 1", "0 : 0"], ["1 : 0", "0 : 1", "0 : 0"]]},

    {id: 5, group: "E", countries: ["spain", "costa_rika", "germany", "japan"],
     scores: [["7 : 0", "1 : 1", "1 : 2"], ["0 : 7", "2 : 4", "1 : 0"], ["1 : 1", "4 : 2", "1 : 2"], ["2 : 1", "0 : 1", "2 : 1"]]},

    {id: 6, group: "F", countries: ["belgium", "canada", "marocco", "chroatia"],
     scores: [["1 : 0", "0 : 2", "0 : 0"], ["0 : 1", "1 : 2", "1 : 4"], ["2 : 0", "2 : 1", "0 : 0"], ["0 : 0", "4 : 1", "0 : 0"]]},

    {id: 7, group: "G", countries: ["brazil", "serbien", "shwitzerland", "kamerun"],
     scores: [["2 : 0", "1 : 0", "0 : 1"], ["0 : 2", "2 : 3", "3 : 3"], ["0 : 1", "3 : 2", "1 : 0"], ["1 : 0", "3 : 3", "0 : 1"]]},

    {id: 8, group: "H", countries: ["portugalien", "gana", "urugwai", "south_corea"],
     scores: [["3 : 2", "2 : 0", "1 : 2"], ["2 : 3", "0 : 2", "3 : 2"], ["0 : 2", "2 : 0", "0 : 0"], ["2 : 1", "2 : 3", "0 : 0"]]},
]

const scores = [
    {id: 1, group: "A", countries_codes: ["niderlanden", "senegal", "equador", "quatar"], countries_names: ["Нидерланды", "Сенегал", "Эквадор", "Катар"], scores: ["7", "6", "4", "0"], diff: ["5-1", "5-4", "4-3", "1-7"]},
    {id: 2, group: "B", countries_codes: ["england", "usa", "iran", "wales"], countries_names: ["Англия", "США", "Иран", "Уэльс"], scores: ["7", "5", "3", "1"], diff: ["9-2", "2-1", "4-7", "1-6"]},
    {id: 3, group: "C", countries_codes: ["argentina", "poland", "mexico", "saudi_arabia"], countries_names: ["Аргентина", "Польша", "Мексика", "Саудовская Аравия"], scores: ["6", "4", "4", "3"], diff: ["5-2", "2-2", "2-3", "3-5"]},
    {id: 4, group: "D", countries_codes: ["france", "australia", "tunis", "denmark"], countries_names: ["Франция", "Австралия", "Тунис", "Дания"], scores: ["6", "6", "4", "1"], diff: ["6-3", "3-4", "1-1", "1-3"]},
    {id: 5, group: "E", countries_codes: ["japan", "spain", "germany", "costa_rika"], countries_names: ["Япония", "Испания", "Германия", "Коста-Рика"], scores: ["6", "4", "4", "3"], diff: ["4-3", "9-3", "6-5", "3-11"]},
    {id: 6, group: "F", countries_codes: ["marocco", "chroatia", "belgium", "canada"], countries_names: ["Марокко", "Хорватия", "Бельгия", "Канада"], scores: ["7", "5", "4", "0"], diff: ["4-1", "4-1", "1-2", "2-7"]},
    {id: 7, group: "G", countries_codes: ["brazil", "shwitzerland", "kamerun", "serbien"], countries_names: ["Бразилия", "Швейцария", "Камерун", "Сербия"], scores: ["6", "6", "4", "1"], diff: ["3-1", "4-3", "4-4", "5-8"]},
    {id: 8, group: "H", countries_codes: ["portugalien", "south_corea", "urugwai", "gana"], countries_names: ["Португалия", "Южная Корея", "Уругвай", "Гана"], scores: ["6", "4", "4", "3"], diff: ["6-4", "4-4", "2-2", "5-7"]},
]

function TurnierTable() {
    return (
        <div>
            <section className="TurnierTables">
                {groups.map(elem => <GroupTable key={elem.id}
                                                id={elem.id}
                                                group={elem.group}
                                                countries={elem.countries}
                                                scores={elem.scores}/>)}
            </section>
            <section className="GroupScoresTables">
                {scores.map(elem => <GroupScoresTable key={elem.id}
                                                     id={elem.id}
                                                     group={elem.group}
                                                     countries_codes={elem.countries_codes}
                                                     countries_names={elem.countries_names}
                                                     scores={elem.scores}
                                                     diffs={elem.diff}/>)}
            </section>
            <section className="PlayOff">
                <PlayOffTable/>
            </section>
        </div>
    );
}

export default TurnierTable;