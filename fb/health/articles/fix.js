const data = require('./depression.json')
const _ = require('lodash')
const fs = require('fs')

// console.log(data.elements)
let elements = data.elements

let order = 1

_.forEach(elements, (map) => {
  map.order = order++
  if (map.element === 'ul') {
    let itr = 1
    _.forEach(map.content, (item) => {
      item.order = itr++
    })
  }
  console.log(map.order)
})

let json = JSON.stringify(elements)

fs.writeFile('elements.json', json, 'utf8', (err) => {
  console.log(err)
})
