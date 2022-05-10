import './main.css'
import './sass.scss'
import logo from '../public/3.png'
/**
 * style-loader核心逻辑
 * const content = `${样式内容}`
 * const style = document.createElement('style');
 * style.innerHTML = content;
 * document.head.appendChild(style);
 */
console.log(logo);
const a = 'Hello ITEM'
console.log(a)
const img = new Image()
img.src = logo

document.getElementById('imgBox').appendChild(img)
// module.exports = a;

class Author {

  constructor() {
    this.name = 'Item'
    this.age = 19
  }
  info = () => {
    return {
      name: this.name,
      age: this.age
    }
  }
}
const p1 = new Author()

const test = new Map()
test.set("name", "yung")
export default Author