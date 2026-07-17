<template>
  <main class="container py-5">
    <section class="mx-auto about-panel">
      <p class="lab-label">Protected Route</p>
      <h1>About the Library</h1>
      <p class="lead">
        This page is only available after login. It demonstrates Vue Router
        navigation guards and conditional access control for FIT5032 Lab 5.
      </p>
      <p>
        The library app collects validated user information, displays submitted
        records with PrimeVue DataTable, and protects selected routes with a
        simple authenticated state.
      </p>
    </section>
  </main>
</template>

<style scoped>
.about-panel {
  max-width: 760px;
}
</style>
