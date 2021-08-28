# Vite 2.x + Vue 3.x + TypeScript Starter

[![Author](https://img.shields.io/badge/author-XPoet-orange.svg)](https://github.com/XPoet)
[![License](https://img.shields.io/github/license/XPoet/vite-vue3-starter.svg)](https://github.com/XPoet/vite-vue3-starter/blob/master/LICENSE)
[![Stars](https://img.shields.io/github/stars/XPoet/vite-vue3-starter)](https://github.com/XPoet/vite-vue3-starter)
[![Deploy](https://github.com/XPoet/vite-vue3-starter/workflows/deploy/badge.svg)](https://github.com/XPoet/vite-vue3-starter/actions/workflows/deploy.yml)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-Airbnb-hotpink.svg)](https://github.com/lin-123/javascript)

> 一套完美集成 Vite 2.x + Vue 3.x + TypeScript + Vue Router + Vuex + Axios + ESLint 等健壮的前端快速开发模板

## 在线预览

https://vite-vue3-starter.xpoet.cn/

## 交流群

欢迎小伙伴们加入前端技术交流群，因群成员大于 200 人，需要您关注公众号《前端鼓励师》，添加作者微信，再由作者拉你进群~

<img src="https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/FE-Cheerleaders/FEC-Card.76dbi8n1bkk0.png" width="80%" />

## 从 0 到 1 搭建教程

1️⃣&nbsp;[掘金](https://juejin.cn/post/6951649464637636622)&emsp;2️⃣&nbsp;[XPoet's Blog](https://xpoet.cn/2021/04/%E4%BB%8E-0-%E5%BC%80%E5%A7%8B%E6%89%8B%E6%8A%8A%E6%89%8B%E5%B8%A6%E4%BD%A0%E6%90%AD%E5%BB%BA%E4%B8%80%E5%A5%97%E8%A7%84%E8%8C%83%E7%9A%84-Vue3.x-%E5%B7%A5%E7%A8%8B%E5%8C%96%E9%A1%B9%E7%9B%AE/)


## 技术栈

- 编程语言：[TypeScript 4.x](https://www.typescriptlang.org/zh/) + [JavaScript](https://www.javascript.com/)
- 构建工具：[Vite 2.x](https://cn.vitejs.dev/)
- 前端框架：[Vue 3.x](https://v3.cn.vuejs.org/)
- 路由工具：[Vue Router 4.x](https://next.router.vuejs.org/zh/index.html)
- 状态管理：[Vuex 4.x](https://next.vuex.vuejs.org/)
- UI 框架：[Element Plus](https://element-plus.org/#/zh-CN)
- CSS 预编译：[Stylus](https://stylus-lang.com/) / [Sass](https://sass.bootcss.com/documentation) / [Less](http://lesscss.cn/)
- HTTP 工具：[Axios](https://axios-http.com/)
- Git Hook 工具：[husky](https://typicode.github.io/husky/#/) + [lint-staged](https://github.com/okonet/lint-staged)
- 代码规范：[EditorConfig](http://editorconfig.org) + [Prettier](https://prettier.io/) + [ESLint](https://eslint.org/) + [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript#translation)
- 提交规范：[Commitizen](http://commitizen.github.io/cz-cli/) + [Commitlint](https://commitlint.js.org/#/)
- 单元测试：[vue-test-utils](https://next.vue-test-utils.vuejs.org/) + [jest](https://jestjs.io/) + [vue-jest](https://github.com/vuejs/vue-jest) + [ts-jest](https://kulshekhar.github.io/ts-jest/)
- 自动部署：[GitHub Actions](https://docs.github.com/cn/actions/learn-github-actions)

## 快速开始

### 获取项目

#### 使用 Git

```sh
git clone https://github.com/XPoet/vite-vue3-starter.git
```

#### 使用 NPM

```sh
npm install vite-vue-ts-cli -g

vite-vue-ts-create myapp
```

### 安装依赖

```sh
npm install
# or
yarn add
```

### 启动项目

```sh
npm run dev
```

### 项目打包

```sh
npm run build
```

## Q&A

1. Q: `git cz` 不生效  

   A: 请全局安装 commitizen，命令：`npm install commitizen -g`

2. Q: husky 报错  

   A: 请检查你的项目下是否有 Git 仓库，没有则先 `git init` 初始化一个

## 许可

MIT Copyright © 2021 XPoet

