# 初始化项目
```
npm init -y
```

# 安装依赖模块
## 后端依赖的模块
```
npm install body-parser connect-mongo ejs express express-session mongoose -S
```
## 前端依赖的模块
```
npm install es6-promise history react react-dom react-redux react-router-dom react-router-redux react-swipe react-transition-group redux redux-thunk swipe-js-iso whatwg-fetch -S
```
## 开发依赖模块
```
npm install babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0 css-loader file-loader html-webpack-plugin less less-loader style-loader webpack webpack-dev-server html-webpack-plugin -D
```

- 新建`src`文件夹和`main.js`文件
- 新建`index.html`文件并添加`<div id="app"></div>`
- 新建`webpack.config.js`文件
- 新建`.babelrc`文件

# 项目架构
- src - 是项目源码目录
- main - 入口
- container - 容器组件、页面级组件
- components 基础组件
  - Home
  - Lesson
  - Profile

# 配置导航栏










