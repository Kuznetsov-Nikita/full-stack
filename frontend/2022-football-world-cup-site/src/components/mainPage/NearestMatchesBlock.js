import NearestMatch from "./NearestMatch";

function NearestMatchesBlock(props) {
    const {nearestMatches} = props
    return (
        <sections className="NearestMatches">
            {nearestMatches.map(elem => <NearestMatch key={elem.id}
                                                      id={elem.id}
                                                      data={elem.date_text}
                                                      time={elem.time_text}
                                                      country1={elem.country1}
                                                      country2={elem.country2}
                                                      country1Code={elem.country1code}
                                                      country2Code={elem.country2code}
                                                      score={elem.country1goals + ' : ' + elem.country2goals}/>)}
        </sections>
    );
}

export default NearestMatchesBlock;