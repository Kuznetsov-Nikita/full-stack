import "./predictions.css"

function Predictions(props) {
    const {user, users} = props

    return (
        <section className="PredictionsWrapper">
            <section className="PredictionsElement">
                <h2 className="PredictionsTitle">Мой профиль</h2>
                <p>Никнейм: {user.nickname}</p>
                <p>Сделано прогнозов: {user.predictionsCnt}</p>
                <p>Набрано очков: {user.score}</p>
            </section>
            <section className="PredictionsElement">
                <h2 className="PredictionsTitle">Мои прогнозы</h2>
                <section className="PredictionsList">
                    {user.predictions.map(elem => <p>{elem.country1} {elem.country1Goals}:{elem.country2Goals} {elem.country2}</p>)}
                </section>
            </section>
            <section className="PredictionsElement">
                <h2 className="PredictionsTitle">Рейтинг</h2>
                <table className="RaitingTable">
                    <tr className="RaitingTableRow"><th>Никнейм</th><th>Очки</th></tr>
                    {users.sort((a, b) => b.score - a.score).slice(0, 10).map(elem => (elem.id != 0) ? <tr className="RaitingTableRow"><td>{elem.nickname}</td><td>{elem.score}</td></tr> : null)}
                </table>
            </section>
            <section className="PredictionsElement">
                <h2 className="PredictionsTitle">Сделать прогноз</h2>
                <form>
                    <label>
                        Выберете матч:&emsp;
                        <select name="match">
                            <option value="quatar-equador">Катар - Эквадор</option>
                            <option value="england-iran">Англия - Иран</option>
                            <option value="senegal-niderlanden">Сенегал - Нидерланды</option>
                            <option value="usa-wales">США - Уэльс</option>
                        </select>
                        &emsp;
                    </label>
                    <label>
                        Голы первой команды:&emsp;
                        <select name="country1Goals">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                        </select>
                        &emsp;
                    </label>
                    <label>
                        Голы второй команды:&emsp;
                        <select name="country2Goals">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                        </select>
                    </label>
                    &emsp;
                    <input type="submit" value="Отправить" />
                </form>
            </section>
        </section>
    );
}

export default Predictions;