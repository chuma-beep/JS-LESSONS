/**
 * 
*https://gist.github.com/paulirish/12fb951a8b893a454b32
 */
/* bling.js */




window.$$ = document.querySelectorAll.bind(document);


window.$ = document.querySelector.bind(document);


Node.prototype.on = window.on = function (name, fn) {
  this.addEventListener(name, fn);
}

NodeList.prototype.__proto__ = Array.prototype;

NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
  this.forEach(function (elem, i) {
    elem.on(name, fn);
  });
}

//Node properties, Attribute and Properties, 
//Modifying the documnet, styles and Classes

//select a particular content to discover the inner workings of the DOM

let content = document.body.firstChild.nodeValue;
console.log(content)





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

