## Puzzles
Puzzles é uma aplicação web desenvolvida para os fãs da icônica série How I Met Your Mother. A aplicação consome a [API TMDb (The Movie Database)](https://developer.themoviedb.org/reference/intro/getting-started) para selecionar episódios pseudoaleatórios da série.

## Recursos

- Seleção por temporadas: Permite aos usuários restringir sua seleção a temporadas específicas, personalizando a experiência de acordo com suas preferências.

- Internacionalização: A aplicação conta com suporte a diversos idiomas, como português, inglês e espanhol.

- Modo claro e noturno: Oferece uma experiência mais confortável aos usuários ao ajustar a interface de acordo com suas preferências e nível de iluminação.

## Tecnologias

<img src="https://img.shields.io/badge/typescript-%23007acc.svg?logo=typescript&logoColor=white&style=for-the-badge" alt="TypeScript" /> <img src="https://img.shields.io/badge/react-%2320232a.svg?logo=react&logoColor=%2361dafb&style=for-the-badge" alt="React" /> <img src="https://img.shields.io/badge/tailwindcss-%2338b2ac.svg?logo=tailwind-css&logoColor=white&style=for-the-badge" alt="TailwindCSS" />

## Visualização

![](preview.gif)

## Primeiros passos

### Pré-requisitos

- Node.js

### Instalação

1. Clone este repositório:
```sh
git clone https://github.com/joaovlummertz/Puzzles.git
cd Puzzles
```
2. Instale as dependências:
```sh
npm install
```

3. Obtenha um Token gratuito da [API TMDb](https://developer.themoviedb.org/docs/getting-started).

4. Crie um arquivo ```.env``` e adicione a seguinte linha:
```js
VITE_API_TOKEN="your_api_token_here"
```

5. Rode o projeto:
```sh
npm run dev
```

