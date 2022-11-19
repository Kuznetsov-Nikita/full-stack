import NearestMatchesBlock from "./NearestMatchesBlock";
import NewsBlock from "./NewsBlock";
import "./mainPage.css"

function MainPage() {
    return (
        <main>
            <NearestMatchesBlock className="NearestMatchesBlock"/>
            <NewsBlock/>
        </main>
    );
}

export default MainPage;