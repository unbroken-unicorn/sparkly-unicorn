<template>
  <div>
    <h3>Product Page</h3>
    <br>
    <span>
      Looking for Product: {{ this.$route.params.id }}
    </span>
    <br>
     <span>
      Product Params: {{ this.$route.params }}
    </span>
  </div>
</template>