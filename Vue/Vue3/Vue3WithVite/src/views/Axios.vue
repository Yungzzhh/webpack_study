<template></template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from '../utils/axios'

export default defineComponent({
  setup() {
    axios
      .get('/users/XPoet')
      .then((result) => {
        console.log('result:', result)
      })
      .catch((err) => {
        console.log('err:', err)
      })
  }
})
</script>
