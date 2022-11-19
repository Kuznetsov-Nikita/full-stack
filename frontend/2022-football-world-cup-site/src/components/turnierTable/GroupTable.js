function GroupTable(props) {
    const {id, group, countries, scores} = props;

    return (
        <table className="GroupTable">
            <tr><td className="GroupCell">{group}</td><td className="FlagCell"><img src={"/flags/" + countries[0] + ".png"}/></td><td className="FlagCell"><img src={"/flags/" + countries[1] + ".png"}/></td><td className="FlagCell"><img src={"/flags/" + countries[2] + ".png"}/></td><td className="FlagCell"><img src={"/flags/" + countries[3] + ".png"}/></td></tr>
            <tr><td className="FlagCell"><img src={"/flags/" + countries[0] + ".png"}/></td><td className="BlockedCell"></td><td>{scores[0][0]}</td><td>{scores[0][1]}</td><td>{scores[0][2]}</td></tr>
            <tr><td className="FlagCell"><img src={"/flags/" + countries[1] + ".png"}/></td><td>{scores[1][0]}</td><td className="BlockedCell"></td><td>{scores[1][1]}</td><td>{scores[1][2]}</td></tr>
            <tr><td className="FlagCell"><img src={"/flags/" + countries[2] + ".png"}/></td><td>{scores[2][0]}</td><td>{scores[2][1]}</td><td className="BlockedCell"></td><td>{scores[2][2]}</td></tr>
            <tr><td className="FlagCell"><img src={"/flags/" + countries[3] + ".png"}/></td><td>{scores[3][0]}</td><td>{scores[3][1]}</td><td>{scores[3][2]}</td><td className="BlockedCell"></td></tr>
        </table>
    );
}

export default GroupTable;