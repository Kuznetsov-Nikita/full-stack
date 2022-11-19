import "./login.css"

function Login() {
    return (
        <section className="LoginForm">
            <form>
                <label>Введите логин:<br/></label>
                <input type="text"/>
                <br/>
                <br/>
                <label>Введите пароль:<br/></label>
                <input type="password"/>
                <br/>
                <br/>
                <button>Войти</button>
                <button>Зарегестрироваться</button>
            </form>
        </section>
    );
}

export default Login;