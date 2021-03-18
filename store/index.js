export const state = () => ({
  user: {},
  messages: [],
  users: []
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  clearData(state) {
    state.user = {}
    state.messages = []
    state.users = []
    console.log(state)
  },
  SOCKET_newMessage(state, message) {
    state.messages.push(message)
    console.log(state)
  },
  SOCKET_updateUsers(state, users) {
    state.users = users
  }
}
