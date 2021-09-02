export default 'login module.export'
export const aaa = 'aaaaa'
import register from './register.js'

console.log('index.js run')
const ccc = register.aaa();
console.log(ccc)

function add (m) {
  return function (n) {
    return m + n;
  }
}


const b = add(1)
export const c = b(2)