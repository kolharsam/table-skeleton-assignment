This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm install && npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Assignment Notes

- I have added new components that help in building the `FormBuilder` component.
- New components are:
  - `TextBox` - [src/app/modules/formBuilder/components/text.jsx](text.jsx)
  - `Select` - [src/app/modules/formBuilder/components/select.jsx](select.jsx)
  - `MultiSelect` - [src/app/modules/formBuilder/components/multi-select.jsx](multi-select.jsx)
  - `Checkbox` - [src/app/modules/formBuilder/components/checkbox.jsx](checkbox.jsx)
  - `Button` - [src/app/modules/formBuilder/components/button.jsx](button.jsx)
  - `Label` - [src/app/modules/formBuilder/components/label.jsx](label.jsx)
- I have added jest tests for each ofthe form builder components.
