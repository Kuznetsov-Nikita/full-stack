import "./predictions.css"
import {useContext, useEffect, useState} from "react"
import AuthContext from "../../context/AuthContext"

const allMatches = [
    {country1: "Катар", country2: "Эквадор"},
    {country1: "Англия", country2: "Иран"},
    {country1: "Сенегал", country2: "Нидерланды"},
    {country1: "США", country2: "Уэльс"},
    {country1: "Аргентина", country2: "Саудовская Аравия"},
    {country1: "Дания", country2: "Тунис"},
    {country1: "Мексика", country2: "Польша"},
    {country1: "Франция", country2: "Австралия"},
    {country1: "Марокко", country2: "Хорватия"},
    {country1: "Германия", country2: "Япония"},
    {country1: "Испания", country2: "Коста-Рика"},
    {country1: "Бельгия", country2: "Канада"},
    {country1: "Щвейцария", country2: "Камерун"},
    {country1: "Уругвай", country2: "Южная Корея"},
    {country1: "Португалия", country2: "Гана"},
    {country1: "Бразилия", country2: "Сербия"},
    {country1: "Уэльс", country2: "Иран"},
    {country1: "Катар", country2: "Сенегал"},
    {country1: "Нидерланды", country2: "Эквадор"},
    {country1: "Англия", country2: "США"},
    {country1: "Тунис", country2: "Автсралия"},
    {country1: "Польша", country2: "Саудовская Аравия"},
    {country1: "Франция", country2: "Дания"},
    {country1: "Аргентина", country2: "Мексика"},
    {country1: "Япония", country2: "Коста-Рика"},
    {country1: "Бельгия", country2: "Марокко"},
    {country1: "Хорватия", country2: "Канада"},
    {country1: "Испания", country2: "Германия"},
    {country1: "Камерун", country2: "Сербия"},
    {country1: "Южная Корея", country2: "Гана"},
    {country1: "Бразилия", country2: "Швейцария"},
    {country1: "Португалия", country2: "Уругвай"},
    {country1: "Эквадор", country2: "Сенегал"},
    {country1: "Нидерланды", country2: "Катар"},
    {country1: "Иран", country2: "США"},
    {country1: "Уэльс", country2: "Англия"},
    {country1: "Австралия", country2: "Дания"},
    {country1: "Тунис", country2: "Франция"},
    {country1: "Саудовская Аравия", country2: "Мексика"},
    {country1: "Польша", country2: "Аргентина"},
    {country1: "Канада", country2: "Марокко"},
    {country1: "Хорватия", country2: "Бельгия"},
    {country1: "Коста-Рика", country2: "Германия"},
    {country1: "Япония", country2: "Испания"},
    {country1: "Гана", country2: "Уругвай"},
    {country1: "Южная Корея", country2: "Португалия"},
    {country1: "Сербия", country2: "Швейцария"},
    {country1: "Камерун", country2: "Бразилия"},
    {country1: "Нидерланды", country2: "США"},
    {country1: "Аргентина", country2: "Австралия"},
    {country1: "Франция", country2: "Польша"},
    {country1: "Англия", country2: "Сенегал"},
    {country1: "Япония", country2: "Хорватия"},
    {country1: "Бразилия", country2: "Южная Корея"},
    {country1: "Марокко", country2: "Испания"},
    {country1: "Португалия", country2: "Швейцария"},
    {country1: "Хорватия", country2: "Бразилия"},
    {country1: "Нидерланды", country2: "Аргентина"},
    {country1: "Марокко", country2: "Португалия"},
    {country1: "Англия", country2: "Франция"},
    {country1: "Аргентина", country2: "Хорватия"},
    {country1: "Франция", country2: "Марокко"},
    {country1: "-", country2: "-"},
    {country1: "-", country2: "-"},
]

function Predictions(props) {
    const {user_, users, matches} = props
    let [profileData, setProfileData] = useState([])
    let [predictionsData, setPredictionsData] = useState([])
    let {authTokens, logoutUser, user} = useContext(AuthContext)
    useEffect(()=>{
        getProfileData()
    },[user])

    useEffect(()=>{
        getPredictionsData()
    },[user])

    const getProfileData = async() => {
        let res = await fetch('http://127.0.0.1:8000/api/get_my_profile/', {
            headers: {
                'Authorization': `Bearer ${authTokens.access}`
            }
        })

        let fetchData = await res.json()

        if(res.status === 200){
            setProfileData(fetchData[0])
        } else {
            logoutUser()
        }
    }

    const getPredictionsData = async() => {
        let res = await fetch('http://127.0.0.1:8000/api/get_my_predictions/', {
            headers: {
                'Authorization': `Bearer ${authTokens.access}`
            }
        })

        let fetchData = await res.json()

        if(res.status === 200){
            setPredictionsData(fetchData)
        } else {
            logoutUser()
        }
    }

    const postPrediction = async (e) => {
        e.preventDefault()
        let res = await fetch('http://127.0.0.1:8000/api/create_prediction/',{
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${authTokens.access}`,
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({user: profileData.id, game: e.target.match.value, country1goals: e.target.country1Goals.value, country2goals: e.target.country2Goals.value})
        })
        let data = await res.json()
    }
    
    return (
        <section className="PredictionsWrapper">
            <section className="PredictionsElement">
                <h2 className="PredictionsTitle">Мой профиль</h2>
                <p>Никнейм: {(profileData) ? profileData.username : ""}</p>
                <p>Сделано прогнозов: {(profileData) ? profileData.predictions_cnt : ""}</p>
                <p>Набрано очков: {(profileData) ? profileData.score : ""}</p>
            </section>
            <section className="PredictionsElement">
                <h2 className="PredictionsTitle">Мои прогнозы</h2>
                <section className="PredictionsList">
                    {(predictionsData) ? predictionsData.map(elem => <p>{allMatches[elem.game - 1].country1} {elem.country1goals}:{elem.country2goals} {allMatches[elem.game - 1].country2}</p>) : ""}
                </section>
            </section>
            <section className="PredictionsElement">
                <h2 className="PredictionsTitle">Рейтинг</h2>
                <table className="RaitingTable">
                    <tr className="RaitingTableRow"><th>Никнейм</th><th>Очки</th></tr>
                    {users.sort((a, b) => b.score - a.score).slice(0, 10).map(elem => (elem.id != 0) ? <tr className="RaitingTableRow"><td>{elem.username}</td><td>{elem.score}</td></tr> : null)}
                </table>
            </section>
            <section className="PredictionsElement">
                <h2 className="PredictionsTitle">Сделать прогноз</h2>
                <form onSubmit={postPrediction}>
                    <label>
                        Выберете матч:&emsp;
                        <select name="match">
                            {matches.map(elem => <option value={elem.id}>{elem.country1} - {elem.country2}</option>)}
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