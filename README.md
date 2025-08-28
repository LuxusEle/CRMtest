# Cabinetrics Frontend: Backend Integration Guide

This guide provides instructions for backend developers on how to connect this Next.js frontend application to your backend services.

## Tech Stack

- **Framework:** Next.js (using the App Router)
- **UI:** React, ShadCN UI, Tailwind CSS
- **Language:** TypeScript
- **AI:** Genkit (for AI-powered features)

## Getting Started

First, ensure you have Node.js and npm installed.

1.  **Install Dependencies:**
    Open your terminal in the project root and run:
    ```bash
    npm install
    ```

2.  **Run the Development Server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:9002`.

---

## Connecting to a Backend API

### 1. Environment Variables

To avoid hardcoding URLs, all backend API endpoints should be stored in an environment variables file.

- Create a file named `.env.local` at the root of the project.
- Add your API's base URL to this file:

  ```
  NEXT_PUBLIC_API_BASE_URL=http://your-backend-api.com/api
  ```

### 2. Making API Calls

The recommended approach for fetching data is to use `fetch` within React Server Components. This allows data to be fetched on the server, reducing the load on the client.

- **Example: Fetching data in a page component**

  You can create a new service or directly fetch within a page component like `src/app/dashboard/page.tsx`:

  ```tsx
  async function getDashboardData() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/dashboard`, {
      // Add headers, authentication tokens, etc. as needed
      headers: {
        'Authorization': 'Bearer YOUR_AUTH_TOKEN'
      },
      // Use cache: 'no-store' for dynamic data that should not be cached
      cache: 'no-store' 
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    return response.json();
  }

  export default async function DashboardPage() {
    const data = await getDashboardData();

    return (
      <div>
        <h1>Dashboard</h1>
        {/* Render your data here */}
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  }
  ```

---

## Handling Form Submissions

This frontend uses **Next.js Server Actions** to handle form submissions. This allows form data to be securely processed on the server without creating separate API endpoints for each form.

You will find the forms for login and signup in:
- `src/app/login/page.tsx`
- `src/app/signup/page.tsx`

### Example: Connecting the Login Form

1.  **Create a Server Action:**
    Create a new file, for example, `src/app/login/actions.ts`.

    ```ts
    'use server';
    
    export async function login(prevState: any, formData: FormData) {
      const email = formData.get('email');
      const password = formData.get('password');

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });

        const result = await response.json();

        if (!response.ok) {
          return { message: result.error || 'Login failed' };
        }

        // Handle success: store token in a secure cookie, redirect, etc.
        // For example, using the 'cookies' helper from 'next/headers'
        // cookies().set('auth_token', result.token, { httpOnly: true, secure: true });

        // Redirect to a dashboard page (you'll need to use next/navigation)
        // redirect('/dashboard');

        return { message: 'Success!' };
      } catch (error) {
        return { message: 'An error occurred. Please try again.' };
      }
    }
    ```

2.  **Update the Form Component:**
    Modify the `<form>` element in `src/app/login/page.tsx` to use the server action. You'll need to use the `useFormState` and `useFormStatus` hooks from React.

---

## Authentication

A common authentication pattern is to use JWTs (JSON Web Tokens) stored in secure, `httpOnly` cookies.

**Backend Responsibilities:**
- Provide endpoints for `/login`, `/signup`, and `/logout`.
- The `/login` endpoint should validate credentials and return a JWT.
- Subsequent requests to protected API routes should require a valid JWT in the `Authorization` header.

**Frontend Responsibilities:**
- The `login` server action should store the received JWT in an `httpOnly` cookie.
- A middleware file (`src/middleware.ts`) can be created to protect routes by checking for the presence of the authentication cookie.
- API fetch requests from the frontend server (in Server Components or Server Actions) should read the token from the cookie and include it in the `Authorization` header.
