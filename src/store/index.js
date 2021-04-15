import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userList: [],
    skillSetsObjects: {},
    filters: {
      skillSets: null,

    },
  },
  mutations: {
    GET_USERS(state, payload) {
      state.userList = payload
    },
    GET_SKILLSETS(state,payload) {
      state.skillSetsObjects = payload
    }
  },
  actions: {
    async getUsers (state, payload) {
      let res = await fetch(`api/users`)
      let users = await res.json()
      shuffleArray(users.users)
      state.commit('GET_USERS', users.users)
      state.commit('GET_SKILLSETS', users.skillsets)
    },
  },
  getters: {
    getUserList: state => state.userList,
    getSkillSetsObjects: state => state.skillSetsObjects,
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