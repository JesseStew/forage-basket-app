// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
require('dotenv').config()
const _ = require('lodash')
const glob = require('glob')
const path = require('path')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

let paramsExample = {
  active: true,
  description: '',
  metadata: '',
  name: '',
  attributes: [],
  caption: '',
  images: [''],
  package_dimensions: {
    height: 'Height, in inches. Maximum precision is 2 decimal places.',
    length: 'Length, in inches. Maximum precision is 2 decimal places.',
    weight: 'Weight, in ounces. Maximum precision is 2 decimal places.',
    width: 'Width, in inches. Maximum precision is 2 decimal places.',
  },
  shippable: true,
  statement_descriptor:
    'An arbitrary string to be displayed on your customer’s credit card or bank statement.',
  unit_label:
    'A label that represents units of this product in Stripe and on customers’ receipts and invoices. When set, this will be included in associated invoice line item descriptions. May only be set if type=service.',
  url:
    'A URL of a publicly-accessible webpage for this product. May only be set if type=good.',
}

let shiaqgaSuperConcentrateParams = [
  {
    prod_HRTGHbm4A02KE1: {
      description: '1 Bottle Shiaqga Super Concentrate',
      caption: '1 Bottle Shiaqga Super Concentrate',
      shippable: true,
    },
  },
  {
    prod_HRTGJcdbfcQkab: {
      description: '2 Bottles Shiaqga Super Concentrate',
      caption: '2 Bottles Shiaqga Super Concentrate',
      shippable: true,
    },
  },
  {
    prod_HRTGWqO3Cy8jaD: {
      description: '4 Bottles Shiaqga Super Concentrate',
      caption: '4 Bottles Shiaqga Super Concentrate',
      shippable: true,
    },
  },
  {
    prod_HRTGtLKX0WePdz: {
      description: '6 Bottles Shiaqga Super Concentrate',
      caption: '6 Bottles Shiaqga Super Concentrate',
      shippable: true,
    },
  },
  {
    prod_HRTGibtCNKVOIr: {
      description: '12 Bottles Shiaqga Super Concentrate',
      caption: '12 Bottles Shiaqga Super Concentrate',
      shippable: true,
    },
  },
]

let shiaqgaOriginalParams = [
  {
    prod_HRTG11G02igxx7: {
      description: '1 Bottle Shiaqga Original Formula',
      caption: '1 Bottle Shiaqga Original Formula',
      shippable: true,
    },
  },
  {
    prod_HRTGWQgPKGG2cW: {
      description: '2 Bottles Shiaqga Original Formula',
      caption: '2 Bottles Shiaqga Original Formula',
      shippable: true,
    },
  },
  {
    prod_HRTGMAOxXbXjkf: {
      description: '4 Bottles Shiaqga Original Formula',
      caption: '4 Bottles Shiaqga Original Formula',
      shippable: true,
    },
  },
  {
    prod_HRTGmbzZ7eynMm: {
      description: '6 Bottles Shiaqga Original Formula',
      caption: '6 Bottles Shiaqga Original Formula',
      shippable: true,
    },
  },
  {
    prod_HRTGgSo5EipMpn: {
      description: '12 Bottles Shiaqga Original Formula',
      caption: '12 Bottles Shiaqga Original Formula',
      shippable: true,
    },
  },
]

let essentialOilSinglesParams = [
  {
    prod_HRTGTFfUknWtW3: {
      description: '1 Bottle 15ml Organic Ylang Ylang Extra',
      caption: '1 Bottle 15ml Organic Ylang Ylang Extra',
      shippable: true,
    },
  },
  {
    prod_HRTGhuCcfIsQRV: {
      description: '1 Bottle 15ml Organically Grown Thyme',
      caption: '1 Bottle 15ml Organically Grown Thyme',
      shippable: true,
    },
  },
  {
    prod_HRTGB3Hpu7NBpm: {
      description: '1 Bottle 15ml Organic Wintergreen',
      caption: '1 Bottle 15ml Organic Wintergreen',
      shippable: true,
    },
  },
  {
    prod_HRTGk1W4tQMjs7: {
      description: '1 Bottle 15ml Organically Grown Vetiver',
      caption: '1 Bottle 15ml Organically Grown Vetiver',
      shippable: true,
    },
  },
  {
    prod_HRTGIW7QoJMf2Z: {
      description: '1 Bottle 15ml Organic Sage',
      caption: '1 Bottle 15ml Organic Sage',
      shippable: true,
    },
  },
  {
    prod_HRTGsgohDrjZMp: {
      description: '1 Bottle 15ml Wild Tea Tree',
      caption: '1 Bottle 15ml Wild Tea Tree',
      shippable: true,
    },
  },
  {
    prod_HRTGCE0rJ7oWQE: {
      description: '1 Bottle 15ml Wild Spruce',
      caption: '1 Bottle 15ml Wild Spruce',
      shippable: true,
    },
  },
  {
    prod_HRTGOd5R5WEsuW: {
      description: '1 Bottle 15ml Conventional Tangerine',
      caption: '1 Bottle 15ml Conventional Tangerine',
      shippable: true,
    },
  },
  {
    prod_HRTGInBzYkzQVP: {
      description: '1 Bottle 15ml Rose Geranium',
      caption: '1 Bottle 15ml Rose Geranium',
      shippable: true,
    },
  },
  {
    prod_HRTGgDkzYF1flf: {
      description: '1 Bottle 15ml Organically Grown Thyme',
      caption: '1 Bottle 15ml Organically Grown Thyme',
      shippable: true,
    },
  },
  {
    prod_HRTGUBY3dtPWua: {
      description: '1 Bottle 15ml Wild Sandalwood',
      caption: '1 Bottle 15ml Wild Sandalwood',
      shippable: true,
    },
  },
  {
    prod_HRTGRxjzpSHKZ4: {
      description: '1 Bottle 15ml Wild Oregano',
      caption: '1 Bottle 15ml Wild Oregano',
      shippable: true,
    },
  },
  {
    prod_HRTGdzpK1NOXNc: {
      description: '1 Bottle 15ml Organic Rose',
      caption: '1 Bottle 15ml Organic Rose',
      shippable: true,
    },
  },
  {
    prod_HRTGKaJYQ8L9I1: {
      description: '1 Bottle 15ml Organic Spearmint',
      caption: '1 Bottle 15ml Organic Spearmint',
      shippable: true,
    },
  },
  {
    prod_HRTG67eRkvBR7j: {
      description: '1 Bottle 15ml Wild Pine',
      caption: '1 Bottle 15ml Wild Pine',
      shippable: true,
    },
  },
  {
    prod_HRTG1hO8sZQNHW: {
      description: '1 Bottle 15ml Organic Rosemary',
      caption: '1 Bottle 15ml Organic Rosemary',
      shippable: true,
    },
  },
  {
    prod_HRTGxuwA0lkD2R: {
      description: '1 Bottle 15ml Peppermint, First Distilled',
      caption: '1 Bottle 15ml Peppermint, First Distilled',
      shippable: true,
    },
  },
  {
    prod_HRTGUYt9eYNopQ: {
      description: '1 Bottle 15ml Organic Pink Grapefruit',
      caption: '1 Bottle 15ml Organic Pink Grapefruit',
      shippable: true,
    },
  },
  {
    prod_HRTG80JbG7OY9L: {
      description: '1 Bottle 15ml Organic Petigrain',
      caption: '1 Bottle 15ml Organic Petigrain',
      shippable: true,
    },
  },
  {
    prod_HRTGN4QOIkOiAO: {
      description: '1 Bottle 15ml Organic Patchouli',
      caption: '1 Bottle 15ml Organic Patchouli',
      shippable: true,
    },
  },
  {
    prod_HRTG6voHOZlcM4: {
      description: '1 Bottle 15ml Organic Helichrysum gymnocephalum',
      caption: '1 Bottle 15ml Organic Helichrysum gymnocephalum',
      shippable: true,
    },
  },
  {
    prod_HRTGEy3h8RlcMl: {
      description: '1 Bottle 15ml Organic Lemongrass',
      caption: '1 Bottle 15ml Organic Lemongrass',
      shippable: true,
    },
  },
  {
    prod_HRTGD9iCBdHQhg: {
      description: '1 Bottle 15ml Organic Nutmeg',
      caption: '1 Bottle 15ml Organic Nutmeg',
      shippable: true,
    },
  },
  {
    prod_HRTGWDhocUHTJR: {
      description: '1 Bottle 15ml Organically Grown Myrtle',
      caption: '1 Bottle 15ml Organically Grown Myrtle',
      shippable: true,
    },
  },
  {
    prod_HRTGYOA3ySr0Ct: {
      description: '1 Bottle 15ml Organic Orange',
      caption: '1 Bottle 15ml Organic Orange',
      shippable: true,
    },
  },
  {
    prod_HRTGgwsSKKbgj3: {
      description: '1 Bottle 15ml Organic Lemon',
      caption: '1 Bottle 15ml Organic Lemon',
      shippable: true,
    },
  },
  {
    prod_HRTGsPuLlawq2u: {
      description: '1 Bottle 15ml Organic Lavender',
      caption: '1 Bottle 15ml Organic Lavender',
      shippable: true,
    },
  },
  {
    prod_HRTGRvU7utZNPa: {
      description: '1 Bottle 15ml Wild Myrrh',
      caption: '1 Bottle 15ml Wild Myrrh',
      shippable: true,
    },
  },
  {
    prod_HRTGBGgndswKQY: {
      description: '1 Bottle 15ml Wild Melaleuca',
      caption: '1 Bottle 15ml Wild Melaleuca',
      shippable: true,
    },
  },
  {
    prod_HRTGEolUINVJ8T: {
      description: '1 Bottle 15ml Wild Oregano',
      caption: '1 Bottle 15ml Wild Oregano',
      shippable: true,
    },
  },
  {
    prod_HRTGLmUCv6n2Do: {
      description: '1 Bottle 15ml Organic Juniper Berry',
      caption: '1 Bottle 15ml Organic Juniper Berry',
      shippable: true,
    },
  },
  {
    prod_HRTGSOdWulnYgq: {
      description: '1 Bottle 15ml Organic Marjoram',
      caption: '1 Bottle 15ml Organic Marjoram',
      shippable: true,
    },
  },
  {
    prod_HRTGZOcreS33Nf: {
      description: '1 Bottle 15ml Organically Grown Geranium',
      caption: '1 Bottle 15ml Organically Grown Geranium',
      shippable: true,
    },
  },
  {
    prod_HRTGJ80qMwI7LA: {
      description: '1 Bottle 15ml Organically Grown Hyssop',
      caption: '1 Bottle 15ml Organically Grown Hyssop',
      shippable: true,
    },
  },
  {
    prod_HRTGEtOqQZKA0H: {
      description: '1 Bottle 15ml Organically Grown Ginger Root',
      caption: '1 Bottle 15ml Organically Grown Ginger Root',
      shippable: true,
    },
  },
  {
    prod_HRTGnd7We4ciEM: {
      description: '1 Bottle 15ml Organic Helichrysum italicum',
      caption: '1 Bottle 15ml Organic Helichrysum italicum',
      shippable: true,
    },
  },
  {
    prod_HRTG329YXYDjVg: {
      description: '1 Bottle 15ml Organically Grown Geranium',
      caption: '1 Bottle 15ml Organically Grown Geranium',
      shippable: true,
    },
  },
  {
    prod_HRTGLKMccY7Ecq: {
      description: '1 Bottle 15ml Wild Eucalyptus citriodora',
      caption: '1 Bottle 15ml Wild Eucalyptus citriodora',
      shippable: true,
    },
  },
  {
    prod_HRTG0BF2N05ksp: {
      description: '1 Bottle 15ml Organically Grown Celery Seed',
      caption: '1 Bottle 15ml Organically Grown Celery Seed',
      shippable: true,
    },
  },
  {
    prod_HRTGHLFgYH1aQQ: {
      description: '1 Bottle 15ml Organic Black Cumin',
      caption: '1 Bottle 15ml Organic Black Cumin',
      shippable: true,
    },
  },
  {
    prod_HRTGUOANMZHxmo: {
      description: '1 Bottle 15ml Organic Clary Sage',
      caption: '1 Bottle 15ml Organic Clary Sage',
      shippable: true,
    },
  },
  {
    prod_HRTGb0K1Ax2iG2: {
      description: '1 Bottle 15ml Wild Eucalyptus radiata',
      caption: '1 Bottle 15ml Wild Eucalyptus radiata',
      shippable: true,
    },
  },
  {
    prod_HRTGJHPOn3BbRE: {
      description: '1 Bottle 15ml Wild Frankincense, Sacred',
      caption: '1 Bottle 15ml Wild Frankincense, Sacred',
      shippable: true,
    },
  },
  {
    prod_HRTGicqp9qOeP2: {
      description: '1 Bottle 15ml Wild Cedarwood',
      caption: '1 Bottle 15ml Wild Cedarwood',
      shippable: true,
    },
  },
  {
    prod_HRTGL1M7V2ATwB: {
      description: '1 Bottle 15ml Organically Grown Carrot Seed',
      caption: '1 Bottle 15ml Organically Grown Carrot Seed',
      shippable: true,
    },
  },
  {
    prod_HRTGgA9DCHsHqA: {
      description: '1 Bottle 15ml Wild Cypress',
      caption: '1 Bottle 15ml Wild Cypress',
      shippable: true,
    },
  },
  {
    prod_HRTGAHL7LCUCkZ: {
      description: '1 Bottle 15ml Organic Chamomile, Roman',
      caption: '1 Bottle 15ml Organic Chamomile, Roman',
      shippable: true,
    },
  },
  {
    prod_HRTGZqRwfWoSz2: {
      description: '1 Bottle 15ml Organically Grown Fennel Seed',
      caption: '1 Bottle 15ml Organically Grown Fennel Seed',
      shippable: true,
    },
  },
  {
    prod_HRTGLXcQtZTGIj: {
      description: '1 Bottle 15ml Wild Frankincense',
      caption: '1 Bottle 15ml Wild Frankincense',
      shippable: true,
    },
  },
  {
    prod_HRTGaOLqMZtuUL: {
      description: '1 Bottle 15ml Organic Cinnamon Bark',
      caption: '1 Bottle 15ml Organic Cinnamon Bark',
      shippable: true,
    },
  },
  {
    prod_HRTG9j32mJgVAf: {
      description: '1 Bottle 15ml Organic Black Pepper',
      caption: '1 Bottle 15ml Organic Black Pepper',
      shippable: true,
    },
  },
  {
    prod_HRTG3W8uN1p1Aq: {
      description: '1 Bottle 15ml Organic Clove Bud',
      caption: '1 Bottle 15ml Organic Clove Bud',
      shippable: true,
    },
  },
  {
    prod_HRTGUQbagXkKUE: {
      description: '1 Bottle 15ml Organically Grown Basil',
      caption: '1 Bottle 15ml Organically Grown Basil',
      shippable: true,
    },
  },
  {
    prod_HRTGxZFZQYQklH: {
      description: '1 Bottle 15ml Organically Grown Bergamot',
      caption: '1 Bottle 15ml Organically Grown Bergamot',
      shippable: true,
    },
  },
  {
    prod_HRTGGPLICtVmFT: {
      description: '1 Bottle 15ml Organic Black Cumin',
      caption: '1 Bottle 15ml Organic Black Cumin',
      shippable: true,
    },
  },
]

let essentialOilBlendsParams = [
  {
    prod_HRTGGHJw32rqvA: {
      description: '1 Bottle 15ml Meditate',
      caption: '1 Bottle 15ml Meditate',
      shippable: true,
    },
  },
  {
    prod_HRTGdk80Fov6xn: {
      description: '1 Bottle 15ml Thief Blend',
      caption: '1 Bottle 15ml Thief Blend',
      shippable: true,
    },
  },
  {
    prod_HRTGQpZoLocpc1: {
      description: '1 Bottle 15ml Tummy Soothe',
      caption: '1 Bottle 15ml Tummy Soothe',
      shippable: true,
    },
  },
  {
    prod_HRTGmXuNhu8wNF: {
      description: '1 Bottle 15ml Joint Support',
      caption: '1 Bottle 15ml Joint Support',
      shippable: true,
    },
  },
  {
    prod_HRTGHduIiXxDwz: {
      description: '1 Bottle 15ml To Be',
      caption: '1 Bottle 15ml To Be',
      shippable: true,
    },
  },
  {
    prod_HRTGjot03aexyh: {
      description: '1 Bottle 15ml Skin Renew',
      caption: '1 Bottle 15ml Skin Renew',
      shippable: true,
    },
  },
  {
    prod_HRTGWDGkZxEadM: {
      description: '1 Bottle 15ml Pain Free',
      caption: '1 Bottle 15ml Pain Free',
      shippable: true,
    },
  },
  {
    prod_HRTGsWwVuUkJBE: {
      description: '1 Bottle 15ml Rose Blend',
      caption: '1 Bottle 15ml Rose Blend',
      shippable: true,
    },
  },
  {
    prod_HRTGttWsO9LFTw: {
      description: '1 Bottle 15ml Thyroid Support',
      caption: '1 Bottle 15ml Thyroid Support',
      shippable: true,
    },
  },
  {
    prod_HRTGOn0VQDyCud: {
      description: '1 Bottle 15ml Peaceful',
      caption: '1 Bottle 15ml Peaceful',
      shippable: true,
    },
  },
  {
    prod_HRTGYpiRCgiyeW: {
      description: '1 Bottle 15ml Allergy Free',
      caption: '1 Bottle 15ml Allergy Free',
      shippable: true,
    },
  },
  {
    prod_HRTGVjIRwjCOdD: {
      description: '1 Bottle 15ml Deep Heat',
      caption: '1 Bottle 15ml Deep Heat',
      shippable: true,
    },
  },
  {
    prod_HRTGIe1yBl1otb: {
      description: '1 Bottle 15ml Flu Relief',
      caption: '1 Bottle 15ml Flu Relief',
      shippable: true,
    },
  },
  {
    prod_HRTGCRXBZ3EB8D: {
      description: '1 Bottle 15ml Joint Support',
      caption: '1 Bottle 15ml Joint Support',
      shippable: true,
    },
  },
  {
    prod_HRTGo2ZO63di9I: {
      description: '1 Bottle 15ml Intention',
      caption: '1 Bottle 15ml Intention',
      shippable: true,
    },
  },
  {
    prod_HRTGXtpguvrt0i: {
      description: '1 Bottle 15ml First Aid',
      caption: '1 Bottle 15ml First Aid',
      shippable: true,
    },
  },
  {
    prod_HRTGAwD5VH7Ccf: {
      description: '1 Bottle 15ml Circulate',
      caption: '1 Bottle 15ml Circulate',
      shippable: true,
    },
  },
  {
    prod_HRTGxPHf1lml1r: {
      description: '1 Bottle 15ml Hormone Balance',
      caption: '1 Bottle 15ml Hormone Balance',
      shippable: true,
    },
  },
  {
    prod_HRTGIZz8LPNApn: {
      description: '1 Bottle 15ml Breathe Free',
      caption: '1 Bottle 15ml Breathe Free',
      shippable: true,
    },
  },
  {
    prod_HRTGObV01sgbUe: {
      description: '1 Bottle 15ml Fit',
      caption: '1 Bottle 15ml Fit',
      shippable: true,
    },
  },
  {
    prod_HRTGk4klOTgH7H: {
      description: '1 Bottle 15ml DNA Release',
      caption: '1 Bottle 15ml DNA Release',
      shippable: true,
    },
  },
  {
    prod_HRTG4jdH4nV0s2: {
      description: '1 Bottle 15ml Alignment',
      caption: '1 Bottle 15ml Alignment',
      shippable: true,
    },
  },
]

let shiaqgaPetImmunityParams = [
  {
    prod_HRTGLnpLKYy18b: {
      description: '1 Container Shiaqga Pet Immunity',
      caption: '1 Container Shiaqga Pet Immunity',
      shippable: true,
    },
  },
  {
    prod_HRTGBarQMyA665: {
      description: '2 Containers Shiaqga Pet Immunity',
      caption: '2 Containers Shiaqga Pet Immunity',
      shippable: true,
    },
  },
  {
    prod_HRTGcJGrolg7E7: {
      description: '4 Containers Shiaqga Pet Immunity',
      caption: '4 Containers Shiaqga Pet Immunity',
      shippable: true,
    },
  },
  {
    prod_HRTGYlBlnRpSqe: {
      description: '6 Containers Shiaqga Pet Immunity',
      caption: '6 Containers Shiaqga Pet Immunity',
      shippable: true,
    },
  },
  {
    prod_HRTG499YIsSXtf: {
      description: '12 Containers Shiaqga Pet Immunity',
      caption: '12 Containers Shiaqga Pet Immunity',
      shippable: true,
    },
  },
]
// Get Product Count
// let itr2 = 1
// _.forEach(essentialOilSinglesParams, () => {
//   console.log('itr2', itr2++)
// })

stripeTimer(shiaqgaPetImmunityParams, 15, updateStripeProducts)

async function updateStripeProducts(productJSON, itr) {
  let productId = _.keys(productJSON)[0]
  let paramJSON = productJSON[_.keys(productJSON)[0]]
  await stripe.products.update(productId, paramJSON, function(err, product) {
    // asynchronously called
    if (err) {
      console.log(err)
    }
  })
  // console.log('createStripeProduct', productId, 'itr: ', itr)
  // console.log('productId: ', productId, '\nparamJSON: ', paramJSON)
}

function stripeTimer(products, length, stripeFunction) {
  for (let itr = 1; itr <= length; itr++) {
    let product = products[itr - 1]
    if (itr === 1) {
      console.log('products.length: ', products.length)
    }
    if (itr === length) {
      console.log('itr: ', itr)
    }
    stripeFunction(product, itr)
    if (itr === length) {
      sleep(1500).then(() => {
        let remainingProducts = _.slice(products, itr, products.length)
        // console.log('itr: ', itr)
        console.log('remainingProducts.length: ', remainingProducts.length)
        if (remainingProducts.length < 1) {
          return
        } else {
          if (remainingProducts.length < length) {
            length = remainingProducts.length + 1
          } else {
            length = 16
          }
          stripeTimer(remainingProducts, length, stripeFunction)
        }
      })
    }
  }
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
