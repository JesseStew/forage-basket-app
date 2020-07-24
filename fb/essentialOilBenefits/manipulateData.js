const essentialOilBenefits = require('./essentialOilBenefits.json')
const fs = require('fs')
const _ = require('lodash')

let benefits = []

_.forEach(essentialOilBenefits, (arr) => {
	_.forEach(arr, (val) => {
		benefits.push(val)
	})
})

let uniqueBenefits = _.uniq(benefits)

console.log(uniqueBenefits)

const storeData = (data, path) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data))
  } catch (err) {
    console.error(err)
  }
}

storeData(JSON.stringify(uniqueBenefits), './uniqueBenefits.json')
