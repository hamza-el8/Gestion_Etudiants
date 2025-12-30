import React from "react";
import { MdLogout } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { TbBackground } from "react-icons/tb";
import Footer from "./Footer";



function Header() {

    const navigate = useNavigate()

    function LogineOut() {
        navigate('/')
    }
    return (
        <>

            <header className="app-header">
                <div className="logo">
                    <h3><FaUserGraduate size={20} />Gestion des Étudiants</h3>
                </div>

                <nav className="nav-menu">
                    <ul>
                        <li><Link to='/list'>Liste des Étudiants</Link></li>
                    </ul>
                </nav>

                <div className="logout">
                    <MdLogout size={22} />
                    <span onClick={LogineOut}>Déconnexion</span>
                </div>
            </header>

            <main className="dashboard">
                <section className="card welcome-card">
                    <div className="icon-circle">
                        <FiUser size={22} />
                    </div>
                    <div>
                        <h2>Bienvenue !</h2>
                        <p>Vous êtes connecté avec succès à votre espace personnel .</p>
                    </div>
                </section>

                <section className="card success-card">
                    <div className="icon-circle blue">
                        <FiCheckCircle size={24} />
                    </div>
                    <div>
                        <h2>Authentification réussie</h2>
                        <p>
                            Votre connexion a été vérifiée avec succès. Vous avez maintenant accès à
                            toutes les fonctionnalités .
                        </p>
                    </div>
                </section>
            </main>

            <Footer />      

        </> 
    );
}

export default Header;