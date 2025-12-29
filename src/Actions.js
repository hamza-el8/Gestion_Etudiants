

export const ActionAjouter = (etudiants) => {
    return {type:'Add' ,payload:etudiants}
}

export const ActionSupprimer = (numero) => { 
    return {type:'Delete' ,payload:numero}
}

export const ActionModifier = (etudiants) => { 
    return {type:'Update' ,payload:etudiants}
} 
