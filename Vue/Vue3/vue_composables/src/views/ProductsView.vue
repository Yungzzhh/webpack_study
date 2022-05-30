<script setup lang="ts">
import { useCart } from "@/hooks/useCart";
import { onMounted, ref } from "vue";

const {addToCart} = useCart()
const products = ref<Product[]>([])
onMounted(() => {
  products.value = [
    {
      id:1, 
      name: "Product1", 
      price: 10
    },
    {
      id:2, 
      name: "Product2", 
      price: 14
    },
    {
      id:3, 
      name: "Product3", 
      price: 17
    },
  ]
})
</script>

<template>
  <div class="product">
    <h1>Products</h1>
    <ul>
      <li v-for="item in products" :key="item.id">
        <div>
          <h3>{{item.name}} $ {{item.price}}</h3>
          <el-button @click="addToCart(item)">Add to cart</el-button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .product {
    min-height: 100vh;
    display: flex;
    align-items: center
  }
}
</style>
