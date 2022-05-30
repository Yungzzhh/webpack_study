<script setup lang="ts">
import {useUser} from "@/hooks/useUser"
const {loggedIn, login, loginModel, logout, user} = useUser()
</script>

<template>
  <div class="container">
    <h1>login</h1>
    <p v-if="loggedIn">Welcome {{user?.username}},
      <a href="#" @click.prevent="logout">logout</a>
    </p>
    <el-form v-if="!loggedIn" ref="form" :model="loginModel" label-width="80px">
      <el-form-item label="Username">
        <el-input v-model="loginModel.username" placeholder="Username"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="loginModel.password" type="password" placeholder="Password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .container {
    min-height: 100vh;
    display: flex;
    align-items: center
  }
}
</style>
