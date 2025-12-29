import React, { useState } from 'react';
import { FiArrowLeft } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ActionAjouter } from './Actions';

function Ajouter() {

    const [numero, setNumero] = useState(3)
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('');
    const [cin, setCin] = useState('');
    const [lieu_naissance, setLieuNaissance] = useState('');
    const [tel, setTel] = useState('');
    const [date_naissance, setDateNaissance] = useState('');
    const [genre, setGenre] = useState('');
    const [email, setEmail] = useState('');
    const [filiere, setFiliere] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch()


    function Envoyer(e) {
        e.preventDefault()
    }

    function AjouterEtudiant() {
        const etd = { numero: numero + 1, nom: nom, prenom: prenom, cin: cin, lieuNaissance: lieu_naissance, tel: tel, dateNaissance: date_naissance, genre: genre, email: email, filiere: filiere }
        dispatch(ActionAjouter(etd))
        navigate('/list')
    }

    function Annuler() {
        navigate('/list')
    }

    return (
        <div className="ajouter-container">

            <h2 className="title">Espace pour Ajouter un Étudiant</h2>



            <form action="" onSubmit={Envoyer}>
                <div>
                    <input type="text" placeholder='Entrez le nom' onChange={(e) => setNom(e.target.value)} />
                    <input type="text" placeholder='Entrez le prénom' onChange={(e) => setPrenom(e.target.value)} />
                </div>

                <div>
                    <input type="text" placeholder='Entrez le CIN' onChange={(e) => setCin(e.target.value)} />
                    <input type="text" placeholder='Entrez le lieu de naissance' onChange={(e) => setLieuNaissance(e.target.value)} />
                </div>

                <div>
                    <input type="number" placeholder='Entrez le numéro de téléphone' onChange={(e) => setTel(e.target.value)} />
                    <input type="date" onChange={(e) => setDateNaissance(e.target.value)} />
                </div>

                <select name="" id="" onChange={(e) => setGenre(e.target.value)}>
                    <option value="">Sélectionner le genre</option>
                    <option value="Homme">Homme</option>
                    <option value="Femme">Femme</option>
                </select>
                <div>

                    <input type="email" placeholder='Entrez l email' onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" placeholder='Entrez filiere' onChange={(e) => setFiliere(e.target.value)} />
                </div>

                <div>
                    <button onClick={Annuler}>Annuler</button>
                    <button onClick={AjouterEtudiant}>Ajouter</button>
                </div>

            </form>

            {/* <button className="retoure" onClick={() => navigate(-1)}>
                <FiArrowLeft /> Retour à la page d'acceuil
            </button> */}

        </div>
    );
}

export default Ajouter;
