<template>
  <div id="app">
    <h1>Vue3</h1>
    <div id="base">
      <div>
        {{ state.name }} {{ state.age }}
      </div>
      <div>{{ str }}</div>
      <div>{{arr}}</div>
      <div>{{ name }}{{ age }}</div>
    </div>
    <el-button @click="changeName">changeName</el-button>
    <el-input v-model="strInput"></el-input>
    <div>{{strInput}}</div>

    <home
      :arr="arr"
      />
  </div>
</template>

<script>
import { defineComponent, reactive, ref, toRefs } from 'vue'
// page
import Home from '@/views/Home.vue'

export default defineComponent({
  components: {
    Home
  },
  setup() {
    const state = reactive({ name: 'tom', age: 19 })

    const str = ref('hello Vue3')
    const arr = reactive([1,2,3,45,5])

    const stateToRef = reactive({ name: 'jack', age: 18 })

    function changeName() {
      state.name = "!!!tom!!!"
      str.value = "!!!hello Vue3!!!"
      stateToRef.age = 24
      stateToRef.name = "!!!jack!!!"
      arr.value[0] = 21
      arr.value.push(2211)
    }

    const strInput = ref("")

    function receive(data) {
      stateToRef.age = data
    }

    return {
      state,
      str,
      ...toRefs(arr),
      ...toRefs(stateToRef),
      changeName,
      strInput,
      receive
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#base {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}
</style>
