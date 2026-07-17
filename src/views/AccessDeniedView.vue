<template>
  <main class="container py-5">
    <section class="mx-auto denied-panel text-center">
      <p class="lab-label">Route Guard</p>
      <h1>Access Denied</h1>
      <p class="lead">
        Please log in before opening the protected About page.
      </p>
      <div class="d-flex justify-content-center gap-2">
        <RouterLink class="btn btn-primary" :to="{ name: 'Login', query: $route.query }">
          Go to Login
        </RouterLink>
        <RouterLink class="btn btn-secondary" :to="{ name: 'Home' }">
          Back Home
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.denied-panel {
  max-width: 620px;
}
</style>
