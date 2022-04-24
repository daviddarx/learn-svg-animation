export const state = () => ({
  headTitleBase: 'Boilerplate Nuxtjs',
  browserInfo: {},
  currentYear: '',
})

export const getters = {}

export const mutations = {
  setBrowserInfo: (state, data) => {
    state.browserInfo = data
  },
  udpateCurrentYear: (state, data) => {
    state.currentYear = data
  },
}

export const actions = {
  getCurrentYear({ commit }) {
    commit('udpateCurrentYear', new Date().getFullYear())
  },
}
