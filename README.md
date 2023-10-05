# HOW TO SETUP - when using in project

Add this to .npmrc

@{group}:registry=https://gitlab.init.hr/api/v4/projects/${PROJECT_ID}/packages/npm/

//gitlab.init.hr/api/v4/projects/${PROJECT_ID}/packages/npm/:_authToken=${YOUR_AUTH_TOKEN}

## Dependencies

1. Install react-hook-forms
2. Install clsx
3. Install tailwind
4. Install tailwind form plugin
5. Add taiwlind conf as this:

```js
/** @type {import('tailwindcss').Config} */ module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/@init/**/*.{js,jsx,ts,tsx'],
  theme: { extend: {} },
  plugins: [require('@tailwindcss/forms')],
};
```

6. Install tailwind-merge
