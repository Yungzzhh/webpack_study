<template>
  <div id="Home">
    <div>this is Home Page</div>
    <div v-for="item in arr" :key="item">
      <!-- {{item.value}} -->
    </div>
    <!-- <div>{{state.name}}</div>
    <div>{{str}}</div>
    <div>{{age}}</div>
    <div>
      <el-button @click="changeParent">changeParent</el-button>
    </div> -->
  </div>
</template>

<script>
import { defineComponent,reactive, ref,toRefs } from 'vue'

// import HelloWorld from "@/components/HelloWorld.vue"
export default defineComponent({
  // components: {
  //   HelloWorld
  // },
  props: {
    arr: {
      type: Array,
      default: []
    }
  },
  setup(props,{emit}) {
    console.log(props.arr.value);
    const changeParent = () => {
      // props.age = 100//readonly
      emit("changeParent", 200)
    }
    return changeParent
  }
})
</script>
<style scoped>
#Home {
  padding: 5px;
  margin: 5px;
  border: 1px solid red;
}
</style>
