import { ref, computed } from "vue";
import { StorageSerializers, useStorage } from "@vueuse/core";
import { ElMessage } from "element-plus";
const user = useStorage('user', null, undefined, {
  serializer: StorageSerializers.object
})

export const useUser = () => {
  const loginModel = ref({
    username: "",
    password: "",
  })

  const login = async () => {
    user.value = {id:1, username: loginModel.value.username}
    ElMessage.success("success")
  }
  const loggedIn = computed(() => user.value?.id)
  const logout = async () => {
    user.value = null
    ElMessage.success("Logout!!")
  }
  return {
    loginModel,
    user,
    login,
    loggedIn,
    logout
  }
}