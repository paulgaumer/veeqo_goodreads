<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/paulgaumer/v3_portfolio">
    <img src="public/goodbooks.jpg" alt="Logo" width="500">
  </a>

  <h3 align="center">Goodbooks (Veeqo POC)</h3>

  <p align="center">
    My personal website & portoflio
    <br />
    <br />
    <a href="https://veeqo-goodreads-pg.netlify.app/">View Website</a>
    ·
    <a href="https://www.paulgaumer.com/#contact-form">Report Bug</a>
    ·
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Installation](#installation)
- [Contact](#contact)

<!-- ABOUT THE PROJECT -->

## About The Project

Proof of concept for Veeqo, based on the GoodReads API.

### Built With

- [Create React App](https://github.com/facebook/create-react-app)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/)
- [Netlify](https://netlify.com)
- [Styled Components](https://styled-components.com/)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Cypress](https://www.cypress.io/)

<!-- GETTING STARTED -->

## Getting Started

To run the website:

### Installation

1. Clone the repo

```sh
git clone git@github.com:paulgaumer/veeqo_goodreads.git
```

2. Install NPM packages

```sh
yarn install
```

3. Start your local server

To avoid CORS issues when requesting the GoodReads API, calls are made via serverless functions. In order to run these with the server and receive data, you'll need the netlify cli and host an instance of the site on Netlify.

```sh
npm install netlify-cli -g

netlify login

netlify init

yarn dev

-> visit http://localhost:8888/
```

If you want to run the app without the serverless function and **NO DATA**

```sh
yarn start

-> visit http://localhost:3000/
```

<!-- CONTACT -->

## Contact

[Paul Gaumer](https://paulgaumer.com) - [@PaulGaumer](https://twitter.com/@PaulGaumer) - hello@paulgaumer.com

Project Link: [https://github.com/paulgaumer/veeqo_goodreads](https://github.com/paulgaumer/veeqo_goodreads)
