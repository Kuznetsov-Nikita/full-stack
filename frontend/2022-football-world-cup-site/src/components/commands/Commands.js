import "./commands.css"

function Commands(props) {
    const {command, commands, changeCommand} = props

    return (
        <div className="CommandsWrapper">
            <aside className="CommandsMenu">
                {commands.map(elem => <h3 key={elem.id} onClick={() => changeCommand(elem.id)}>{elem.country}</h3>)}
            </aside>
            <article className="CommandInfo">
                <h1 className="CommandCountry">{command.country}</h1>
                <img className="CommandImage" src={command.image}/>
                <p>{command.info}</p>
            </article>
        </div>
    );
}

export default Commands;