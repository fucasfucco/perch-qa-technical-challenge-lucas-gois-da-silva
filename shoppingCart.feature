Feature: Shopping Cart Management

    Scenario: Add a single product to the cart
        Given I am on the homepage
        When I add product "Premium Leather Watch" with quantity 4 to my cart
        Then my cart should contain 4 unit of "Premium Leather Watch"

    Scenario: Add multiple products to the cart
        Given I am on the homepage
        When I add product "Premium Leather Watch" with quantity 2 to my cart
        And return to homepage
        And I add product "Wireless Headphones" with quantity 3 to my cart
        Then my cart should contain 2 unit of "Premium Leather Watch"
        And my cart should contain 3 unit of "Wireless Headphones"

    Scenario: Change quantity of a product in the cart
        Given I am on the homepage
        When I add product "Premium Leather Watch" with quantity 2 to my cart
        And I change the quantity of "Premium Leather Watch" to 3
        And my cart should contain 3 unit of "Premium Leather Watch"

    Scenario: Change quantity of multiple products in the cart
        Given I am on the homepage
        When I add product "Premium Leather Watch" with quantity 2 to my cart
        And return to homepage
        And I add product "Wireless Headphones" with quantity 2 to my cart
        And I change the quantity of "Premium Leather Watch" to 3
        And I change the quantity of "Wireless Headphones" to 3
        Then my cart should contain 3 unit of "Premium Leather Watch"
        And my cart should contain 3 unit of "Wireless Headphones"


    Scenario: Change product quantity to 0 to remove it from the cart
        Given I am on the homepage
        When I add product "Premium Leather Watch" with quantity 2 to my cart
        And I change the quantity of "Premium Leather Watch" to 0
        Then my cart should be empty

    Scenario: Remove a product from the cart
        Given I am on the homepage
        When I add product "Premium Leather Watch" with quantity 2 to my cart
        And I click on remove product "Premium Leather Watch"
        Then my cart should be empty

    Scenario: Add product to the cart with maximum quantity, leave cart, and add it again
        Given I am on the homepage
        When I add product "Premium Leather Watch" with quantity 5 to my cart
        And return to homepage
        And I add product "Premium Leather Watch" with quantity 5 to my cart
        And my cart should contain 10 unit of "Premium Leather Watch"

    Scenario: Return to home page
        Given I am on the cart page
        When I click the "Continue Shopping" button
        Then I should be redirected to the home page

    Scenario: Return to home page without products in the cart
        Given I am on the homepage
        When I add product "Premium Leather Watch" with quantity 5 to my cart
        And I click the "Continue Shopping" button
        Then I should be redirected to the home page