function GroupScoresTable(props) {
    const {id, group, countries_codes, countries_names, scores, diffs} = props;

    return (
        <div>
        <h2>Группа {group}</h2>
        <table className="GroupScoresTable">
            <tr className="WinnerRow"><td className="FlagCell" width="100px"><img src={"/flags/" + countries_codes[0] + ".png"}/></td><td width="200px">{countries_names[0]}</td><td width="50px">{scores[0]}</td><td width="50px">{diffs[0]}</td></tr>
            <tr className="WinnerRow"><td className="FlagCell"><img src={"/flags/" + countries_codes[1] + ".png"}/></td><td>{countries_names[1]}</td><td>{scores[1]}</td><td>{diffs[1]}</td></tr>
            <tr><td className="FlagCell"><img src={"/flags/" + countries_codes[2] + ".png"}/></td><td>{countries_names[2]}</td><td>{scores[2]}</td><td>{diffs[2]}</td></tr>
            <tr><td className="FlagCell"><img src={"/flags/" + countries_codes[3] + ".png"}/></td><td>{countries_names[3]}</td><td>{scores[3]}</td><td>{diffs[3]}</td></tr>
        </table>
        </div>
    );
}

export default GroupScoresTable;