// Event Handler 

//* [x] `mouseover`
const imgChange = document.querySelector('img');
imgChange.addEventListener('mouseover', function(event) {
  event.target.style.border = '5px dashed teal'
})


// 	* [x] `keydown`

const firstName = document.querySelector(".first-name");
firstName.addEventListener('keydown', function(event) {
  console.log(`this is the blank key: ${event.code}`)
})

// const firstName = document.querySelector('.first-name');

// firstName.addEventListener('keydown', e => {
//   console.log(`This is my event: ${e.code}`);
// });


	// * [?] `wheel`
const footerResize = document.querySelector('.footer')
footerResize.addEventListener("wheel", function(event) {
    console.log("All resources have wheeled!");
  });


// window.addEventListener("wheel", function(event) {
//     console.log("All resources finished loading!");
//   });

// 	* [ ] `drag / drop`

// 	* [x] `load`
window.addEventListener("load", function(event) {
    console.log("All resources finished loading!");
  });


    // * [x] `focus`
    const emailAddress = document.querySelector('.email')

    emailAddress.addEventListener("focus", function(event) {
    console.log("All resources have focus!");
      // stops the original behavior of HTML elements
  });


// 	* [x] `resize`
// const footerResize = document.querySelector('.footer')
// footerResize.addEventListener("resize", function(event) {
//     console.log("All resources have resized!");
//   });
window.addEventListener("resize", function(event) {
    console.log("All resources have resized!");
  });


// 	* [x] `scroll`
window.addEventListener("scroll", function(event) {
    console.log("All resources have scrolled!");
  });



// 	* [x] `select`
const firstNameField = document.querySelector('.first-name')
firstNameField.addEventListener('select', function(event) {
  console.log(`When text field is selected it fires a select event`)
  //event.stopPropagation();
});


// 	* [x] `dblclick`
const signBtn = document.querySelector('.btn')
signBtn.addEventListener('dblclick', function(event) {
  console.log(`Sign up button fired a click event`)
  event.stopPropagation();
});





// Using the 10 unique events, find ways to update the DOM in creative ways. 
//For example you could change colors, animate objects, remove objects, etc.

// * [x] Nest two similar events somewhere in the site and prevent the event propagation 
//properly
const containerBtn = document.querySelector('.main-navigation')
containerBtn.addEventListener('click', function(event) {
  
  //  target you are clicking on
console.log(`this is my target: ${event.target}`) 
  
  // target that you added the event listener to.
console.log(`this is my current target: ${event.currentTarget}`)
  
  event.stopPropagation();
})




// * [x] Stop the navigation from items from refreshing the page by using `preventDefault()`
const formSubmit = document.querySelector('.form-submit');
formSubmit.addEventListener('click', e => {
  console.log(`Work button fired a click event!`);
  // stops the original behavior of HTML elements
  e.preventDefault();
});



