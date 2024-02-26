console.log('from index.mjs')
// import math, {PI} from './math.mjs'
//import math, {PI, random, max} from './math.mjs'
//import * as math from './math.mjs'
console.log(math)
//how to import axios
import axios from 'axios' 
//how to import cowsay
//import cowsay from 'cowsay'
//how to use fetch api
fetch('https://api.github.com/users/unicodeveloper')
.then(res => res.text()).then(res => console.log(res))

