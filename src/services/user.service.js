// https://firebase.google.com/docs/auth/web/password-auth?authuser=1
import firebase from 'firebase/app'
import 'firebase/auth'

export const userService = {
  loginStatus,
  login,
  logout,
  register,
  getAll,
  getById,
  update,
  delete: _delete,
}

function loginStatus() {
  firebase.auth().onAuthStateChanged((user) => {
    return user
  })
}

function login(email, password) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function(user) {
      state.user.state = user.state
      state.user.email = user.email
      state.user.emailVerified = user.emailVerified
      state.user.photoURL = user.photoURL
      state.user.isAnonymous = user.isAnonymous
      state.user.uid = user.uid
      state.user.providerData = user.providerData
      alert('You have logged in.')
    })
    .catch(function(err) {
      alert('Loggin failure.')
    })
}

function logout() {
  firebase
    .auth()
    .signOut()
    .then(function() {
      state.user.state = ''
      state.user.email = ''
      state.user.emailVerified = false
      state.user.photoURL = ''
      state.user.isAnonymous = false
      state.user.uid = ''
      state.user.providerData = ''
      alert('Signed Out')
    })
    .catch(function(err) {
      alert('Problem Signing Out')
    })
}

function register(user) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(payload.email, payload.password)
    .then(function(user) {
      state.user.state = user.state
      state.user.email = user.email
      state.user.emailVerified = user.emailVerified
      state.user.photoURL = user.photoURL
      state.user.isAnonymous = user.isAnonymous
      state.user.uid = user.uid
      state.user.providerData = user.providerData
      alert('Your account has been created')
    })
    .catch(function(err) {
      alert(err.message)
    })
}

// Stopped here,

function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  }

  return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse)
}

function getById(id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  }

  return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(
    handleResponse
  )
}

function update(user) {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  }

  return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(
    handleResponse
  )
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader(),
  }

  return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(
    handleResponse
  )
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout()
        location.reload(true)
      }

      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }

    return data
  })
}
