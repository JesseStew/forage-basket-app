<template>
  <div id="order-history">

  </div>
</template>

<script>
export default {
    name: 'OrderHistory',
    props: {
        orders: {
            type: Object,
            default: () => {
                return {}
            }
        }
    }
}
</script>

<style>

</style>