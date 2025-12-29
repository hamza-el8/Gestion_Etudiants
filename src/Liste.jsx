import React, { useState } from 'react' // Ajout de useState
import { useDispatch, useSelector } from 'react-redux'
import { FiArrowLeft, FiPlus, FiEdit, FiTrash2, FiAlertTriangle, FiX } from "react-icons/fi";
import { useNavigate, Link } from "react-router-dom";
import { ActionSupprimer } from './Actions';

function Liste() {
    const etudiants = useSelector(state => state);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    // supprision modal

    // État pour la modale
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [studentToDelete, setStudentToDelete] = useState(null);

    function Annuler() {
        navigate('/header')
    }

    // Ouvrir la modale
    const openModal = (id) => {
        setStudentToDelete(id);
        setIsModalOpen(true);
    };

    // Confirmer la suppression
    const confirmDelete = () => {
        dispatch(ActionSupprimer(studentToDelete));
        setIsModalOpen(false);
    };

    return (
        <div className="liste-container">
            <div>
                <h1>Liste des Étudiants</h1>
                <Link to='/add'><button style={{ display: 'flex', fontWeight: 'bold' }}><span><FiPlus size={15} /></span>Nouvel Étudiant</button></Link>
            </div>

            <table className="table-etudiants">
                <thead>
                    <tr>
                        <th>Nom complet</th>
                        <th>Email</th>
                        <th>Filière</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {etudiants.map((e, index) => (
                        <tr key={index}>
                            <td>
                                <Link to={`/details/${e.numero}`} style={{ color: 'black', textDecoration: 'none', fontSize: '14px', color: '#475569' }}>
                                    {e.nom} {e.prenom}
                                </Link>
                            </td>
                            <td>{e.email}</td>
                            <td>{e.filiere}</td>
                            <td className="actions">
                                <Link to={`/modifier/${e.numero}`}>
                                    <button className="icon-btn edit" title="Modifier" >
                                        <FiEdit />
                                    </button>
                                </Link>

                                {/* Bouton qui ouvre la modale au lieu du confirm natif */}
                                <button
                                    className="icon-btn delete"
                                    title="Supprimer"
                                    onClick={() => openModal(e.numero)}
                                >
                                    <FiTrash2 />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div style={{ display: "flex" }}>
                <span className="retour" onClick={Annuler} style={{ cursor: 'pointer' }}>
                    <FiArrowLeft /> Retour à la page précédente
                </span>
            </div>

            {/* --- MODALE DE CONFIRMATION PERSONNALISÉE --- */}
            {isModalOpen && (
                <div className="custom-modal-overlay">
                    <div className="custom-modal-box">
                        <div className="custom-modal-header">
                            <span>Confirmation</span>
                            <FiX className="close-icon" onClick={() => setIsModalOpen(false)} />
                        </div>
                        <div className="custom-modal-body">
                            <FiAlertTriangle className="warning-icon" />
                            <p>Êtes-vous sûr de vouloir supprimer cet étudiant ?</p>
                        </div>
                        <div className="custom-modal-footer">
                            <button className="btn-modal annuler" onClick={() => setIsModalOpen(false)} style={{ backgroundColor: '#f8fafc', border: '1px solid #e5e7eb', color: 'black' }}>Annuler</button>
                            <button className="btn-modal supprimer " onClick={confirmDelete} style={{ backgroundColor: 'red' }}>Supprimer</button>
                        </div>
                    </div>
                </div>
            )}
        </div>  
    );
}

export default Liste;