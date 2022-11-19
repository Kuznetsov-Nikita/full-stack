function NearestMatch(props) {
    const {id, data, time, country1, country2, country1Code, country2Code, score} = props;
    return (
        <div className="NearestMatch">
            <div className="Country">
                <img className="Flag" src={"/flags/" + country1Code + ".png"}/>
                <p className="CountryName">{country1}</p>
            </div>
            <p className="Score">{data}<br/>{time}<br/>{score}</p>
            <div className="Country">
                <img className="Flag" src={"/flags/" + country2Code + ".png"}/>
                <p className="CountryName">{country2}</p>
            </div>
        </div>
    )
}

export default NearestMatch;