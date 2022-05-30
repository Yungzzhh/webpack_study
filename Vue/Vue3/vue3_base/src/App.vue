<template>
  <div>
    <div id="nav">
      <div>{{ nickName }}:{{ age }}</div>
      <div>{{ year }}</div>
      <!-- <div>{{ room.attrs.size }}</div> -->
    </div>
    <HooksExp></HooksExp>
  </div>
  <!-- <router-view/> -->
</template>

<script>
import { defineComponent, reactive, readonly, ref, toRefs, watch, watchEffect  } from "vue";

import HooksExp from './components/HooksExp.vue'


export default defineComponent({
  components: {
    HooksExp
  },
  // setup内部不可以使用this是因为组件实例还没有被创建出来；
  setup() {
    const state = reactive({ nickName: "john", age: 18 });
    const year = ref(0);
    setTimeout(() => {
      state.age++;
      year.value++;
    }, 1000);

    // 侦听reactive数据
    // watch(
    //   () => state.age,
    //   (cur, pre) => {
    //     console.log("newVal:", cur);
    //     console.log("oldVal:", pre);
    //   }
    // )

    // 侦听ref数据
    // watch(year, (cur, pre) => {
    //   console.log("newVal:", cur);
    //   console.log("oldVal:", pre);
    // })

    // 侦听多组数据
    // watch([() => state.age, year], ([curAge, newVal], [preAge, oldVal]) => {
    //   console.log("新值:", curAge, "老值:", preAge);
    //   console.log("新值:", newVal, "老值:", oldVal);
    // });

    // 侦听嵌套对象
    // const state1 = reactive({
    //   room: {
    //     id:1,
    //     attrs: {
    //       size:'1140m',
    //       type:'三室两厅'
    //     }
    //   }
    // })

    // setTimeout(()=> {
    //   state1.room.attrs.type = '112233'
    // }, 2000)

    // 深度监听
    // watch(
    //   () => state1.room.attrs.type,
    //   (newType, oldType) => {
    //     // console.log(newType.type);
    //     console.log("新值:", newType, "老值:", oldType);
    //   },
    //   { deep: true,immediate: true }
    //   // stopWatchRoom()停止监听
    // );

    // watchEffect(() => {
    //   console.log(state.age);
    //   console.log(year.value);
    // })
    // watchEffect 不需要手动传入依赖
    // watchEffect 会先执行一次用来自动收集依赖
    // watchEffect 无法获取到变化前的值， 只能获取变化后的值
    return {
      ...toRefs(state),
      year,
      // ...toRefs(state1)
    };
  },
  
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  border: 1px solid red;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.homePage {
  margin: 5px;
  padding: 5px;
  border: 1px solid blue;
}
</style>
