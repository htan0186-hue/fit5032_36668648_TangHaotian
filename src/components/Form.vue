<template>
  <main class="lab-page">
    <div class="container mt-5 px-3">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-11 col-md-10 col-lg-9 col-xl-8">
          <section class="form">
            <p class="lab-label">FIT5032 Assessed Lab 5</p>
            <h1>User Information Form</h1>
            <p class="text-muted mb-4">
              Validation is handled with Vue events, including password
              confirmation and submitted records in a PrimeVue DataTable.
            </p>

            <form
              class="card form-card border-0 shadow-sm"
              novalidate
              @submit.prevent="submitForm"
            >
              <div class="card-body p-4 p-md-5">
                <div class="row g-4 text-start">
                  <div class="col-6 col-sm-6 col-md-6">
                    <label for="username" class="form-label">Username</label>
                    <input
                      type="text"
                      class="form-control form-control-lg"
                      :class="{ 'is-invalid': errors.username }"
                      id="username"
                      name="username"
                      v-model.trim="formData.username"
                      @blur="() => validateName(true)"
                      @input="() => validateName(false)"
                    />
                    <div v-if="errors.username" class="text-danger small mt-1">
                      {{ errors.username }}
                    </div>
                  </div>

                  <div class="col-6 col-sm-6 col-md-6">
                    <label for="password" class="form-label">Password</label>
                    <input
                      type="password"
                      class="form-control form-control-lg"
                      :class="{ 'is-invalid': errors.password }"
                      id="password"
                      name="password"
                      v-model="formData.password"
                      @blur="() => validatePassword(true)"
                      @input="() => validatePassword(false)"
                    />
                    <div v-if="errors.password" class="text-danger small mt-1">
                      {{ errors.password }}
                    </div>
                  </div>

                  <div class="col-6 col-sm-6 col-md-6">
                    <label for="confirm-password" class="form-label">
                      Confirm password
                    </label>
                    <input
                      type="password"
                      class="form-control form-control-lg"
                      :class="{ 'is-invalid': errors.confirmPassword }"
                      id="confirm-password"
                      name="confirm-password"
                      v-model="formData.confirmPassword"
                      @blur="() => validateConfirmPassword(true)"
                    />
                    <div v-if="errors.confirmPassword" class="text-danger small mt-1">
                      {{ errors.confirmPassword }}
                    </div>
                  </div>

                  <div class="col-6 col-sm-6 col-md-6">
                    <div class="form-check resident-check pt-0 pt-md-5">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        :class="{ 'is-invalid': errors.isAustralian }"
                        id="isAustralian"
                        name="isAustralian"
                        v-model="formData.isAustralian"
                        @blur="() => validateResident(true)"
                        @change="() => validateResident(false)"
                      />
                      <label for="isAustralian" class="form-check-label">
                        Australian Resident?
                      </label>
                    </div>
                    <div v-if="errors.isAustralian" class="text-danger small mt-1 text-start">
                      {{ errors.isAustralian }}
                    </div>
                  </div>

                  <div class="col-6 col-sm-6 col-md-6">
                    <label for="gender" class="form-label">Gender</label>
                    <select
                      class="form-select form-select-lg"
                      :class="{ 'is-invalid': errors.gender }"
                      id="gender"
                      v-model="formData.gender"
                      @blur="() => validateGender(true)"
                      @change="() => validateGender(false)"
                    >
                      <option disabled value="">Please select</option>
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                      <option value="other">Other</option>
                    </select>
                    <div v-if="errors.gender" class="text-danger small mt-1">
                      {{ errors.gender }}
                    </div>
                  </div>

                  <div class="col-6 col-sm-6 col-md-6">
                    <label for="suburb" class="form-label">Suburb</label>
                    <input
                      type="text"
                      class="form-control form-control-lg"
                      id="suburb"
                      name="suburb"
                      :value="formData.suburb"
                    />
                    <div class="small text-muted mt-1">
                      One-way binding for Vue DevTools testing.
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="reason" class="form-label">Reason for joining</label>
                    <textarea
                      class="form-control"
                      :class="{ 'is-invalid': errors.reason }"
                      id="reason"
                      name="reason"
                      rows="4"
                      v-model.trim="formData.reason"
                      @blur="() => validateReason(true)"
                      @input="() => validateReason(false)"
                    ></textarea>
                    <div class="d-flex justify-content-between">
                      <div v-if="errors.reason" class="text-danger small mt-1">
                        {{ errors.reason }}
                      </div>
                      <div v-else-if="reasonFriendMessage" class="text-success small mt-1">
                        {{ reasonFriendMessage }}
                      </div>
                      <div v-else class="small text-muted mt-1">
                        Minimum 10 characters.
                      </div>
                      <div class="small text-muted mt-1">
                        {{ formData.reason.length }}/200
                      </div>
                    </div>
                  </div>
                </div>

                <div class="validation-summary mt-4 text-start">
                  <strong>Validation rules:</strong>
                  <span>username length</span>
                  <span>password strength</span>
                  <span>password confirmation</span>
                  <span>resident confirmation</span>
                  <span>gender selection</span>
                  <span>reason length</span>
                  <span>friend keyword response</span>
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

      <section class="row mt-5" v-if="submittedUsers.length">
        <div class="col-12">
          <div class="card data-card border-0 shadow-sm">
            <div class="card-body">
              <h2 class="h4 mb-3">Submitted User Information</h2>
              <DataTable
                :value="submittedUsers"
                stripedRows
                paginator
                :rows="5"
                responsiveLayout="scroll"
                tableStyle="min-width: 48rem"
              >
                <Column field="username" header="Username" sortable />
                <Column field="maskedPassword" header="Password" />
                <Column field="suburb" header="Suburb" sortable />
                <Column field="residentLabel" header="Australian Resident" sortable />
                <Column field="gender" header="Gender" sortable />
                <Column field="reason" header="Reason" />
              </DataTable>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { computed, ref } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

const emptyForm = () => ({
  username: '',
  password: '',
  confirmPassword: '',
  isAustralian: false,
  suburb: 'Clayton',
  reason: '',
  gender: '',
})

const emptyErrors = () => ({
  username: null,
  password: null,
  confirmPassword: null,
  isAustralian: null,
  gender: null,
  reason: null,
})

const formData = ref(emptyForm())
const errors = ref(emptyErrors())
const submittedUsers = ref([])

const reasonFriendMessage = computed(() => {
  return formData.value.reason.toLowerCase().includes('friend')
    ? 'Great to have a friend'
    : ''
})

const validateName = (blur) => {
  if (formData.value.username.length < 3) {
    if (blur) errors.value.username = 'Name must be at least 3 characters'
    return false
  }

  errors.value.username = null
  return true
}

const validatePassword = (blur) => {
  const password = formData.value.password
  const minLength = password.length >= 8
  const hasUppercase = /[A-Z]/.test(password)
  const hasLowercase = /[a-z]/.test(password)
  const hasNumber = /\d/.test(password)
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)

  if (!minLength || !hasUppercase || !hasLowercase || !hasNumber || !hasSpecialChar) {
    if (blur) {
      errors.value.password =
        'Password needs 8+ characters, uppercase, lowercase, number and special character'
    }
    return false
  }

  errors.value.password = null
  validateConfirmPassword(false)
  return true
}

const validateConfirmPassword = (blur) => {
  if (formData.value.password !== formData.value.confirmPassword) {
    if (blur) errors.value.confirmPassword = 'Passwords do not match.'
    return false
  }

  errors.value.confirmPassword = null
  return true
}

const validateResident = (blur) => {
  if (!formData.value.isAustralian) {
    if (blur) errors.value.isAustralian = 'Please confirm Australian residency'
    return false
  }

  errors.value.isAustralian = null
  return true
}

const validateGender = (blur) => {
  if (!formData.value.gender) {
    if (blur) errors.value.gender = 'Please select a gender'
    return false
  }

  errors.value.gender = null
  return true
}

const validateReason = (blur) => {
  if (formData.value.reason.length < 10) {
    if (blur) errors.value.reason = 'Reason must be at least 10 characters'
    return false
  }

  if (formData.value.reason.length > 200) {
    errors.value.reason = 'Reason must be 200 characters or fewer'
    return false
  }

  errors.value.reason = null
  return true
}

const validateForm = () => {
  const nameValid = validateName(true)
  const passwordValid = validatePassword(true)
  const confirmPasswordValid = validateConfirmPassword(true)
  const residentValid = validateResident(true)
  const genderValid = validateGender(true)
  const reasonValid = validateReason(true)

  return (
    nameValid &&
    passwordValid &&
    confirmPasswordValid &&
    residentValid &&
    genderValid &&
    reasonValid
  )
}

const submitForm = () => {
  if (!validateForm()) return

  submittedUsers.value.push({
    ...formData.value,
    maskedPassword: '*'.repeat(formData.value.password.length),
    residentLabel: formData.value.isAustralian ? 'Yes' : 'No',
  })

  clearForm()
}

const clearForm = () => {
  formData.value = emptyForm()
  errors.value = emptyErrors()
}
</script>

<style scoped>
.form-card,
.data-card {
  border-radius: 10px;
}

.lab-label {
  color: #275fda;
  font-weight: 700;
  margin-bottom: 0;
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

.validation-summary {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  color: #4b566b;
}

.validation-summary span {
  border-radius: 999px;
  padding: 4px 10px;
  background: #eef2ff;
}
</style>
