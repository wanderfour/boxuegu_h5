# 博学谷移动项目笔记



## 客户端

### 1. 搭建express服务器

- 步骤
  - 通过npm安装express模块
  - 在web.js中搭建express服务器

- 用途：用于启动html页面
- 要点：将html页面等资源托管为静态资源
```javascript
app.use(express.static('foldername'))
```

- 解决问题：通过服务器启动可实现cors跨域访问接口（本地file协议不支持跨域访问接口）



### 2. 页面框架和样式（h5+css）

- 技术选型

  - 单独制作移动页面
  - 布局采用 rem适配布局（less+rem+媒体查询）
  - 设计图采用375px尺寸
- 样式设置步骤
  - 	搭建相关文件夹
  - 	设置视口标签及引入初始化样式
  - 设置common.less文件
    - 	设置常见尺寸，利用媒体查询设置不同的html字体大小
    - 	常见尺寸：320px、360px、375px、384px、400px、414px、424px、480px、540px、720px、750px
    - 	划分width为15等份
    - 	为了让pc端也可正常浏览页面，设置html默认字体，写在最上面，避免覆盖后面样式

  



### 3. 页面交互和接口调用（jQuery+AJAX+art-template)

- 获取首页微课数据
  - index.html 定义模板引擎（art-template）
  - jQuery发起ajax请求，获取列表数据
  - template() 渲染数据到页面
- 点击一级导航切换二级导航页面
  -  通过jQuery获取一级导航元素列表
  -  利用jQuery的隐式循环获取所点击一级导航的索引
  -  通过jQuery获取二级导航列表
  -  利用$(selector).eq()传入点击一级导航索引，来操作二级导航页面
  -  显示当前二级导航页面及隐藏其兄弟页面



### 4. 提交代码到Github

- 将代码提交到本地Git仓库
  - 初始化项目 git init
  - 添加.gitignore文件，忽略第三方模块
  - 提交到暂存区
  - 提交到本地git仓库
- 将代码提交到远程Github仓库
  - 创建远程仓库
  - 提交代码到远程仓库





