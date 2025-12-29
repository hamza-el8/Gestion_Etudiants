

import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ActionModifier } from './Actions';


function Modifier() {

    const { num } = useParams()
    const etde = useSelector(state => state.find((e) => e.numero === +num))

    const [nom, setNom] = useState(etde.nom)
    const [prenom, setPrenom] = useState(etde.prenom)
    const [email, setEmail] = useState(etde.email)
    const [genre, setGenre] = useState(etde.genre)
    const [filiere, setFiliere] = useState(etde.filiere)
    const [date_naissance, setDate_naissance] = useState(etde.date_naissance)
    const [tel, setTel] = useState(etde.tel)
    const [lieu_naissance, setLieu_naissance] = useState(etde.lieu_naissance)
    const [cin, setCin] = useState(etde.cin)

    const dispatch = useDispatch()
    const navigate = useNavigate()



    function envoyer(e) {
        e.preventDefault()
    }

    function ModifierEtudiant() {
        const et = { numero: +num, nom: nom, prenom: prenom, cin: cin, lieuNaissance: lieu_naissance, tel: tel, dateNaissance: date_naissance, genre: genre, email: email, filiere: filiere }
        dispatch(ActionModifier(et))
        navigate('/list')

    }

    function Annuler(){
        navigate('/list')
    }


    return (
        <div>

            <form action="" onSubmit={envoyer} className="modifier-form">
                <h4>Modifier L'etudiant</h4>
                <div>
                    <input type="text" value={nom} placeholder='Entrez le nom' onChange={(e) => setNom(e.target.value)} />
                    <input type="text" value={prenom} placeholder='Entrez le prénom' onChange={(e) => setPrenom(e.target.value)} />
                </div>

                <div>
                    <input type="text" value={cin} placeholder='Entrez le CIN' onChange={(e) => setCin(e.target.value)} />
                    <input type="text" value={lieu_naissance} placeholder='Entrez le lieu de naissance' onChange={(e) => setLieu_naissance(e.target.value)} />
                </div>

                <div>
                    <input type="number" value={tel} placeholder='Entrez le numéro de téléphone' onChange={(e) => setTel(e.target.value)} />
                    <input type="date" value={date_naissance} onChange={(e) => setDate_naissance(e.target.value)} />
                </div>

                <select name="" id="" onChange={(e) => setGenre(e.target.value)}>
                    <option value="">Sélectionner le genre</option>
                    <option value="Homme">Homme</option>
                    <option value="Femme">Femme</option>
                </select>
                <div>

                    <input type="email" value={email} placeholder='Entrez l email' onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" value={filiere} placeholder='Entrez filiere' onChange={(e) => setFiliere(e.target.value)} />
                </div>

                <div>
                    <button onClick={Annuler}>Annuler</button>
                    <button onClick={(e) => ModifierEtudiant(e.numero)}>Modifier</button>
                </div>

            </form>


        </div>
    )
}

export default Modifier
