# VidFlow - Instagram Video Downloader

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

VidFlow is a modern web application for downloading Instagram videos, built with Next.js and featuring a clean, responsive interface. This project demonstrates modern web development techniques including server-side rendering, API integration, state management, and beautiful UI design.

**Disclaimer:** This tool is intended for educational purposes only. Downloading videos from Instagram may violate their Terms of Service. Please respect copyright laws and the platform's policies. Use this tool responsibly and only for content you have the right to download.

🚀 **Live Demo:** [Deploy on Vercel](https://vercel.com/new/clone?repository-url=https://github.com/blackridder22/VidFlow.git)

📱 **Repository:** [https://github.com/blackridder22/VidFlow.git](https://github.com/blackridder22/VidFlow.git)

## ✨ Features

- **Download Instagram Videos:** Input an Instagram video URL to fetch and
  download the video file. (Note: Functionality depends on the backend
  implementation, which isn't detailed here but is a core part of the learning
  experience).
- **Modern Frontend Stack:** Built with the latest Next.js (App Router).
- **Clean UI:** User interface crafted using [Shadcn/ui](https://ui.shadcn.com/)
  components and styled with Tailwind CSS v4.
- **Responsive Layout:** Ensures a consistent and user-friendly experience
  across different screen sizes.
- **Type-Safe:** Written entirely in TypeScript.
- **Form Handling & Validation:** Robust input handling using React Hook Form
  and Zod for schema validation.
- **Client-Side Caching:** Efficient data fetching and state management with
  TanStack Query (React Query).
- **Theming:** Supports light and dark mode using `next-themes`.
- **English Interface:** Clean, user-friendly English-only interface.
- **User Feedback:** Uses `sonner` for toast notifications.
- **Optimized Development:** Utilizes Next.js Turbopack (`--turbopack`) for
  faster development builds.

## 📚 Educational Goals

This project serves as a learning resource for understanding:

- **Next.js Fundamentals:** App Router, Server Components, Client Components,
  API Routes (if implemented for backend logic), SSR/SSG concepts.
- **UI Development:** Building composable and accessible UI components with
  Shadcn/ui, Radix UI primitives, and Tailwind CSS utility classes.
- **State Management:** Managing server state, caching, and background updates
  with TanStack Query.
- **Form Management:** Implementing complex forms with validation using React
  Hook Form and Zod.
- **API Integration:** Fetching data from external sources or custom backend
  endpoints. (The specifics of interacting with Instagram are a key learning
  challenge).
- **TypeScript:** Leveraging static typing in a full-stack React framework.
- **Modern Styling:** Using Tailwind CSS v4 features and utilities like `clsx`
  and `tailwind-merge`.
- **Clean Interface:** Building intuitive and accessible user interfaces.
- **Project Structure & Tooling:** Organizing a Next.js application, using
  ESLint and Prettier for code quality.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (v15+)
- **UI Library:** [Shadcn/ui](https://ui.shadcn.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Component Primitives:** [Radix UI](https://www.radix-ui.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Data Fetching:**
  [TanStack Query (React Query)](https://tanstack.com/query/latest) (v5)
- **Form Handling:** [React Hook Form](https://react-hook-form.com/) (v7)
- **Schema Validation:** [Zod](https://zod.dev/)
- **Deployment:** [Vercel](https://vercel.com/) with optimized configuration
- **Theming:** [next-themes](https://github.com/pacocoursey/next-themes)
- **Notifications:** [Sonner](https://sonner.emilkowal.ski/)
- **Linting/Formatting:** ESLint, Prettier
- **Package Manager:** npm

## 🚀 Getting Started

Follow these steps to set up and run the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/blackridder22/VidFlow.git
   ```

   ```bash
   cd VidFlow
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   - The application should now be running on
     [http://localhost:3000](http://localhost:3000).

4. **Build for production:**

   ```bash
   npm run build
   ```

5. **Start the production server:**

   ```bash
   npm run start
   ```

## 🚀 Deployment

This project is configured for easy deployment on Vercel:

1. **Deploy to Vercel:**
   - Push your code to GitHub
   - Connect your repository to Vercel
   - Vercel will automatically detect Next.js and deploy

2. **Manual Deployment:**
   ```bash
   npm i -g vercel
   vercel --prod
   ```

The project includes a `vercel.json` configuration file for optimized deployment settings.

## 💡 Usage

1. Open the application in your web browser.
2. Find the Instagram video you wish to download and copy its URL.
3. Paste the URL into the input field on the application's main page.
4. Click the "Download" button.
5. If successful, a download link or button for the video file should appear.

## 🤝 Contributing

As this is primarily an educational project, contributions might focus on
improving code clarity, adding explanations, fixing bugs, or exploring
alternative approaches to the problems tackled.

If you'd like to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a Pull Request.

## 📜 License

This project is licensed under the MIT License - see the `LICENSE.md` file for
details.

---

Happy Coding! Remember to use this project responsibly and focus on the learning
aspects.
