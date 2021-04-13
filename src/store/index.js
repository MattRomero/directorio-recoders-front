import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userList: [],
    skillSets: {},
  },
  mutations: {
    getUsers(state, payload) {
      state.userList = payload
    },
    getSkillSets(state,payload) {
      state.skillSets = payload
    }
  },
  actions: {
    async getUsers (state, payload) {
      let res = await fetch(`api/users`)
      let users = await res.json()
      shuffleArray(users.users)
      state.commit('getUsers', users.users)
      state.commit('getSkillSets', users.skillsets)
    },
  },
  getters: {
    getUserList: state => state.userList,
    getSkillSets: state => state.skillSets,
  },
  modules: {
  }
})

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}