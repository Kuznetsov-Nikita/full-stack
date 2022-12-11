import "./app.css";
import AuthContext, {AuthProvider} from "../context/AuthContext"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Header from "./header/Header";
import MainPage from "./mainPage/MainPage";
import TurnierTable from "./turnierTable/TurnierTable";
import Stadiums from "./stadiums/Stadiums";
import Commands from "./commands/Commands";
import Predictions from "./predictions/Predictions";
import Login from "./login/Login";
import {useState, useEffect} from 'react';

const baseUrl = "http://127.0.0.1:8000/"

const startUsers = [
  {id: 0, nickname: "", predictionsCnt: 0, predictions: [], score: 0},
]

const startUser = {id: 0, nickname: "", predictionsCnt: 0, predictions: [], score: 0}

function App() {
  const [nearestMatches, setNearestMatches] = useState([])
  useEffect(() => { 
    fetch(baseUrl + 'api/get_upcoming_matches/')
    .then(res => res.json())
    .then(data => {
      if (data.length == 0) {
        fetch(baseUrl + 'api/get_finished_matches/')
        .then(res => res.json())
        .then(data => setNearestMatches(data.slice(data.length - 3)))
      } else {
        setNearestMatches(data.slice(0, 3))
      }
    })
  }, [])

  const [upcomingMatches, setUpcomingMatches] = useState([])
  useEffect(() => { 
    fetch(baseUrl + 'api/get_upcoming_matches/')
    .then(res => res.json())
    .then(data => setUpcomingMatches(data))
  }, [])

  const [news, setNews] = useState([])
  useEffect(() => { 
    fetch(baseUrl + 'api/get_all_news/')
    .then(res => res.json())
    .then(data => setNews(data))
  }, [])

  const [stadiums, setStadiums] = useState([])
  useEffect(() => { 
    fetch(baseUrl + 'api/get_all_stadiums/')
    .then(res => res.json())
    .then(data => setStadiums(data))
  }, [])

  const [commands, setCommands] = useState([])
  useEffect(() => { 
    fetch(baseUrl + 'api/get_all_commands/')
    .then(res => res.json())
    .then(data => setCommands(data))
  }, [])

  const [command, setCommand] = useState({})
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
    fetch(baseUrl + 'api/get_profiles/')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  useEffect(() => {
    const row = localStorage.getItem('users')
    setUsers(JSON.parse(row))
  }, [])

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])

  return (
    <AuthProvider>
      <div className="App">
        <Header className="Header"/>

        <Router>
        <Routes>
          <Route path='/' element={<MainPage nearestMatches={nearestMatches} news={news}/>}/>
          <Route path='/tournier-table' element={<TurnierTable/>}/>
          <Route path='/stadiums' element={<Stadiums stadiums={stadiums}/>}/>
          <Route path='/commands' element={<Commands command={command} commands={commands} changeCommand={changeCommand}/>}/>
          <Route path='/predictions' element={<Predictions user={user} users={users} matches={upcomingMatches}/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
