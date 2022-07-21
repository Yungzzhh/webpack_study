const router: any = [
  {
    path: '/',
    component: 'Home'
  },
  {
    path: '/about',
    component: 'About',
  },
]

// {
//   './':{component:'Home'},
//   './about':{component:'About'}
// }
interface routerPath {
  path: string,
  component: string
}

function tranform(router: Array<routerPath>):Object {
  const res:Object = {}
  router.forEach((item, index) => {
    // console.log(res[item.path]);
    // let pathName: String = item.path
    // if(pathName && res[pathName as string]) {
    //   console.log(1);
    // } 
    res[item.path] = res[item.path] ? res[item.path] : ""
    console.log(res);
  })

  return {}
}
tranform(router)

export {}