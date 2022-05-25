function createArray<T>(len: number, val:T):T[] {
  let res = []
  for(let i=0;i<len;i++) {
    res.push(val)
  }
  return res
}
let arr = createArray(3, "halo")

const swap = <T, K>(tuple:[T,K]):[K, T] => {
  return [tuple[1], tuple[0]]
}
swap<string, number>(['1',3])
export {}