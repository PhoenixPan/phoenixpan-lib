# Phoenix's demo lib

## Capability

### 1. Robustness

Wrote in Typescript with complete declaration files

### 2. Well-documented

Came with documents and demo showcase on a static website

### 3. Great test coverage

Covered 100% with tests to improve reliability

## Purpose

In frontend project development, we often encounter a variety of reusable business scenarios. How to convert repetitive code into reusable development tools is one of the factors to measure a programmer's coding level and code capability. However, how to achieve code reusability is a topic frequently discussed not only among frontend developers but also among frontend architects.

Furthermore, many developers focus only on the most basic page development in their daily work. They rarely touch upon the use of build tools or writing test cases. In an environment where frontend build tools like gulp, grunt, webpack, esbuild, SWC, vite, and trubo are becoming increasingly numerous, understanding and choosing among these frameworks can be a metric to determine whether one has reached the level of a senior frontend developer. Therefore, here, using React as the frontend framework and React Hooks as the core output, I hand-held and built a frontend library from scratch. I did it from product design, framework selection, architectural design to the final code implementation. Through a comprehensive product realization, I also addressed the challenge of enhancing code reusability.

## Tech stack

### Package management tool -- pnpm

Why?

1. `pnpm` is faster
2. `pnpm`'s `lock` files play well with monorepo and doesn't couple
3. The final product can be deployed as static site

### Building and bundling tools -- webpack & gulp

1. Use `gulp` as task runner to better show the flow of building
2. Use `webpack` as the bundler to generate final products

### Deployment -- dumi

`dumi` is used for a demo site

### Test -- jest

`jest` is the best.

## Other

### Generate `CHANGELOG`

```bash
npm install -g conventional-changelog-cli
pnpm run changelog
```

## 📧 Contact

- **My website** <https://www.phoenixpan.com/>
- **GitHub**: <https://https://github.com/PhoenixPan>

</br>
