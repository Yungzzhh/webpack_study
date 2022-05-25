### 版本对比
- 2采用flow编写,3采用Ts进行开发
- 源码体积优化,使用tree-sharking
- 数据劫持优化,采用Proxy
- 编译优化,实现静态模板分析、重写diff
- CompositionAPI
- 自定义渲染器,可改写Vue底层渲染逻辑
- 新增则兼组件

### TS
 


### vue-router原理
通过安装vue-router插件并进行使用，在 Vue的内部会自动调用install注册插件
注册插件：
  - 注入Vue实例，可以使用Vue的一些方法如注册组件，响应式API
  - 注册 router-view、router-link组件 (函数式组件)
  - 封装一个全局的mixin(区分根组件实例和子组件)
    - mixin中的根组件：
      - 将根实例放在_routerRoot上，并给根实例的_router上加上this.$options.router
      - 进行路由初始化：实例化路由模式，对路由进行监听
      - 对_route进行响应式处理(后续通过this.$route == this._routerRoot._route)
    - mixin中的子组件：
      - 使子组件都能拥有_routerRoot属性
  - 对实例中的this.$route 和 this.$router进行响应式处理 this.$route == this._routerRoot._route、this.$router == this._routerRoot._router
实例化Vue-router:
  - 创建路由匹配器
    - 将routes：[]传入,将其扁平化，利用闭包缓存pathlist和pathMap
    - 导出match(匹配路由)，addRoutes(添加路由)方法
  - 选择路由模式
    - 当路由发生变化时，获取hash值，调用match函数获取对应的匹配结果