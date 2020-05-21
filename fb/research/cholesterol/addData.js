const firebase = require('../../../node_modules/firebase')
const data = require('./cholesterol.json')
// const glob = require('glob')
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

const informationRef = db.collection('research')

informationRef.doc().set(data)
