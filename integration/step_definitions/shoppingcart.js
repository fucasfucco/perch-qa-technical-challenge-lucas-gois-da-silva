import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import ShoppingCart from '../../pages/Shoppingcart';
import HomePage from '../../pages/HomePage';


When('I add product {string} with quantity {int} to my cart', (productName, quantity) => {
    ShoppingCart.addProduct(productName, quantity);
});


Then('my cart should contain {int} unit of {string}', (productName, quantity) => {
    ShoppingCart.validateProductInCart(productName, quantity)
    ShoppingCart.validateSubTotal();
});

When('return to homepage', () => {
    ShoppingCart.returnToHomepage();
});

When('I change the quantity of {string} to {int}', (productName, quantity) => {
    ShoppingCart.changeQuantityofProduct(productName, quantity);
})

Then('my cart should be empty', () => {
    ShoppingCart.validateEmptyCart();
})

When('I click on remove product {string}', (productName) => {
    ShoppingCart.removeProduct(productName);
})

Given('I am on the cart page', () => {
    HomePage.visit()
    HomePage.openCart();
})

When('I click the "Continue Shopping" button', () => {
    ShoppingCart.returnToHomepage();
})

Then('I should be redirected to the home page', () => {
    ShoppingCart.validateHomePage();
})
