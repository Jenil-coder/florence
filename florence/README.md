# FBNI Website — Florence Business Network International

A full-stack website for **Florence Business Network International Pvt. Ltd.** — a professional India–Italy–Global business networking and trade consulting company.

## Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS, Framer Motion, GSAP
- **Backend**: Node.js, Express.js, MongoDB (Mongoose), Nodemailer
- **Additional**: React Router DOM, Axios, React Icons

## Quick Start

```bash
# Install all dependencies
cd client && npm install
cd ../server && npm install

# Run frontend dev server
cd client && npm run dev

# (Optional) Run backend (requires MongoDB)
cd server && npm run dev
```

- Frontend: http://localhost:5173
- Backend: http://localhost:5000
- API Health: http://localhost:5000/api/health

## Configuration

Edit `server/.env` with your credentials:

```
PORT=5000
MONGO_URI=mongodb+srv://...
CLIENT_URL=http://localhost:5173
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_app_password
```

## Project Structure

```
florence/
├── client/          # React Frontend (Vite)
│   ├── src/
│   │   ├── components/
│   │   │   ├── home/        # 12 homepage sections
│   │   │   ├── layout/      # Navbar, Footer, ScrollToTop
│   │   │   └── ui/          # Button, SectionHeading, StatCard, TestimonialCard
│   │   ├── pages/           # HomePage, AboutPage, ServicesPage, ContactPage
│   │   ├── hooks/           # useCountUp, useScrollAnimation
│   │   └── utils/           # API utilities
│   └── ...config files
├── server/          # Node.js Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── middleware/
└── package.json     # Root monorepo scripts
```

---

*Florence Business Network International Pvt. Ltd.*
