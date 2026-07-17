<template>
  <nav class="navbar navbar-expand-lg bg-white border-bottom shadow-sm">
    <div class="container">
      <RouterLink class="navbar-brand fw-bold" :to="{ name: 'Home' }">
        htan-library
      </RouterLink>

      <div class="navbar-nav flex-row gap-3">
        <RouterLink class="nav-link" :to="{ name: 'Home' }">Home</RouterLink>
        <RouterLink class="nav-link" :to="{ name: 'About' }">About</RouterLink>
        <RouterLink class="nav-link" :to="{ name: 'LibraryData' }">
          Library Data
        </RouterLink>
      </div>

      <div class="d-flex align-items-center gap-2 ms-auto">
        <span v-if="isAuthenticated" class="small text-muted">
          Signed in as {{ currentUser }}
        </span>
        <button
          v-if="isAuthenticated"
          type="button"
          class="btn btn-outline-secondary btn-sm"
          @click="logoutAndReturnHome"
        >
          Logout
        </button>
        <RouterLink
          v-else
          class="btn btn-primary btn-sm"
          :to="{ name: 'Login' }"
        >
          Login
        </RouterLink>
      </div>
    </div>
  </nav>

  <RouterView />
</template>

<script setup>
import { useRouter } from 'vue-router'
import { currentUser, isAuthenticated, logout } from './auth'

const router = useRouter()

const logoutAndReturnHome = () => {
  logout()
  router.push({ name: 'Home' })
}
</script>
