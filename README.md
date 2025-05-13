# Bianca Gabriela - Developer Portfolio

Welcome to my personal portfolio! This repository showcases my work across multiple frontend and full-stack projects, all hosted under my domain [biancagabriela-dev.com] You can explore live demos, including React and Next.js apps, as well as a full-stack project built with Node.js and MongoDB.

---

## 🌐 Live Projects

| URL Path                                             | Project                     | Tech Stack                         |
|------------------------------------------------------|-----------------------------|-------------------------------------|
| `/`                                                  | Portfolio                   | Vue 3 + Vite + Tailwind CSS         |
| `/demo/artist`                                       | Artist Website              | React + Custom Horizontal Scroll    |
| `/demo/demo/presentation`                            | Restaurant Presentation     | Next.js                             |
| `/demo/stackoverflow`                                | Stackoverflow Clone (UI)    | React.Js + Node.Js + MongoDB        |

---


## 🚀 Deployment Overview

### Frontend Hosting
- All frontend apps are statically generated and hosted in a single **S3 bucket**.
- Served via **CloudFront** for global distribution and HTTPS.
- Apps are accessible at subpaths under:  
  (https://biancagabriela-dev.com)

### Domain & DNS
- Domain: `biancagabriela-dev.com` managed via **Route 53**
- `A` and `CNAME` records point to CloudFront and EC2 as needed

---

## 🛠 Tech Stack

- **Frontend**: Vue 3, React, Next.js, Vite, Tailwind CSS
- **Backend**: Node.js, TypeScript, Express.js, MongoDB
- **Infrastructure**: AWS S3, CloudFront, EC2, Route 53, ACM

---

## 📦 Build & Deploy

### Building Frontend Apps
```bash
# Portfolio (Vue)
cd Portfolio/Frontend
npm install && npm run build

# Artist (React)
cd Portfolio/Demos/artist
npm install && npm run build

# Presentation (Next.js)
cd Portfolio/Demos/presentation-app
npm install && npm run build
npm run export

# Stackoverflow Frontend (React)
cd Portfolio/Demos/stackoverflow/frontend
npm install && npm run build

Each service can be run locally using: npm run dev