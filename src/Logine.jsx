


import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Logine() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setErrror] = useState('')
    const navigate = useNavigate()

    function Envoyer(e) {
        e.preventDefault()
    }

    function Logine() {
        if ((email === 'elboudalihamza@gmail.com' && password === 'hamza@123') ||
            (email === 'boudali@gmail.com' && password === '12345')) {
            setErrror('')
            navigate('/header')        
        } else {
            setErrror('Email ou mot de passe incorrect')
        }

    }


    return (
        <div className="auth-wrapper">
            <form className="auth-card" onSubmit={Envoyer}>
                <h2>Authentification</h2>

                {error && <p className="auth-error">{error}</p>}

                <div className="form-group">
                    <label style={{ fontWeight: 'bold' }}>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Entrer email..."
                    />
                </div>

                <div className="form-group">
                    <label style={{ fontWeight: 'bold' }}>Mot de passe</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Entrer password..."
                    />
                </div>

                <button type="button" onClick={Logine}>
                    Se connecter
                </button>
            </form>

        </div>
    );

}

export default Logine
