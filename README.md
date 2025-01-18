*🇧🇷 Fala português? [Clique aqui](https://github.com/joaovlummertz/Puzzles/blob/main/README_PTBR.md) para ser levado ao README em PT-BR*

## Puzzles
Puzzles is a lightweight web application designed for fans of the iconic sitcom How I Met Your Mother. The app utilizes the [TMDb API](https://developer.themoviedb.org/reference/intro/getting-started) to select pseudorandom episodes from the series.

But... why is it called "Puzzles"? [That's the puzzle!](https://www.youtube.com/watch?v=w_2SVVGsiao)

## Features

- Season filtering: Allows users to narrow down their selection to specific seasons, tailoring the experience to their preferences.

- Internationalization: The applcation supports multiple languages such as English, Portuguese and Spanish.

- Dark and light mode: Built-in theme toggling for a personalized user experience in any lighting environment.

## Tech Stack

<img src="https://img.shields.io/badge/typescript-%23007acc.svg?logo=typescript&logoColor=white&style=for-the-badge" alt="TypeScript" /> <img src="https://img.shields.io/badge/react-%2320232a.svg?logo=react&logoColor=%2361dafb&style=for-the-badge" alt="React" /> <img src="https://img.shields.io/badge/tailwindcss-%2338b2ac.svg?logo=tailwind-css&logoColor=white&style=for-the-badge" alt="TailwindCSS" />

## Getting started

### Prerequisites

- Node.js

### Installation

1. Clone this repository:
```sh
git clone https://github.com/joaovlummertz/Puzzles.git
cd Puzzles
```
2. Install dependencies:
```sh
npm install
```

3. Sign up for a free API Token at [The Movie Database (TMDb)](https://developer.themoviedb.org/docs/getting-started).

4. Create a ```.env``` file and add the following line:
```js
VITE_API_TOKEN="your_api_token_here"
```

5. Run the project:
```sh
npm run dev
```

