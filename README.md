# htan-library

VueJS library web application for FIT5032 Assessed Lab 4.

The app demonstrates:

- Bootstrap 5 setup in Vue 3
- Bootstrap form controls
- Vue `v-model` form binding
- Vue/JavaScript form validation
- extra validation rules for distinction-level requirements
- PrimeVue setup with Aura theme
- PrimeVue DataTable for submitted user information

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

- `src/components/Form.vue` - main Lab 4 component with validation and DataTable.
- `src/style.css` - custom CSS for Activity 3 selectors.
- `src/main.js` - imports Bootstrap, configures PrimeVue, and imports project CSS.
- `src/App.vue` - renders the `Form.vue` component.
- `src/components/JSON.vue` - previous Lab 2 component, kept in the project but not rendered.

## Lab 4 Features

- Activity 1 runs the existing user information form.
- Activity 2 demonstrates the need for validation from the original form workflow.
- Activity 3 implements Vue validation with reactive error messages.
- Task 4.2 includes extra validations so the form has five or more validation checks.
- PrimeVue DataTable displays submitted user information after successful validation.

## Screenshot Guide

For the PDF report, capture:

1. Screenshots showing validation enabled for Activities 1-3.
2. Screenshots demonstrating extra validation rules.
3. A screenshot showing PrimeVue DataTable with submitted user information.
4. A screenshot of `src/components/Form.vue` showing validation and DataTable code.
5. A screenshot of the GitHub commit/history page after pushing the project update.
