<template>
    <div class="product">

        <div class="product-image">
            <img :src="image">
        </div>

        <div class="product-info">
            <h1>{{ product }}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <p>Shipping: {{ shipping }}</p>

            <ul>
                <li v-for="(detail, index) in details" :key="index">{{ detail }}</li>
            </ul>

            <div class="color-box"
                    v-for="(variant, index) in variants" 
                    :key="variant.variantId"
                    :style="{ backgroundColor: variant.variantColor }"
                    @mouseover="updateProduct(index)">
            </div> 

            <button @click="addToCart" 
                :disabled="!inStock"
                :class="{ disabledButton: !inStock }">
                Add to cart
            </button>
        </div>        
        <product-review @review-submitted="addReview"></product-review>
    </div>    
</template>

<script>
export default {
    name: 'Product',
    props: {
      premium: {
        type: Boolean,
        required: true
      }
    },
    data: function() {
      return {
          product: 'Socks',
          brand: 'Vue Mastery',
          selectedVariant: 0,
          details: ['80% cotton', '20% polyester', 'Gender-neutral'],
          variants: [
            {
              variantId: 2234,
              variantColor: 'green',
              variantImage: './assets/vmSocks-green.jpg',
              variantQuantity: 10     
            },
            {
              variantId: 2235,
              variantColor: 'blue',
              variantImage: './assets/vmSocks-blue.jpg',
              variantQuantity: 0     
            }
          ],
          reviews: []
      }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
        },
        updateProduct(index) {  
            this.selectedVariant = index
        },
        addReview(productReview) {
          this.reviews.push(productReview)
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product  
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        shipping() {
        if (this.premium) {
            return "Free"
        }
            return 2.99
        }
    }
}
</script>

<style scoped>

</style>

Vue.component('product', {
    
    template: `
     <div class="product">
          
        <div class="product-image">
          <img :src="image">
        </div>
  
        <div class="product-info">
            <h1>{{ product }}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <p>Shipping: {{ shipping }}</p>
  
            <ul>
              <li v-for="(detail, index) in details" :key="index">{{ detail }}</li>
            </ul>
  
            <div class="color-box"
                 v-for="(variant, index) in variants" 
                 :key="variant.variantId"
                 :style="{ backgroundColor: variant.variantColor }"
                 @mouseover="updateProduct(index)"
                 >
            </div> 
  
            <button @click="addToCart" 
              :disabled="!inStock"
              :class="{ disabledButton: !inStock }"
              >
            Add to cart
            </button>
  
         </div> 
         
         <product-review @review-submitted="addReview"></product-review>
      
      </div>
     `,
    
      
      