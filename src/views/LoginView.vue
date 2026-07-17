<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { login, loginError } from '../auth'

const route = useRoute()
const router = useRouter()
const username = ref('')
const password = ref('')

const submitLogin = () => {
  if (login(username.value, password.value)) {
    router.push(route.query.redirect || { name: 'About' })
  }
}
</script>

<template>
  <main class="container py-5">
    <section class="mx-auto login-panel">
      <p class="lab-label">Custom Routing</p>
      <h1>Login</h1>
      <p class="text-muted">Use student / Library123! for the lab demo.</p>

      <form class="card border-0 shadow-sm" @submit.prevent="submitLogin">
        <div class="card-body p-4">
          <div class="mb-3 text-start">
            <label for="login-username" class="form-label">Username</label>
            <input
              id="login-username"
              v-model.trim="username"
              class="form-control"
              type="text"
            />
          </div>

          <div class="mb-3 text-start">
            <label for="login-password" class="form-label">Password</label>
            <input
              id="login-password"
              v-model="password"
              class="form-control"
              type="password"
            />
          </div>

          <div v-if="loginError" class="alert alert-danger" role="alert">
            {{ loginError }}
          </div>

          <button class="btn btn-primary" type="submit">Login</button>
        </div>
      </form>
    </section>
  </main>
</template>

<style scoped>
.login-panel {
  max-width: 520px;
  text-align: center;
}
</style>
