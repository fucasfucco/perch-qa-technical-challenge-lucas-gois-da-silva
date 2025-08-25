# Problems

## 1 -> Title: Product sorting by ascending price is not working

**Steps to Reproduce:**

- Go to the homepage.  
- Select the option to sort products by price in ascending order.  

**Expected Result:**  
Products should be displayed from the lowest price to the highest price.  

**Actual Result:**  
Products are not displayed in ascending price order.  


## 2 -> Title: Product sorting by descending price is not working

**Steps to Reproduce:**

- Go to the homepage.  
- Select the option to sort products by price in descending order.  

**Expected Result:**  
Products should be displayed from the highest price to the lowest price.  

**Actual Result:**  
Products are not displayed in descending price order.  


## 3 -> Title: Product quantity resets to zero when re-entering the cart after reaching the maximum limit

**Steps to Reproduce:**

- Add products to the cart until reaching the maximum limit (5 items).  
- Leave the cart page and return.  
- Add more products to the cart.  

**Expected Result:**  
The cart should correctly update both the total amount and the product quantity.  

**Actual Result:**  
The total amount updates correctly, but the product quantity resets to zero.  


## 4 -> Title: Incorrect total order value in order listing

**Steps to Reproduce:**

- Place an order with a product quantity greater than 1.  
- Access the order listing page.  
- Check the displayed total value of the order.  

**Expected Result:**  
The total order value should be calculated as unit price × quantity.  

**Actual Result:**  
The order listing only displays the unit price as the total, ignoring the product quantity.  


## 5 -> Title: Last name not displayed in registration details

**Steps to Reproduce:**

- Go to the registration page.  
- Fill in both First Name and Last Name fields.  
- Save/submit the registration.  
- Check the displayed user details.  

**Expected Result:**  
Both First Name and Last Name should be displayed in the registration details.  

**Actual Result:**  
Only the First Name is displayed; the Last Name is missing.  


# Improvement Suggestions

## Improvement Suggestion 1: Add input masks for specific fields

**Current Behavior:**  
Fields such as Phone and Zip Code accept any characters without formatting.  

**Suggested Improvement:**  
Apply input masks/validations to ensure correct formatting (e.g., only numbers and appropriate length).  


## Improvement Suggestion 2: Adjust validation messages for State and City fields

**Current Behavior:**  
When the State or City fields are filled with only one character, the error message displayed is “City must contain only letters and spaces”.  

**Issue:**  
This message is misleading, since the input is not a number but just an incomplete value.  

**Suggested Improvement:**  
Update the validation to display an error related to minimum length instead of invalid characters.  


### Due to personal reasons, I did not have enough time to finish all the requested flows for this technical challenge. However, I focused on correctly implementing the main flows of the homepage, product page, and shopping cart.