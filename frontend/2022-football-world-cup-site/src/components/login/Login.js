import "./login.css"
import AuthContext from '../../context/AuthContext'
import {useContext} from 'react'

function Login() {
    const {user, loginUser, logoutUser} = useContext(AuthContext)

    const registerUser = async (e) => {
        e.preventDefault()
        let res = await fetch('http://127.0.0.1:8000/api/create_profile/',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({username: e.target.username.value, email: e.target.email.value, password: e.target.password.value})
        })
    }

    return (
        <div>
            <section className="LoginForm" onSubmit={(user) ? logoutUser : loginUser}>
                <form>
                    <label>Введите логин:<br/></label>
                    <input name="username" type="text"/>
                    <br/>
                    <br/>
                    <label>Введите пароль:<br/></label>
                    <input name="password" type="password"/>
                    <br/>
                    <br/>
                    {(user) ? <button>Выйти</button> : <button>Войти</button>}
                </form>
            </section>

            <section className="RegisterForm" onSubmit={registerUser}>
                <form>
                    <label>Введите логин:<br/></label>
                    <input name="username" type="text"/>
                    <br/>
                    <br/>
                    <label>Введите почту:<br/></label>
                    <input name="email" type="text"/>
                    <br/>
                    <br/>
                    <label>Введите пароль:<br/></label>
                    <input name="password" type="password"/>
                    <br/>
                    <br/>
                    <button>Зарегистрироваться</button>
                </form>
            </section>
        </div>
    );
}

export default Login;