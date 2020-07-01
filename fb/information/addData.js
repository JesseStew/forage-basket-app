const firebase = require('firebase')
const glob = require('glob')
// const path = require('path')

const firebaseConfig = {
  apiKey: 'AIzaSyBnHjfJLfjTWBe9RBlGIZKM44wSAOFDiEk',
  authDomain: 'forage-basket-7a7ed.firebaseapp.com',
  databaseURL: 'https://forage-basket-7a7ed.firebaseio.com',
  projectId: 'forage-basket-7a7ed',
  storageBucket: 'forage-basket-7a7ed.appspot.com',
  messagingSenderId: '66382564064',
  appId: '1:66382564064:web:c44d5b93ac50ba83611e85',
  measurementId: 'G-LR70HPR1EX',
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const informationRef = db.collection('information')

let itr = 1

glob.sync('./informationLinks/*.json').forEach((file) => {
  console.log(file)
  let data = require(file)
  console.log(data.order)
  data.order = itr++
  console.log(data.order)
  informationRef.doc().set(data)
})
