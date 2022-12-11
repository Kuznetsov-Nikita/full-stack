import NearestMatchesBlock from "./NearestMatchesBlock";
import NewsBlock from "./NewsBlock";
import "./mainPage.css"

function MainPage(props) {
    const {nearestMatches, news} = props
    return (
        <main>
            <NearestMatchesBlock className="NearestMatchesBlock" nearestMatches={nearestMatches}/>
            <NewsBlock news={news}/>
        </main>
    );
}

export default MainPage;