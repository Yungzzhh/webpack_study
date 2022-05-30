<template>
  <div id="hooks">
    <p>count: {{ count }}</p>
    <p>倍数： {{ multiple }}</p>
    <div>
      <button @click="increase()">加1</button>
      <button @click="decrease()">减一</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import useCount from "../hooks/useCount";
export default defineComponent({
  setup() {
    const { count, multiple, increase, decrease } = useCount(10);
    console.log(count.value);
    
    return {
      count,
      multiple,
      increase,
      decrease,
    };
  }
})
</script>

<style>
#hooks {
  border: 1px solid blue;
  margin: 5px;
  padding: 5px;
}
</style>