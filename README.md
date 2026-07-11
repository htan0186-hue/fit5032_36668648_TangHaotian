# htan-library

VueJS library web application for FIT5032 Assessed Lab 3.

The app demonstrates:

- Bootstrap 5 setup in Vue 3
- form styling with CSS selectors
- Bootstrap form controls
- Vue `v-model` form binding
- form submission with Bootstrap cards
- clear button form reset
- Bootstrap breakpoint classes for responsive devices

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

- `src/components/Form.vue` - main Lab 3 component with Activities 1-7.
- `src/style.css` - custom CSS for Activity 3 selectors.
- `src/main.js` - imports Bootstrap 5 CSS and the project CSS.
- `src/App.vue` - renders the `Form.vue` component.
- `src/components/JSON.vue` - previous Lab 2 component, kept in the project but not rendered.

## Lab 3 Features

- Activity 1 creates and renders `Form.vue`.
- Activity 2 adds username, password, resident, reason, and gender fields.
- Activity 3 styles the form with tag, class, ID, and attribute selectors.
- Activity 4 installs and imports Bootstrap 5.
- Activity 5 applies Bootstrap form, grid, and button classes.
- Activity 6 displays submitted user information in Bootstrap cards.
- Activity 7 uses Bootstrap breakpoints such as `col-12`, `col-sm-10`, `col-md-8`, and `col-lg-6`.

## Screenshot Guide

For the PDF report, capture:

1. One or more screenshots showing the Bootstrap-powered form with Activities 1-6 completed.
2. A screenshot after submitting the form, showing the Bootstrap user information card.
3. Screenshots showing the form on different device widths for Activity 7.
4. A screenshot of `src/components/Form.vue` showing the Bootstrap breakpoint classes.
5. A screenshot of the GitHub commit/history page after pushing the project update.
