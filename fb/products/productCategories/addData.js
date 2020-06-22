const firebase = require('firebase')

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
const informationRef = db.collection('product')

let essentialOilSingles = require('./essentialOilSingles.json')
let accessories = require('./accessories.json')
let essentialOilBlends = require('./essentialOilBlends.json')
let shiagqaOriginalFormula = require('./shiagqaOriginalFormula.json')
let shiaqgaPetImmunity = require('./shiaqgaPetImmunity.json')
let shiaqgaSuperConcentrate = require('./shiaqgaSuperConcentrate.json')

informationRef.doc().set(essentialOilSingles)
informationRef.doc().set(accessories)
informationRef.doc().set(essentialOilBlends)
informationRef.doc().set(shiagqaOriginalFormula)
informationRef.doc().set(shiaqgaPetImmunity)
informationRef.doc().set(shiaqgaSuperConcentrate)
