## 简介（Introduction)

webpack loader使用demo，具体文章可以查看[日常开发，我该掌握哪些webpack loader知识](https://juejin.cn/post/7246056370626068535)

## 技术栈（Scheme）

typescript + webpack5

## 项目设计结构

```js
├── LICENSE
├── README.md
├── babel.config.js
├── config
│   ├── dist
│   │   └── js
│   │       └── app.80374bb613e47ddb01e9.js
│   ├── loaders1
│   │   ├── a-loader.js
│   │   ├── b-loader.js
│   │   ├── c-loader.js
│   │   ├── d-loader.js
│   │   └── webpack.config.js
│   ├── loaders2
│   │   ├── a-loader.js
│   │   ├── b-loader.js
│   │   ├── c-loader.js
│   │   └── webpack.config.js
│   ├── loaders3
│   │   ├── a-loader.js
│   │   ├── b-loader.js
│   │   ├── c-loader.js
│   │   └── webpack.config.js
│   ├── loaders4
│   │   ├── a-loader.js
│   │   ├── b-loader.js
│   │   ├── c-loader.js
│   │   ├── d-loader.js
│   │   ├── dist
│   │   │   └── js
│   │   │       └── app.e5dfb7596067829d6836.js
│   │   └── webpack.config.js
│   ├── loaders5
│   │   ├── dist
│   │   │   └── js
│   │   │       └── app.e5dfb7596067829d6836.js
│   │   ├── hello-loader.js
│   │   └── webpack.config.js
│   └── webpack.config.js
├── global.d.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── app.js
│   ├── foo.js
│   ├── foo.less
│   ├── index.less
│   └── index.module.css
└── tsconfig.json
```

## 使用（Usage）

### 克隆仓库
 
git clone git@github.com:willson-wang/webpack-loader-demo.git
 
### 安装依赖
 
pnpm install
 
### 构建模式

```
pnpm run build:demo1
```


