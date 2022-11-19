import "./header.css"

function Header() {
    return(
        <header>
            <p><a href="/" className="HomeButton">FIFA World Cup 2022</a></p>
            <nav className="Menu">
                <a href="/tournier-table" className="MenuButton">Турнирная таблица</a>
                <a href="/stadiums" className="MenuButton">Стадионы</a>
                <a href="/commands" className="MenuButton">Команды</a>
                <a href="/predictions" className="MenuButton">Прогнозы</a>
            </nav>
            <nav className="LoginButton">
                <a href="/login"><img className="LoginImg" src="/login.png" alt=""/></a>
            </nav>
        </header>
    )
}

export default Header;