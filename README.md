# CalorieTracker

A React-based web application designed to help users monitor and track their daily calorie intake efficiently. 
The app features a clean and responsive user interface styled with Tailwind CSS, providing a seamless user experience.

## Features

- **Calorie Logging:**
  - Add food items and their calorie values.
  - Automatically calculates the total calorie intake for the day.

- **Data Grouping:**
  - Organize food entries by date to visualize daily consumption effectively.

- **Persistent State:**
  - Utilizes LocalStorage to save user data locally, ensuring state persistence across sessions.

- **Responsive Design:**
  - Styled using Tailwind CSS for a clean and mobile-friendly interface.

## Tech Stack

- **Frontend:**
  - [React](https://reactjs.org/) for building the user interface.
  - [React Modal](https://github.com/reactjs/react-modal) for creating modals.

- **Styling:**
  - [Tailwind CSS](https://tailwindcss.com/) for modern, utility-first styling.

- **Build Tool:**
  - [Vite](https://vitejs.dev/) for fast development and production builds.

- **Hosting:**
  - [Vercel](https://vercel.com/) for deployment.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/GADMuhammad/CalorieTracker.git
   ```

2. Navigate to the project directory:
   ```bash
   cd CalorieTracker
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open the application in your browser at:
   ```
   http://localhost:5173
   ```

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run preview`: Previews the production build.
- `npm run lint`: Lints the codebase.

## Deployment

This application is deployed on [Vercel](https://vercel.com/). To deploy your own version:

1. Link the repository to your Vercel account.
2. Set the build command as:
   ```bash
   npm run build
   ```
3. Set the output directory as `dist`.

## Issues

### Deployment Issue
If you encounter issues during deployment, ensure:
- The correct Node.js version is specified in the project (e.g., Node.js 18.x).
- All dependencies are up to date.
- Vite is correctly configured for the project.

### Missing Tailwind Styles on Deployment
If Tailwind styles disappear upon deployment:
- Ensure `tailwindcss` is listed in `dependencies` (not `devDependencies`).
- Confirm the `vite.config.js` file is correctly set up for production.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Feel free to contribute by opening issues or submitting pull requests!
