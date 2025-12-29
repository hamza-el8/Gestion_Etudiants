import { legacy_createStore } from "redux";



export const initialeState = [
    { numero: 1, nom: 'Elboudali', prenom: 'Hamza', email: 'elboudalihamza@gmail.com',genre:'Homme' , filiere: 'DDOWFS',date_naissance:'13/03/2005',tel:'0623248439',lieu_naissance:'Bouznika',cin:'Tk34858' },
    { numero: 2, nom: 'Elmoden', prenom: 'Soukaina', email: 'elmodensoukaina@gmail.com',genre:'Femme' , filiere: 'Gestion',date_naissance:'20/05/1991',tel:'0628905372',lieu_naissance:'Rabat',cin:'Tk925302' },
    { numero: 3, nom: 'Elboudali', prenom: 'Hajar', email: 'elboudalihajar@gmail.com',genre:'Femme' , filiere: 'Ingenieur',date_naissance:'18/12/2001',tel:'0724606218',lieu_naissance:'Skhirat',cin:'TD25925' },
]

function Reducer(state = initialeState, action) {

    switch (action.type) {

        case 'Add': return [...state, action.payload]
        case 'Delete': return state.filter((e) => e.numero != action.payload)
        case 'Update' : {
            const etd = state.find((e)=> e.numero === action.payload.numero)
            if(etd){
                etd.nom=action.payload.nom
                etd.prenom=action.payload.prenom
                etd.cin=action.payload.cin
                etd.lieu_naissance=action.payload.lieu_naissance
                etd.tel=action.payload.tel
                etd.date_naissance=action.payload.date_naissance
                etd.genre=action.payload.genre
                etd.email=action.payload.email
                etd.filiere=action.payload.filiere
                return[...state]
            } 

        }

        default:
            return [...state]

    }
}

const EtudiantsStore = legacy_createStore(Reducer)
export default EtudiantsStore