# Blog Application with Next.js 15 and React Query

## Project Description

This project is a blog application built with Next.js 15, demonstrating proficiency in server-side rendering (SSR) and modern React features. The application fetches blog posts from a mock API and provides a user interface to display a list of posts, view individual post details through dynamic routing, and filter posts using a search bar. A key objective was to replicate the UI design provided in a Dribbble shot, focusing on achieving visual accuracy, including spacing and font sizes. The project leverages React Query for data fetching and state management, and Tailwind CSS for responsive styling.

## Features

*   **Server-Side Rendering (SSR):** The homepage utilizes SSR to pre-fetch blog posts, improving initial load performance and SEO.
*   **Dynamic Routing:** Individual blog posts are accessible via dynamic routes (`/blog/[id]`), allowing for unique URLs for each post.
*   **Data Fetching with React Query:** Blog posts are fetched from a mock API using React Query, providing efficient caching, background updates, and simplified state management.
*   **Search Functionality:** A search bar allows users to dynamically filter the list of blog posts based on their input.
*   **Responsive Design:** The application is styled using Tailwind CSS to ensure a responsive layout across various devices.
*   **UI Replication:** The design aims to closely match the provided Dribbble UI design for the blog page.

## Technologies Used

*   **Next.js 15:** React framework for building server-side rendered applications.
*   **React Query:** Powerful library for fetching, caching, and updating asynchronous data in React.
*   **Tailwind CSS:** Utility-first CSS framework for rapid and responsive styling.
*   **React:** JavaScript library for building user interfaces.
*   **TypeScript:** Typed superset of JavaScript for improved code quality and maintainability.
*   **Mock API (e.g., mockapi.io):** Used as the data source for blog posts.

## Installation

1.  **Clone the repository:**



First, run the development server:

```bash
npm run dev
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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
