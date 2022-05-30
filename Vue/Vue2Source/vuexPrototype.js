const forEach = (obj={}, fn) => {
  Object.keys(obj).forEach((key, index) => fn(obj[key],key))
}
class ModuleCollection {
  constructor(options) {
    this.register([], options) 
  }
  register(path, rootModule) {
    console.log(path);
    debugger
    let newModule = {
      _raw:rootModule,
      _children:{},
      state:rootModule.state
    }
    if(path.length === 0) {
      this.root = newModule
    } else {
      let parent = path.slice(0, -1).reduce((memo, current) => {
        console.log(memo);
        return memo._children[current]
      }, this.root) //对父级的_children属性进行设置
      // console.log("parent:",parent);
      parent._children[path[path.length-1]] = newModule
    }
    if(rootModule.modules) {
      forEach(rootModule.modules, (module, modulesName) => {
        this.register([...path, modulesName], module)
      })
    }
  }
}

const vuex = {
  state: {
    a: "1"
  },
  modules: {
    a: {
      state:{}
    },
    b: {
      state:{},
      modules: {
        c: {state:{}},
        d: {state:{}},
      }
    },
  }
}
const instanceObj = new ModuleCollection(vuex)
console.log(instanceObj);


// a: {xxx}
// obj[key] : {xxx}
// key : a 
// console.log(['a'].slice(0,-1));
