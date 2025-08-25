Feature: Homepage Navigation

  Scenario: User can navigate to the homepage
    Given I am on the homepage
    Then I should see the main content
    And I should see the full list of products

  Scenario: Access product details page
    Given I am on the homepage
    When I click on "View Details" in the first product
    Then I should be redirected to the product details page

  Scenario: Sort products from lowest to highest price
    Given I am on the homepage
    When I select the "Lowest price" sorting option
    Then the products should be displayed in ascending order of price

  Scenario: Sort products from highest to lowest price
    Given I am on the homepage
    When I select the "Highest price" sorting option
    Then the products should be displayed in descending order of price

  Scenario: Search for an existing product using full term
    Given I am on the homepage
    When I search for "Wireless Headphones"
    Then only products related to "Wireless Headphones" should be displayed

  Scenario: Search for an existing product using partial term
    Given I am on the homepage
    When I search for "Wire"
    Then only products related to "Wire" should be displayed

  Scenario: Search for a non-existing product
    Given I am on the homepage
    When I search for "ProductNotFound"
    Then a "No products found matching your search." message should be displayed

  Scenario: Access cart
    Given I am on the homepage
    When I click on the cart icon
    Then I should be redirected to the cart page

  Scenario: Access profile
    Given I am on the homepage
    When I click on the profile icon
    Then I should be redirected to the profile page
