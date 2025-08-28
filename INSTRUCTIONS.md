# Developer Instructions for Customizing the Cabinetrics Landing Page

This guide provides instructions for backend developers on how to update various parts of the Next.js landing page for Cabinetrics.

## Table of Contents
1. [Changing the Logo](#1-changing-the-logo)
2. [Updating Images](#2-updating-images)
3. [Updating the Demo Video](#3-updating-the-demo-video)
4. [Updating Features & Animated Text](#4-updating-features--animated-text)
5. [Updating the Pricing Page](#5-updating-the-pricing-page)

---

### 1. Changing the Logo

The site logo is an SVG component.

- **File Location:** `src/components/logo.tsx`
- **To Change:** You can modify the `<svg>` markup directly within this file to replace it with your own logo's SVG code. Ensure the `className` and `fill` properties are maintained if you want it to inherit the theme's primary color.

---

### 2. Updating Images

The landing page uses placeholder images from `https://picsum.photos`.

- **Hero Section Image:**
    - **File Location:** `src/components/landing/hero.tsx`
    - **To Change:** Find the `<Image>` component and replace the `src` prop with the path to your new image (e.g., `/images/dashboard.png`). Place your new image inside the `public/images/` directory.

- **Video Section Thumbnail:**
    - **File Location:** `src/components/landing/video-section.tsx`
    - **To Change:** Find the `<Image>` component and replace the `src` prop with the URL or path for your video's thumbnail.

---

### 3. Updating the Demo Video

The "See Cabinetrics in Action" section currently contains a placeholder image.

- **File Location:** `src/components/landing/video-section.tsx`
- **To Change:** To embed a video from a service like YouTube or Vimeo, you would replace the `div` containing the `<Image>` and `<PlayCircle>` components with an `<iframe>` embed code provided by the video hosting service.

    **Example (YouTube):**
    ```html
    <div className="aspect-video">
      <iframe 
        width="100%" 
        height="100%" 
        src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        className="rounded-lg"
      ></iframe>
    </div>
    ```

---

### 4. Updating Features & Animated Text

The primary marketing copy and features are located in the Hero section.

- **Main Headline & Sub-headline:**
    - **File Location:** `src/components/landing/hero.tsx`
    - **To Change:** Edit the text content within the `<h1>` and `<p>` tags directly in this file.

- **Animated Benefits Text:**
    - **File Location:** `src/components/landing/animated-benefits.tsx`
    - **To Change:** Update the `benefits` array with the strings you want to display in the animation.

    ```javascript
    const benefits = [
      "managing tasks.",
      "managing staff",
      "tracking projects.",
      "invoicing.",
      "more profit.",
    ];
    ```

---

### 5. Updating the Pricing Page

The pricing link in the header is not yet connected to a page.

- **File Location:** `src/components/landing/header.tsx`
- **To Change:**
    1. Create a new pricing page at `src/app/pricing/page.tsx`.
    2. In the header component, find the `Link` component for "Pricing" and change its `href` from `"#"` to `"/pricing"`.

    ```jsx
    <Link
      href="/pricing" // Changed from "#"
      className="text-foreground/60 transition-colors hover:text-foreground/80"
    >
      Pricing
    </Link>
    ```
