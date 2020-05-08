const firebase = require('../node_modules/firebase')
// const data = require('./health/articles')
const _ = require('lodash')
const fs = require('fs')
var process = require('process')

const folderPath = './health/articles'

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

const informationRef = db.collection('articles')

// informationRef.doc().set(data)

// Loop through all the files in the articles directory
fs.readdir(folderPath, function(err, files) {
  if (err) {
    console.error('Could not list the directory.', err)
    process.exit(1)
  }
  let order = 1
  _.forEach(files, (article) => {
    let json = require('./health/articles/' + article)
    console.log(json.title)
    json.order = order
    console.log(json.order)
    order++
    informationRef.doc().set(json)
  })
})
