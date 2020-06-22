require('dotenv').config()
const _ = require('lodash')
const glob = require('glob')
const path = require('path')
const fs = require('fs')

let essentialOilSingles = require('./EssentialOilSingles/EssentialOilSingles.json')
let accessories = require('./Accessories/accessories.json')
let essentialOilBlends = require('./EssentialOilBlends/EssentialOilBlends.json')
let shiagqaOriginalFormula = require('./ShiaqgaOriginalFormula/ShiagqaOriginalFormula.json')
let shiaqgaPetImmunity = require('./ShiaqgaPetImmunity/shiaqgaPetImmunity.json')
let shiaqgaSuperConcentrate = require('./ShiaqgaSuperConcentrate/ShiaqgaSuperConcentrate.json')

function createProps(category, jsonName) {
  let props = []
  for (let itr = 0; itr < category[0].length; itr++) {
    const element = category[0][itr]
    let match = _.find(category[1], (o) => {
      return o['Product ID'] === _.keys(element)[0]
    })
    // console.log(itr + 1)
    // console.log(match['Product ID'])
    // console.log(_.keys(element)[0], '\n')
    // console.log(element[_.keys(element)[0]].description)
    props.push({
      description: element[_.keys(element)[0]].description,
      images: element[_.keys(element)[0]].images,
      productId: _.keys(element)[0],
      priceId: match['Price ID'],
      productName: match['Product Name'],
    })
  }
  let obj = {}
  obj[jsonName] = props

  obj = JSON.stringify(obj)

  fs.writeFile(jsonName + '.json', obj, 'utf8', (err) => {
    console.log(err)
  })
}
createProps(essentialOilSingles, 'essentialOilSingles')
createProps(accessories, 'accessories')
createProps(essentialOilBlends, 'essentialOilBlends')
createProps(shiagqaOriginalFormula, 'shiagqaOriginalFormula')
createProps(shiaqgaPetImmunity, 'shiaqgaPetImmunity')
createProps(shiaqgaSuperConcentrate, 'shiaqgaSuperConcentrate')
