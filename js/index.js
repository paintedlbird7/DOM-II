// // Your code goes here 	

//* [x] `mouseover`
const imgChange = document.querySelector('img');
imgChange.addEventListener('mouseover', function(event) {
  event.target.style.border = '5px dashed teal'
})


// 	* [x] `keydown`
const firstName = document.querySelector('.first-name');

firstName.addEventListener('keydown', e => {
  console.log(`This is my event: ${e.code}`);
});


// 	* [ ] `wheel`
// 	* [ ] `drag / drop`
// 	* [ ] `load`
// 	* [ ] `focus`
// 	* [ ] `resize`
// 	* [ ] `scroll`




// 	* [x] `select`
const logoHeading = document.querySelector('.first-name')
logoHeading.addEventListener('select', function(event) {
  console.log(`When text field is selected it fires a select event`)
  //event.stopPropagation();
});


// 	* [x] `dblclick`
// Event Handler 
const signBtn = document.querySelector('.btn')
signBtn.addEventListener('dblclick', function(event) {
  console.log(`Sign up button fired a click event`)
  event.stopPropagation();
});



// Using the 10 unique events, find ways to update the DOM in creative ways. 
//For example you could change colors, animate objects, remove objects, etc.

// * [ ] Nest two similar events somewhere in the site and prevent the event propagation 
//properly
// * [ ] Stop the navigation from items from refreshing the page by using `preventDefault()`




