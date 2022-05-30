<template>
    <div>
        <h1>My Cart</h1>
        <h2 v-if="isCartEmty">暂无数据</h2>
        <ul v-if="!isCartEmty">
            <li v-for="item in cart.items" :key="item.productId">
                <div>
                    <h3>{{ item.name }} ￥ {{ item.price }} | 有{{ item.quantity }}个</h3>
                    <el-input-number 
                      :modelValue="item.quantity" 
                      size="default" 
                      @update:modelValue="(quantity) => {
                        updateQuantity(item, quantity)
                    }" />
                    <el-button type="danger" size="default" @click="removeFromCart(item)">remove</el-button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script lang='ts' setup>
import { useCart } from '@/hooks/useCart';
const { cart, updateQuantity, removeFromCart, isCartEmty } = useCart()

</script>

<style scoped>
@media (min-width: 1024px) {
  .container {
    min-height: 100vh;
    display: flex;
    align-items: center
  }
}
</style>
