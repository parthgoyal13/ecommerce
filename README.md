# 🛒 E-Commerce React App (Fake Store API)

## 📌 Objective

Build a responsive, fully functional e-commerce frontend using React and the [Fake Store API](https://fakestoreapi.com/), matching the shared Figma UI design **pixel-perfectly**.

---

## 🔗 Live Demo

[🚀 View Deployed App]([https://your-live-demo-link.com](https://ecommerce-ecru-seven.vercel.app/))



---

## 🧰 Tech Stack

- React.js
- Axios
- React Router DOM
- Redux Toolkit
- `rc-slider` for range filtering
- Bootstrap (or custom CSS)
- Fake Store API

---

## 🎨 UI Design

[Figma Design](https://www.figma.com/design/nSiriliAu2RwjqHnhuofy2/E-commerce-Product-Page)

> _The layout and spacing exactly match the Figma design. No deviations in component structure, margins, or styling._

---

## ✨ Features

### 🛍️ Product Listing Page
- ✅ Get all products from API
- ✅ Live search by product title
- ✅ Filter by category (men, women, electronics, jewelry)
- ✅ Filter by price range using slider
- ✅ Filter by rating
- ✅ Sort by price (low-to-high, high-to-low)
- ✅ Pagination (6 products per page)

### 📄 Product Detail Page
- ✅ Dynamic route: `/product/:id`
- ✅ Fetch product details by ID
- ✅ Display full details (image, title, description, price, rating, category)

### 📝 User Registration
- ✅ Form to register user using:
  - `POST https://fakestoreapi.com/users`
- ✅ Inputs: first name, last name, username, email, password

### 🔐 Login Page
- ✅ Form with username & password
- ✅ API: `POST https://fakestoreapi.com/auth/login`
- ✅ Store JWT token in localStorage
- ✅ Show success message after login

---


