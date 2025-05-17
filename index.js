// Write your solution in this file!

// variable data global scope
let burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

// function and block
function addBurger() {
  let newBurger = 'Flatburger';
  burgers.push(newBurger);

  // variable declaration and scope
  if (true) {
    let anothernewBurger = 'Maple Bacon Burger';
    burgers.push(anothernewBurger);
  }
}

// function to change featuredDrink
function changeFeaturedDrink() {
  featuredDrink = 'The JavaShake';
}