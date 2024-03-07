import { setupCounter } from './counter.js'
import javascriptLogo from './javascript.svg'
import './style.css'
import '/bling.js' 
import viteLogo from '/vite.svg'


$('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Instrument</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <th>Name</th>
      <th>Instrument</th>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>John Lennon</td>
      <td>Rhythm Guitar</td>
    </tr>
    <tr>
      <td>Paul McCartney</td>
      <td>Bass</td>
    </tr>
    <tr>
      <td>George Harrison</td>
      <td>Lead Guitar</td>
    </tr>
    <tr>
      <td>Ringo Starr</td>
      <td>Drums</td>
    </tr>
  </tbody>
</table>
  </div>
`

setupCounter($('#counter'))


//list of ChildNodes

//childNodes - firstChild, lastChild

//children -firstElementchild

//parentNode 


const table = $('table')
const row = table.rows
console.log(table.row)


const newDiv = document.createElement('div')


//textContent, innerHTML
newDiv.textContent = 'Modifying the DOM';

app.append(newDiv)





//attribute


//classes
//classList(), className, attribute(CCRUD)

// styles

//document.createElement('element') - this creates a new element
 
//insertion methods - appendChild, insertBefore, insertAdjacentElement, insertAdjacentHTML, insertAdjacentText
// apppend - adds a new element to the end of the list of children of a specified parent node
//prepend - adds a new element to the beginning of the list of children of a specified parent node
//before - inserts a new element before a specified element
//replaceWith - replaces the specified element with a new element
//after - inserts a new element after a specified element
//newDiv
//allow us to insert new elements into the DOM
// allow us to inseert(text, element, comment)
// div.before(newDiv)

// div.prepend(newDiv)
// div.append(newDiv)
// div.after(newDiv)


//what is data hypen? 
//what is a unique way to really have your own attribute?
//data-hypen?

//insertAdjacentElement