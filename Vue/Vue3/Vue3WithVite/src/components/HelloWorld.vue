<template>
  <div>
    <h1>{{ msg }}</h1>
    <h1>{{name}}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    msg: String,
    name: String
  },
  setup() {
    const count = ref(0)
    return {
      count
    }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
