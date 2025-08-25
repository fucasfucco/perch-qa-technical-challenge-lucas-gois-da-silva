import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../pages/HomePage';

Given('I am on the homepage', () => {
    HomePage.visit();
});

When('I select the "Lowest price" sorting option', () => {
    HomePage.togglePriceSort();
});

When('I select the "Highest price" sorting option', () => {
    HomePage.togglePriceSort();
    HomePage.togglePriceSort();

});

When('I search for {string}', (term) => {
    HomePage.searchProduct(term);
});

When('I click on the cart icon', () => {
    HomePage.openCart();
})

When('I click on "View Details" in the first product', () => {
    HomePage.openFirstProductDetails();
})

When('I click on the profile icon', () => {
    HomePage.openProfile();
})

Then('I should be redirected to the profile page', () => {
    HomePage.validateProfilePage();
})

Then('only products related to {string} should be displayed', (term) => {
  HomePage.validateProductSearch(term);
})

Then('a {string} message should be displayed', (message) => {
    HomePage.validateMessage(message);
})

Then('the products should be displayed in ascending order of price', () => {
    HomePage.validatePriceSortAsc();
});

Then('the products should be displayed in descending order of price', () => {
    HomePage.validatePriceSortDesc();
});

Then('I should be redirected to the product details page', () => {
   HomePage.validateProductDetails()
})

Then('I should see the main content', () => {
    HomePage.verifyMainContent();
});

Then('I should see the full list of products', () => {
    HomePage.verifyProductsGrid();
});

Then('I should be redirected to the cart page', () => {
    HomePage.validateCartPage()
})



