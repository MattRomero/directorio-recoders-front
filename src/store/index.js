import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userList: [],
  },
  mutations: {
    getUsers(state, payload) {
      state.userList = payload
    },
  },
  actions: {
    async getUsers (state, payload) {
      let res = await fetch(`api/users`)
      let users = await res.json()
      state.commit('getUsers', users.users)
    },
  },
  getters: {
    getUserList: state => state.userList,
  },
  modules: {
  }
})