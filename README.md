# bookkeeping

## 设置 svg-sprite-loader

- 安装

```npm
yarn add svg-sprite-loader -D
```

- 设置 vue.config.js

```javascript
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
    const dir = path.resolve(__dirname, "src/assets/icons");
    config.module
      .rule("svg-sprite")
      .test(/\.svg$/)
      .include.add(dir)
      .end() //只包含icons目录
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({ extract: false })
      .end();
    config
      .plugin("svg-sprite")
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      .use(require("svg-sprite-loader/plugin"), [{ plainSprite: true }]);
    config.module.rule("svg").exclude.add(dir); //其他svg loader 排除icons目录
  },
};
```

## 途中遇到的问题及解决方案

### 底部导航栏

- 问题:几个重要的组件中要同时写 Nav，代码重复率高
- 办法 1:打包成一个单独的组件，然后再用到 Nav 组件的时候引入这个组件，减少到了只需引入 3 次，但还是每次都要单独引入这个组件
- 办法 2:引入到全局 main.ts 中，用到 Nav 组件的时候直接写，不用单独引入组件

### Icon 组件

- 问题:还是跟导航栏一样，代码重复率高
- 办法 1：用一个 Icon.vue 组件把所有的 icon 打包，用 # +name 传过去,但还是那个问题，我需要每个文件都引入Icon.vue这个组件
- 办法2:引入到全局，文件直接使用
- 切记全局对象不宜过多

```javascript
//template
<svg class="icon">
  <use :xlink:href="'#' + name" />
</svg>

//script
<script lang="ts">
//这里是引入全部的svg
// eslint-disable-next-line no-undef
let importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext);
try {
  importAll(require.context("../assets/icons", true, /\.svg$/));
} catch (error) {
  console.log(error);
}

//把name传过去
export default {
  props: ["name"],
  name: "Icon",
};
</script>
```

## 小知识

### 路由index.ts

- 默认进入Money路由

```javascript
{
    path:'/',
    redirect:'/money'
  },
  {
    path: "/money",
    component: Money,
  },
```

### 路由动态active-class

- 进入某个路由，动态的添加class

```javascript
<router-link
      :to="{
        path: '/labels',
      }"
      class="item"
      active-class="selected"
    >
      <Icon name="label" />
      标签
    </router-link>
```

