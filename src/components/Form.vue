<template>
  <main class="lab-page">
    <div class="container mt-5 px-3">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-11 col-md-10 col-lg-9 col-xl-8">
          <section class="form">
            <h1>User Information Form</h1>

            <form class="card form-card border-0 shadow-sm" @submit.prevent="submitForm">
              <div class="card-body p-4 p-md-5">
                <div class="row g-4 text-start">
                  <div class="col-6 col-sm-6 col-md-6">
                    <label for="username" class="form-label">Username</label>
                    <input
                      type="text"
                      class="form-control form-control-lg"
                      id="username"
                      name="username"
                      v-model="formData.username"
                      required
                    />
                  </div>

                  <div class="col-6 col-sm-6 col-md-6">
                    <label for="password" class="form-label">Password</label>
                    <input
                      type="password"
                      class="form-control form-control-lg"
                      id="password"
                      name="password"
                      v-model="formData.password"
                      required
                    />
                  </div>

                  <div class="col-6 col-sm-6 col-md-6">
                    <div class="form-check resident-check pt-0 pt-md-5">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="isAustralian"
                        name="isAustralian"
                        v-model="formData.isAustralian"
                      />
                      <label for="isAustralian" class="form-check-label">
                        Australian Resident?
                      </label>
                    </div>
                  </div>

                  <div class="col-6 col-sm-6 col-md-6">
                    <label for="gender" class="form-label">Gender</label>
                    <select
                      class="form-select form-select-lg"
                      id="gender"
                      v-model="formData.gender"
                    >
                      <option disabled value="">Please select</option>
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div class="col-12">
                    <label for="reason" class="form-label">Reason for joining</label>
                    <textarea
                      class="form-control"
                      id="reason"
                      name="reason"
                      rows="4"
                      v-model="formData.reason"
                    ></textarea>
                  </div>
                </div>

                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mt-4">
                  <button type="submit" class="btn btn-primary me-sm-2">
                    Submit
                  </button>
                  <button type="button" class="btn btn-secondary" @click="clearForm">
                    Clear
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>

      <div class="row mt-5" v-if="submittedCards.length">
        <div class="col-12">
          <div class="d-flex flex-wrap justify-content-start">
            <div
              v-for="(card, index) in submittedCards"
              :key="index"
              class="card user-card m-2"
              style="width: 18rem;"
            >
              <div class="card-header">User Information</div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Username: {{ card.username }}</li>
                <li class="list-group-item">Password: {{ card.password }}</li>
                <li class="list-group-item">
                  Australian Resident: {{ card.isAustralian ? 'Yes' : 'No' }}
                </li>
                <li class="list-group-item">Gender: {{ card.gender }}</li>
                <li class="list-group-item">Reason: {{ card.reason }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const emptyForm = () => ({
  username: '',
  password: '',
  isAustralian: false,
  reason: '',
  gender: '',
})

const formData = ref(emptyForm())
const submittedCards = ref([])

const submitForm = () => {
  submittedCards.value.push({
    ...formData.value,
  })
}

const clearForm = () => {
  formData.value = emptyForm()
}
</script>

<style scoped>
.form-card,
.user-card {
  border-radius: 10px;
}

.form-label,
.form-check-label {
  font-size: 1.25rem;
}

.resident-check {
  display: flex;
  align-items: center;
  min-height: 100%;
}

.resident-check .form-check-input {
  width: 1.35rem;
  height: 1.35rem;
  margin-right: 0.75rem;
}

.btn {
  font-size: 1.1rem;
  padding: 0.65rem 1.3rem;
}

.user-card {
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.user-card .card-header {
  background-color: #275fda;
  color: white;
  padding: 10px;
  border-radius: 10px 10px 0 0;
  font-weight: 700;
}

.user-card .list-group-item {
  padding: 10px;
}
</style>
