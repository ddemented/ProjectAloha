function loginUser ({ state, commit, dispatch }, { username, password }) {
  // TODO: Send request to server and get token
  // TODO: Also redirect to user page

  // Set the user details on local vue store
  commit('login', username)
}

function logoutUser ({ state, commit, dispatch }) {
  commit('logout')
}

export {
  loginUser,
  logoutUser
}
