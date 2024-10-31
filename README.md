# Building Static and Dynamic Pages with Next.js: When to Choose Which
This repository contains all code examples from the LinkedIn article **"Building Static and Dynamic Pages with Next.js: When to Choose Which?"**. The article explores best practices for setting up static and dynamic pages in **Next.js 15** using the **App Router** with TypeScript, and how to optimize each approach for speed, flexibility, and user experience.

## 📖 Overview
The primary goal of this repository is to demonstrate when to use static pages, dynamic pages, or a hybrid approach in Next.js, along with practical examples. You’ll find TypeScript-based examples that highlight best practices for React 18 and Next.js 15, focusing on:

- **Static Generation (SG)**: Pre-rendering HTML at build time for lightning-fast page loads.
- **Server-Side Rendering (SSR)**: Generating HTML on each request for user-specific or frequently changing data.
- **Incremental Static Regeneration (ISR)**: Combining the speed of static generation with the flexibility of server-side updates.

## 🛠 Features & Examples
Each approach is explained with detailed code snippets to show best practices in Next.js.

### 1. Static Generation (SG)
**Files:**
- `app/blog/[slug]/page.tsx`

This section covers the use of `generateStaticParams` to pre-render blog articles and other pages with content that doesn't change frequently. It’s ideal for **SEO-focused pages** and high-traffic, static content.

### 2. Dynamic Pages with Server-Side Rendering (SSR)
**Files:**
- `app/user/[id]/page.tsx`

Here we dive into server-side rendering, using `getServerSideProps` to fetch data on each request. This method works well for **user-specific data** and **real-time content** needs, such as user profiles or personalized dashboards.

### 3. Incremental Static Regeneration (ISR)
**Files:**
- `app/products/[id]/page.tsx`

For pages that require periodic updates, ISR is an excellent hybrid solution. This example demonstrates setting **revalidation intervals** to refresh static content automatically without a full rebuild.

---

## 📘 Usage
Explore each code example to understand how **static generation**, **SSR**, and **ISR** are implemented in Next.js with TypeScript. Each example can be found in its respective directory under `app/`.

## 📄 License
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

## 💬 Contributing
Contributions to improve these examples or add additional use cases are welcome! Please fork the repository and open a pull request with your suggestions.

Thank you for exploring these examples! For a full breakdown of best practices, check out the LinkedIn article accompanying this repository.
