import Vuex from 'vuex'

const SITUATION = {
  EN_COUPLE: 'enCouple',
  CELIBATAIRE: 'célibataire',
  COMPLIQUE: 'compliqué'
}

const PATIENTS_PAR_DEFAUT = [
  {
    nom: 'Dupont',
    prenom: 'Jean',
    ddn: '1985/03/13',
    situation: SITUATION.EN_COUPLE,
    enfants: 3,
    accouchement: '',
    fumeur: false,
    sport: 'non',
    commentaires: [
      'Quel bel homme'
    ],
    id: 1
  },
  {
    nom: 'Durand',
    prenom: 'Durant',
    ddn: '1988/06/18',
    situation: SITUATION.CELIBATAIRE,
    enfants: 0,
    accouchement: '',
    fumeur: true,
    sport: 'boxe',
    commentaires: [
      'Opération en 95'
    ],
    id: 2
  }
]

export default () => new Vuex.Store({
  state: {
    fournitures: [],
    fournituresNextId: 1,
    patients: PATIENTS_PAR_DEFAUT,
    title: '...',
    back: null
  },
  mutations: {
    addFourniture (state, name) {
      state.fournitures.push({
        name: name,
        id: state.fournituresNextId
      })
      state.fournituresNextId ++
    },
    removeFourniture (state, id) {
      let idx = state.fournitures.findIndex(elem => elem.id === id)
      state.fournitures.splice(idx, 1)
    },
    setPage (state, {title, back}) {
      state.title = title
      state.back = back
    }
  }
})
