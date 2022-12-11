import { createContext, useState, useEffect } from "react"
import jwt_decode from "jwt-decode"

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    let [loading, setLoading] = useState(true)


    const loginUser = async (e) => {
        e.preventDefault()
        let res = await fetch('http://127.0.0.1:8000/auth_api/token',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({username: e.target.username.value, password: e.target.password.value})
        })

        let data = await res.json()

        if (res.status === 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
        } else {
            console.log('error')
        }

        if (loading) {
            setLoading(false)
        }
    }

    const logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
    }

    let updateToken = async ()=> {
        let res = await fetch('http://127.0.0.1:8000/auth_api/refresh',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({refresh: authTokens.refresh})
        })

        let data = await res.json()

        if (res.status === 200) {
            let authTokensTmp = authTokens
            authTokensTmp.access = data.access
            setAuthTokens(authTokensTmp)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(authTokensTmp))
        } else {
            logoutUser()
        }
    }

    let contextData = {
        user: user,
        authTokens: authTokens,
        loginUser: loginUser,
        logoutUser: logoutUser,
    }

    useEffect(()=> {
        if (loading) {
            updateToken()
        }
    
        let fourMinutes = 1000 * 60 * 4

        let interval =  setInterval(()=> {
            if (authTokens) {
                updateToken()
            }
        }, fourMinutes)
        return ()=> clearInterval(interval)

    }, [authTokens, loading])


    return (
    <AuthContext.Provider value={contextData} >
        {children}
    </AuthContext.Provider>
    )
}

export default AuthContext;