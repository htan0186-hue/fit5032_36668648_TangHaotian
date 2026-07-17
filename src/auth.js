import { ref } from 'vue'

export const isAuthenticated = ref(false)
export const currentUser = ref('')
export const loginError = ref('')

const validUsername = 'student'
const validPassword = 'Library123!'

export const login = (username, password) => {
  if (username === validUsername && password === validPassword) {
    isAuthenticated.value = true
    currentUser.value = username
    loginError.value = ''
    return true
  }

  isAuthenticated.value = false
  currentUser.value = ''
  loginError.value = 'Invalid username or password.'
  return false
}

export const logout = () => {
  isAuthenticated.value = false
  currentUser.value = ''
  loginError.value = ''
}
