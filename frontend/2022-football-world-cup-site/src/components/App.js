import "./app.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Header from "./header/Header";
import MainPage from "./mainPage/MainPage";
import TurnierTable from "./turnierTable/TurnierTable";
import Stadiums from "./stadiums/Stadiums";
import Commands from "./commands/Commands";
import Predictions from "./predictions/Predictions";
import Login from "./login/Login";
import {useState, useEffect} from 'react';

const commands = [
  {id: 1, country: "Австралия", image: "/teams/australia_team.jpg", info: "Информация о команде"},
  {id: 2, country: "Англия", image: "", info: "Информация о команде"},
  {id: 3, country: "Аргентина", image: "", info: "Информация о команде"},
  {id: 4, country: "Бельгия", image: "", info: "Информация о команде"},
  {id: 5, country: "Бразилия", image: "", info: "Информация о команде"},
  {id: 6, country: "Гана", image: "", info: "Информация о команде"},
  {id: 7, country: "Германия", image: "", info: "Информация о команде"},
  {id: 8, country: "Дания", image: "", info: "Информация о команде"},
  {id: 9, country: "Иран", image: "", info: "Информация о команде"},
  {id: 10, country: "Испания", image: "", info: "Информация о команде"},
  {id: 11, country: "Камерун", image: "", info: "Информация о команде"},
  {id: 12, country: "Канада", image: "", info: "Информация о команде"},
  {id: 13, country: "Катар", image: "", info: "Информация о команде"},
  {id: 14, country: "Коста-Рика", image: "", info: "Информация о команде"},
  {id: 15, country: "Марокко", image: "", info: "Информация о команде"},
  {id: 16, country: "Мексика", image: "", info: "Информация о команде"},
  {id: 17, country: "Нидерланды", image: "", info: "Информация о команде"},
  {id: 18, country: "Польша", image: "", info: "Информация о команде"},
  {id: 19, country: "Португалия", image: "", info: "Информация о команде"},
  {id: 20, country: "Республика Корея", image: "", info: "Информация о команде"},
  {id: 21, country: "Саудовская Аравия", image: "", info: "Информация о команде"},
  {id: 22, country: "Сенегал", image: "", info: "Информация о команде"},
  {id: 23, country: "Сербия", image: "", info: "Информация о команде"},
  {id: 24, country: "США", image: "", info: "Информация о команде"},
  {id: 25, country: "Тунис", image: "", info: "Информация о команде"},
  {id: 26, country: "Уругвай", image: "", info: "Информация о команде"},
  {id: 27, country: "Уэльс", image: "", info: "Информация о команде"},
  {id: 28, country: "Франция", image: "", info: "Информация о команде"},
  {id: 29, country: "Хорватия", image: "", info: "Информация о команде"},
  {id: 30, country: "Швейцария", image: "", info: "Информация о команде"},
  {id: 31, country: "Эквадор", image: "", info: "Информация о команде"},
  {id: 32, country: "Япония", image: "", info: "Информация о команде"},
]

const startCommand = {id: 1, country: "Австралия", image: "/teams/australia_team.jpg", info: "Информация о команде"}

const startUsers = [
  {id: 0, nickname: "", predictionsCnt: 0, predictions: [], score: 0},
]

const startUser = {id: 0, nickname: "", predictionsCnt: 0, predictions: [], score: 0}

function App() {
  const [command, setCommand] = useState(startCommand)

  useEffect(() => {
      const row = localStorage.getItem('command')
      setCommand(JSON.parse(row))
  }, [])
  
  useEffect(() => {
      localStorage.setItem('command', JSON.stringify(command))
  }, [command])

  const changeCommand = (id) => {
    setCommand(commands[id - 1])
  }

  const [user, setUser] = useState(startUser)

  useEffect(() => {
    const row = localStorage.getItem('user')
    setUser(JSON.parse(row))
  }, [])

  useEffect(() => {
    localStorage.getItem('user', JSON.stringify(user))
  }, [user])

  const [users, setUsers] = useState(startUsers)

  useEffect(() => {
    const row = localStorage.getItem('users')
    setUsers(JSON.parse(row))
  }, [])

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])

  return (
    <div className="App">
      <Header className="Header"/>

      <Router>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/tournier-table' element={<TurnierTable/>}/>
        <Route path='/stadiums' element={<Stadiums/>}/>
        <Route path='/commands' element={<Commands command={command} commands={commands} changeCommand={changeCommand}/>}/>
        <Route path='/predictions' element={<Predictions user={user} users={users}/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
