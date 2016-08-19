import './index.html'
import './styles/main.scss'

import msg1 from './js/module-1'
import msg2 from './js/module-2'


console.log('init')
console.log(msg1)
console.log(msg2)

let arry = [1,2,3,4]
let lodashTest = _.map(arry, n => n*3)
console.log('Lodash test:', lodashTest)
