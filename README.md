# 🏠 DwellSpot

DwellSpot is a modern apartment rental platform that helps users discover, explore, and manage apartment listings with ease. The application provides a clean user experience with secure authentication, apartment management, advanced search, filtering, and responsive design.

🔗 **Live Site:** https://dwell-spot-client.vercel.app

🔗 **Server Repository:** https://github.com/ashik-creates/Dwell-Spot-Server

---

## ✨ Features

- 🔐 Secure authentication with Better Auth
- 🔑 Google Sign-In and Demo Login
- 🏠 Browse apartments with search, filtering, sorting, and pagination
- ⭐ Featured apartments section
- 📊 Interactive statistics dashboard using Recharts
- ➕ Add new apartment listings
- 🗑️ Manage apartments with delete functionality
- 📱 Fully responsive design for mobile, tablet, and desktop
- 🚀 Protected routes for apartment management
- ⚡ Loading skeletons, custom error page, and 404 page

---

## 📄 Pages

- Home
- Apartments
- Apartment Details
- Add Apartment
- Manage Apartments
- About
- Blog
- Login
- Register
- Error Page
- 404 Page

---

## 🛠 Tech Stack

### Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- HeroUI
- Recharts
- React Icons
- React Hot Toast
- Better Auth

### Backend

- Node.js
- Express.js
- TypeScript
- MongoDB
- JOSE (JWT Verification)

---


## 🚀 Installation

### Clone the repositories

```bash
git clone https://github.com/your-username/dwellspot-client.git

git clone https://github.com/your-username/dwellspot-server.git
```

### Client

```bash
cd dwellspot-client

npm install

npm run dev
```

### Server

```bash
cd dwellspot-server

npm install

npm run dev
```

---

## 🔑 Environment Variables

### Client (.env.local)

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_SECRET=your_secret
GOOGLE_CLIENT_ID=your_id
GOOGLE_CLIENT_SECRET=your_secret

```

### Server (.env)

```env
PORT=5000

MONGODB_URI=your_mongodb_uri

CLIENT_URL=http://localhost:3000
```

---

## 📦 Main Packages

### Client

- next
- react
- typescript
- tailwindcss
- @heroui/react
- better-auth
- react-hot-toast
- recharts
- react-icons

### Server

- express
- mongodb
- cors
- dotenv
- jose
- typescript

---

## 🔒 Authentication

- Email & Password Login
- Google Login
- Demo Login
- Protected Routes
- JWT Verification using Better Auth JWKS



## 👨‍💻 Developer

**Ashikur Rahman**

GitHub: https://github.com/ashik-creates

LinkedIn: https://linkedin.com/in/ashik-creates

---

## 📜 License

This project is developed for educational purposes.