# FSC E-commerce 🚀

A modern and scalable e-commerce project developed during the **Full-Stack Club** training. The goal is to deliver a smooth shopping experience, using the latest technologies from the React ecosystem and robust integration with Firebase.

## 🛠️ Technologies and Tools

- **Core:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Backend as a Service:** [Firebase](https://firebase.google.com/) (Authentication, Firestore, Storage)
- **Linting & Formatting:** [ESLint 9](https://eslint.org/) + [Prettier](https://prettier.io/)
- **Workflow:** [Husky](https://typicode.github.io/husky/) + [Lint-staged](https://github.com/okonet/lint-staged) + [Commitlint](https://commitlint.js.org/)

## 📂 Folder Structure

```text
src/
├── @types/          # Global type definitions
├── assets/          # Images, icons, and fonts
├── components/      # Reusable components (UI)
├── contexts/        # React contexts (Auth, Cart, etc.)
├── hooks/           # Custom hooks
├── pages/           # Page components (routes)
├── services/        # Integration with Firebase and external APIs
└── utils/           # Utility functions and helpers
```

## ⚙️ How to run

1.  Clone the repository:
    ```bash
    git clone https://github.com/adrjmiranda/fsc-ecommerce.git
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    ```

## 📝 Commit Standards

This project uses **Husky** and **Commitlint** to enforce Conventional Commits.

- Header limit: 70 characters.
- Format: `type: description` (all lowercase, no period at the end).

---

Developed by [Adriano Miranda](https://github.com/adrjmiranda) during the Full-Stack Club journey.
