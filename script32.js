//Create an object called country for a country of your choice, containing properties name , capital, language, population and neighbors

// Increase the country population by two million using dot notation.
// Decrease the country population by one million using bracket notation.
// Make language value in Uppercase.

let country = {
  name: "India",
  capital: "New Delhi",
  language: ["Hindi", "english", "regional language"],
  population: 1200000,
  neighours: ["pakistan", "china", "srilanka"],
};

country.population += 100000;
country["population"] -= 80000;

country.name = country.name.toLocaleUpperCase();
console.log(country);

let car = {
  color: "red",
  model: 2021,
  company: "Toyota",
  describeCar: function () {
    console.log(
      `Company of my car is ${this.company} and model of my car is ${this.model}`
    );
  },
};
console.log(car.describeCar());

// You have to create a Shopping_Cart array with following features :

// addItem(itemName) : this function should add string itemName to cart

// removeItem(itemName): this function should remove any item which matches itemName. Hint : search for index of itemName and then remove it

// cartSize() : returns size of cart in terms of number of cart Items.

const Shopping_Cart = {
  cartItems: [],
  addItem(item) {
    this.cartItems.push(item);
  },
  removeItem(item) {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems = this.cartItems.filter((_, i) => i !== index);
    }
  },
  cartSize() {
    return this.cartItems.length;
  },
};

Shopping_Cart.addItem("product A");
Shopping_Cart.addItem("product B");
Shopping_Cart.addItem("product C");
Shopping_Cart.addItem("product D");

console.log(Shopping_Cart.cartItems);
console.log(Shopping_Cart.cartSize());

Shopping_Cart.removeItem("product B");
console.log(Shopping_Cart.cartItems);
console.log(Shopping_Cart.cartSize());
