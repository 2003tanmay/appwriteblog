<div align="center">

# FullStack Blog Website made with Vite+React and Appwrite
  
  <p>
Full Stack Blog Website made with Vite+React, Appwrite, Tailwind-css, Redux-toolkit, React-hook-form, React-router, Tinymce-react, Html-react-parser, .
  </p>
  
<!-- Badges -->
<a href="https://appwriteblog-ashy.vercel.app" target="_blank">![](https://img.shields.io/website-up-down-green-red/http/monip.org.svg)</a>
![](https://img.shields.io/badge/Maintained-Yes-indigo)
![](https://img.shields.io/github/forks/2003tanmay/appwriteblog.svg)
![](https://img.shields.io/github/stars/2003tanmay/appwriteblog.svg)
![](https://img.shields.io/github/issues/2003tanmay/appwriteblog)
![](https://img.shields.io/github/last-commit/2003tanmay/appwriteblog)

<h4>
    <a href="https://appwriteblog-ashy.vercel.app">View Demo</a>
  <span> · </span>
    <a href="https://github.com/2003tanmay/appwriteblog/blob/main/README.md">Documentation</a>
  <span> · </span>
    <a href="https://github.com/2003tanmay/appwriteblog/issues">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/2003tanmay/appwriteblog/issues">Request Feature</a>
  </h4>
</div>

<br />

## :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  - [Live Demo](#live-demo-💥)
  - [Features](#features)
  - [Tech Stack](#space_invader-tech-stack)
  - [Environment Variables](#key-environment-variables)
- [Getting Started](#toolbox-getting-started)
  - [Prerequisites](#bangbang-prerequisites)
  - [Installation](#gear-installation)
  - [Run Locally](#running-run-locally)
  - [Deployment](#triangular_flag_on_post-deployment)
- [Contact](#handshake-contact)

## :star2: About the Project
- Blog Application

This project is a CRUD (Create, Read, Update, Delete) blog website developed using React.js, Redux-Toolkit, TailwindCSS, react-hook-form, and Appwrite. It provides users with the ability to create, read, update, and delete blogs, along with advanced features such as user authentication, rich multimedia content support, and blog privacy settings.

### <a href="https://appwriteblog-ashy.vercel.app" target="_blank">LIVE DEMO 💥</a>

## Features

- Login and Sign-up function
- Can create new posts
- Can update your posts
- Can delete your posts
- Can made active or inactive your post
- Can see all active post of any writer
- Can see your posts

### :space_invader: Tech Stack

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://https://developer.mozilla.org/en-US/docs/Web/JavaScript/">Javascript</a></li>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://tailwindcss.com/">TailwindCSS</a></li>
    <li><a href="https://redux-toolkit.js.org/">Redux-toolkit</a></li>
    <li><a href="https://react-hook-form.com/">React-hook-form</a></li>
    <li><a href="https://www.tiny.cloud/">TinyMce-react</a></li>
    <li><a href="https://fkhadra.github.io/react-toastify/introduction">React-toastify</a></li>
  </ul>
</details>

<details>
<summary>Backend Server</summary>
  <ul>
  <li><a href="https://appwrite.io/">Appwrite</a></li>
  </ul>
</details>

<br />

<table>
    <tr>
        <td>
<a href="#"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" width="30" height="30" /></a>
        </td>
                <td>
<a href="#"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" width="30" height="30" /></a>
        </td>
                        <td>
<a href="#"><img src="https://user-images.githubusercontent.com/99184393/179383376-874f547c-4e6f-4826-850e-706b009e7e2b.png" alt="" width="30" height="30" /></a>
        </td>
                              <td>
<a href="#"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="" width="30" height="30" /></a>
        </td>
                        <td>
<a href="#"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/appwrite/appwrite-original.svg" alt="" width="30" height="30" /></a>
        </td>
    </tr>
</table>

## :toolbox: Getting Started

### :bangbang: Prerequisites

- Install Node JS in your computer <a href='https://nodejs.org/en/'>HERE</a>
- Sign up for a Appwrite account <a href='https://appwrite.io/'>HERE</a>
- Sign up for a Tiny-mce account <a href='https://www.tiny.cloud/'>HERE</a>

<!-- Env Variables -->

### :key: Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_APPWRITE_URL`

`VITE_APPWRITE_PROJECT_ID`

`VITE_APPWRITE_DATABASE_ID`

`VITE_APPWRITE_COLLECTION_ID`

`VITE_APPWRITE_BUCKET_ID`

`VITE_RTE_API_KEY`

### :gear: Installation

![](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=61DAFB)

Install my-project with npm

```
npm create vite@latest my-project -- --template react
```

```
cd my-project
```

Install dependencies

### :test_tube: Install Tailwind CSS

#### Install Tailwind CSS

![](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)

Install tailwindcss and its peer dependencies via npm, and then run the init command to generate both `tailwind.config.js` and `postcss.config.js`.

```
npm install -D tailwindcss postcss autoprefixer
```

```
npx tailwindcss init -p
```

#### Configure your template paths

Add the paths to all of your template files in your `tailwind.config.js` file.
<br>

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### Add the Tailwind directives to your CSS

Add the `@tailwind` directives for each of Tailwind’s layers to your `./src/index.css` file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Install dependencies

<a href="https://github.com/2003tanmay/appwriteblog/blob/main/package.json" target="_blank">🔶 Dependency Info</a>

<!-- Run Locally -->

### :running: Run Locally

![](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)

Clone the project

```bash
  git clone https://github.com/2003tanmay/appwriteblog.git
```

change directory

```bash
  cd appwriteblog
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

<hr />

This is a **Vite+React** project

<hr />

Open [http://localhost:5173](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/main.jsx`. The page auto-updates as you edit the file.

<!-- Deployment -->

### :triangular_flag_on_post: Deployment

To deploy this project run

##### Deploy on Vercel

![](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

The easiest way to deploy your React.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of React.js.

## :handshake: Contact

Tanmay Pal - [LinkedIn](https://www.linkedin.com/in/tanmay-pal2003/) - tanmayspal2003@gmail.com

Project Link: [github](https://github.com/2003tanmay/appwriteblog.git)

<br />

<div align="center">Don't forget to leave a star ⭐️</div>
