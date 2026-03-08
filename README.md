Implemented Component Patterns
Task 01 – Static Functional Component

File: src/app/components/Hello.tsx

A basic functional component that:

Displays a welcome message

Includes a short paragraph

Uses Tailwind CSS utility classes for styling

This component is rendered on the homepage (page.tsx).

Task 02 – Component with Props

File: src/app/components/UserCard.tsx

This component demonstrates:

TypeScript interfaces for props

Required props: name and role

Optional prop with a fallback value using the ?? operator

Two UserCard components are rendered on the homepage with different values.

Task 03 – Client Component with useState

File: src/app/components/Counter.tsx

A client-side interactive component that:

Uses the useState hook to manage a counter

Includes Increment, Decrement, and Reset buttons

Prevents the count from going below zero

Task 04 – Root Layout Component

File: src/app/layout.tsx

The root layout provides shared UI across the app including:

A navigation bar with links

A main content wrapper that renders {children}

A footer with the current year

Custom metadata (title and description)

Task 05 – Async Server Component

File: src/app/posts/page.tsx

This page:

Fetches posts from the JSONPlaceholder API

Uses Incremental Static Regeneration (ISR) with revalidate: 60

Displays the first 10 posts with title and preview text

Task 06 – Dynamic Route Component

File: src/app/posts/[id]/page.tsx

This dynamic route:

Receives the id parameter

Fetches and displays a single post

Shows the post title, body, and userId

Includes a back link to /posts

Uses generateStaticParams to pre-render the first 10 posts

Task 07 – Server Action (Contact Form)

File: src/app/contact/page.tsx

This page includes a server-side form that:

Uses a Server Action

Extracts form data using FormData

Logs submitted values to the console

Calls revalidatePath after submission

Task 08 – Suspense and Loading UI

Files:

src/app/posts/loading.tsx

Suspense used inside posts/page.tsx

This task demonstrates:

React Suspense boundaries

Streaming UI rendering

A loading skeleton while data is being fetched

Task 09 – Middleware (Route Protection)

File: middleware.ts

The middleware:

Protects routes from unauthorized access

Checks for an auth-token cookie

Redirects unauthenticated users to /login

Excludes _next and static assets

A simple login page is located at:
src/app/login/page.tsx

Task 10 – Custom Hook and Context (Shopping Cart)

File: src/lib/cart-context.tsx

This task implements global state using React Context.

Features include:

Cart items storage

Total price calculation

addItem and removeItem functions

Custom hook useCart

The cart provider wraps the root layout.

A sample shop page is available at:
src/app/shop/page.tsx

Users can add products to the cart and view the cart summary in the navigation bar.
