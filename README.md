<a id="readme-top"></a>

[![Unlicense License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/silvasmvs/cuidar-plus">
    <img src="assets/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h2 align="center">Cuidar+ Monorepo</h2>
</div>

<!-- SUMMARY -->
<details>
  <summary>Sumário</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#tecnologias">Tecnologias</a></li>
      </ul>
      <ul>
        <li><a href="#anatomia-de-um-microfrontend">Anatomia de um microfrontend</a></li>
      </ul>
    </li>
    <li>
      <a href="#começando">Começando</a>
      <ul>
        <li><a href="#pré-requisitos">Pré Requisitos</a></li>
        <li><a href="#instalação">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#exemplo-de-uso">Exemplo de Uso</a></li>
    <li><a href="#licença">Licença</a></li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Sobre o projeto

<a href="https://github.com/silvasmvs/cuidar-plus">
  <img src="assets/name-logo.png" alt="Name Logo">
</a>

O Cuidar+ é um aplicativo desenvolvido a partir do projeto realizado no curso de UX/UI que eu fiz. O principal objetivo do curso era tornar o acesso à saúde pública mais rápido e eficiente. Com este projeto, os usuários podem agendar consultas, encontrar hospitais próximos e obter informações sobre unidades de atendimento de forma simples e intuitiva.
Foi criado um monorepo que contém as seguintes partes:
 - Biblioteca UI dentro de `packages/ui`, onde terá os componentes do design system (Key-UI) que serão utiilizadas dentro dos módulos
 - Terá um microfrontend de autenticação `apps/auth`, onde terá as telas de login e de cadastro e a realização do login de fato
 - Terá um microfrontend para a página de home `apps/home`, onde terá a tela principal do app, e onde será a porta de entrada para a conexão dos outros microfrontends.
- Terá um microfrontend para a página de hospital `apps/hospitals`, onde terá o módulo de hospitais.
- Terá um microfrontend para a página de consultas `apps/consultations`, onde terá o módulo de consultas.
- Terá um microfrontend para a página de conteúdos `apps/contents`, onde terá o módulo de conteúdos.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Anatomia de um microfrontend

```sh
  ├── dir1
  │   ├── file11.ext
  │   └── file12.ext
  ├── dir2
  │   ├── file21.ext
  │   ├── file22.ext
  │   └── file23.ext
  ├── dir3
  ├── file_in_root.ext
  └── README.md
```

### Tecnologias

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![Typescript][Typescript]][Typescript-url]
* [![Trpc][Trpc]][Trpc-url]
* [![React-query][React-query]][React-Query-url]
* [![Tailwind][Tailwind]][Tailwind-url]
* [![GraphQL][GraphQL]][GraphQL-url]
* [![Turborepo][Turborepo]][Turborepo-url]
* [![Figma][Figma]][Figma-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Começando

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Pré Requisitos

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Instalação

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/github_username/repo_name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```
5. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Exemplos de Uso

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Mauricio Silva - silvasmvs@gmail.com

Project Link: [https://github.com/silvasmvs/cuidar-plus](https://github.com/silvasmvs/cuidar-plus)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/silvasmvs/

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[Typescript]: https://img.shields.io/badge/Typescript-20232A?style=for-the-badge&logo=typescript&logoColor=3178C6
[Trpc]: https://img.shields.io/badge/Trpc-20232A?style=for-the-badge&logo=trpc&logoColor=#2596BE
[Tailwind]: https://img.shields.io/badge/Tailwind-20232A?style=for-the-badge&logo=tailwindcss&logoColor=#06B6D4
[React-Query]: https://img.shields.io/badge/React_Query-20232A?style=for-the-badge&logo=reactquery&logoColor=#FF4154
[Turborepo]: https://img.shields.io/badge/Turborepo-20232A?style=for-the-badge&logo=turborepo&logoColor=#EF4444
[GraphQL]: https://img.shields.io/badge/GraphQL-20232A?style=for-the-badge&logo=graphql&logoColor=#E10098
[Figma]: https://img.shields.io/badge/Figma-20232A?style=for-the-badge&logo=figma&logoColor=#F24E1E

[React-url]: https://reactjs.org/
[Trpc-url]: https://trpc.io/
[Next-url]: https://nextjs.org/
[Typescript-url]: https://www.typescriptlang.org/
[Tailwind-url]: https://tailwindcss.com/
[React-Query-url]: https://tanstack.com/query/latest/docs/framework/react/overview
[Turborepo-url]: https://turbo.build/
[GraphQL-url]: https://graphql.org/
[Figma-url]: https://www.figma.com/
