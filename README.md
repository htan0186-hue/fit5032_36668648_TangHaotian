# htan-library

VueJS library web application for FIT5032 Assessed Lab 5.

The app demonstrates:

- Bootstrap 5 setup in Vue 3
- Bootstrap form controls
- Vue `v-model` form binding
- Vue/JavaScript form validation
- extra validation rules for distinction-level requirements
- PrimeVue setup with Aura theme
- PrimeVue DataTable for submitted user information
- password confirmation validation
- Vue Router navigation, protected routes, and route guards
- a one-way bound Suburb field for Vue DevTools testing

## Run the App

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the localhost URL shown in the terminal:

```text
http://127.0.0.1:5173/
```

## Build Check

To check that the Vue app builds successfully:

```bash
npm run build
```

## Important Files

- `src/components/Form.vue` - main form component with validation, password confirmation, Suburb binding and DataTable.
- `src/router/index.js` - Vue Router routes and navigation guard.
- `src/views/HomeView.vue` - Home route that renders the library form.
- `src/views/AboutView.vue` - protected About route.
- `src/views/LoginView.vue` - login page for custom routing.
- `src/views/AccessDeniedView.vue` - route guard denial page.
- `src/style.css` - custom CSS for Activity 3 selectors.
- `src/main.js` - imports Bootstrap, configures PrimeVue, installs the router, and imports project CSS.
- `src/App.vue` - renders the navigation bar and `RouterView`.
- `src/components/JSON.vue` - previous Lab 2 component, available through the Library Data route.

## Lab 5 Features

- Password confirmation displays `Passwords do not match.` when the confirmation value differs.
- The Reason field displays `Great to have a friend` when the text includes `friend`.
- The Suburb field uses one-way `:value` binding so Vue DevTools can show that typing in the input does not update `formData.suburb`.
- Home, About, Login, Access Denied, and Library Data routes are handled by Vue Router.
- The About page is protected by a navigation guard.
- Demo login credentials: `student` / `Library123!`.

## Screenshot Guide

For the PDF report, capture:

1. Home page with the modified form running on localhost.
2. Password confirmation validation showing the `Passwords do not match.` error.
3. Vue DevTools showing the component state while testing the Suburb one-way binding.
4. About page after successful login.
5. Access Denied page or custom routing flow before login.
6. Code screenshots for `src/router/index.js`, `src/App.vue`, and `src/views/HomeView.vue`, each on a new report page.
7. GitHub commit/history page after pushing the project update.
