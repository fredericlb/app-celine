import Vuex from 'vuex'

export default () => new Vuex.Store({
  state: {
    fournitures: [],
    fournituresNextId: 1
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
    }
  }
})
