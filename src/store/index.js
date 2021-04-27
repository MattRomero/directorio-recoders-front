import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userList: [],
    skillSets: {
      list: [],
      object: {}
    },
    filters: {
      skillSetValue: [],
    },
  },
  mutations: {
    GET_USERS(state, payload) {
      state.userList = payload
    },
    GET_SKILLSETS(state,payload) {
      state.skillSets = payload
    },
  },
  actions: {
    async getUsers (state, payload) {
      let res = await fetch(`api/users`)
      let users = await res.json()
      shuffleArray(users.users)
      
      state.commit('GET_USERS', users.users)
      
      let skillSets = { list: users.skillsets, object: {} }
      
      skillSets.list.forEach((skillSet) => {
        skillSets.object[skillSet.id] = skillSet
      })
      
      state.commit('GET_SKILLSETS', skillSets)
    },
  },
  
  getters: {
    getUserList: state => {
      let users = state.userList

      let filteredUsers = []
      let activeFilters = false

      if (state.filters.skillSetValue.length > 0) {
        if (activeFilters == false) filteredUsers  = users
        activeFilters = true
        filteredUsers = filteredUsers.filter(user => {
            for (let skillSet of user.skillset) {
              if (state.filters.skillSetValue.indexOf(skillSet) > -1) return true
            }
        })
      } 

      if (activeFilters == false) { filteredUsers  = users }
      return filteredUsers
    },
    getSkillSetsObjects: state => state.skillSets.object,
    getSkillSetsForSelect: state => state.skillSets.list,

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