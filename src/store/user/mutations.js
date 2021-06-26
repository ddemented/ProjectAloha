function login (state, username) {
  state.authenticated = true
  state.username = username
  state.id = 123
  state.password = 'admin'
  state.name = 'sanjeev'
}

function logout (state) {
  // TODO: Reset cache
  // TODO: Clear localstorage token
  state.authenticated = false

  state.username = ''
  state.id = ''
  state.password = ''
  state.name = ''
}

export {
  login,
  logout
}
