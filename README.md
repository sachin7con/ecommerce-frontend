# E-Commerce Platform — Frontend Client Engine

A highly responsive, production-optimized e-commerce user interface built with the modern React ecosystem. This client-side application delivers a seamless, high-performance shopping experience with dynamic state management, smooth routing, and atomic UI design.

* **Looking for the Secure Transaction Backend?** [👉 Access the Backend Repository Here](https://github.com/sachin7con/ecommerce-backend)
* **Live Web Deployment:** [👉 Click Here to View Live Demo](https://myekart.netlify.app)

---

## 🛠️ Tech Stack & Architecture

* **UI Library:** React.js (built on **Vite** for lightning-fast bundling and HMR).
* **Global State Management:** **Redux Toolkit** managing asymmetric global states (user sessions, synchronous cart persistent caching, and checkout flows).
* **Routing Matrix:** **React Router v6** protecting authenticated user checkouts and dashboard portals using declarative route guards.
* **Styling Mechanics:** **Tailwind CSS** implementing a utility-first, fully fluid responsive layout adaptive to mobile, tablet, and desktop viewports.
* **HTTP Client Broker:** **Axios** configured with custom interceptors to handle automated bearer token parsing and standardized runtime error handling.

---

## 💡 Frontend Engineering Challenges Solved

### 1. High-Performance Cart State Synchronization
* **The Challenge:** Preventing UI layout shifts and maintaining state persistence when a user updates cart quantities across multiple browser reloads.
* **The Implementation:** Engineered a hybrid Redux slice that hooks into browser `localStorage`. Changes to cart items dynamically dispatch optimized actions to compute aggregate checkout prices on the client side, significantly minimizing repetitive, heavy payload API requests back to the server.

### 2. Guarded Route Encapsulation
* **The Challenge:** Securing private administrative panels and checkout states from malicious deep-linking or unauthorized guest visibility.
* **The Implementation:** Created abstract layout wrapper components utilizing React context. When authentication claims drop or tokens expire, the app gracefully triggers historic path redirects while maintaining previous location data to ensure seamless post-login UX loops.

### 3. Asynchronous Product Grid Delivery
* **The Challenge:** Mitigating layout freezing and continuous server pounding during product category pagination and filtration.
* **The Implementation:** Componentized search parameters to tie dynamically into browser URL search strings. This enables shareable deep-linking states while leveraging structured client-side layout loading skeletons to preserve clean user perceived performance.

---

## ⚙️ Local Development Setup

Clone the client workspace:
```bash
git clone https://github.com/sachin7con/ecommerce-frontend
cd ecommerce-frontend
```

1. Install production ecosystem dependencies:
```bash
npm install
```

2. Configure your client-side environment matrix `.env`:
```env
VITE_API_BASE_URL=https://your-local-or-deployed-backend-api.com
```

3. Spin up the Vite asset server thread:
```bash
npm run dev
```
