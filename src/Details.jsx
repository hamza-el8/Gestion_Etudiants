import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { initialeState } from './Store'
import { FiArrowLeft } from "react-icons/fi";

function Details() {

    const { num } = useParams()
    const aff = initialeState.find((e) => e.numero === +num)

    const navigate = useNavigate()

    function Annuler() {
        navigate('/list')
    }

    return (

        <>
            <div className="details-card">

                <h2>Détails de l'étudiant</h2>

                <div className="info">
                    <span className="label">Nom complet :</span>
                    <span className="value">{aff.nom} {aff.prenom}</span>
                </div>

                <div className="info">
                    <span className="label">CIN :</span>
                    <span className="value">{aff.cin}</span>
                </div>

                <div className="info">
                    <span className="label">Lieu de naissance :</span>
                    <span className="value">{aff.lieu_naissance}</span>
                </div>

                <div className="info">
                    <span className="label">Téléphone :</span>
                    <span className="value">{aff.tel}</span>
                </div>

                <div className="info">
                    <span className="label">Date de naissance :</span>
                    <span className="value">{aff.date_naissance}</span>
                </div>

                <div className="info">
                    <span className="label">Genre :</span>
                    <span className="value">{aff.genre}</span>
                </div>

                <div className="info">
                    <span className="label">Email :</span>
                    <span className="value">{aff.email}</span>
                </div>

                <div className="info">
                    <span className="label">Filière :</span>
                    <span className="value">{aff.filiere}</span>
                </div>

            </div>

            <div style={{ display: "flex" }}>
                <span className="retourr" onClick={Annuler}>
                    <FiArrowLeft /> Retour à la page précédente
                </span>
            </div>


        </>
    )
}

export default Details
