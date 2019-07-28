# daves-bikes development plan

## Lab 06

### files and folders

### HTML template w/ CSS

### Create bikes data

### Test generateBike function

### Build page from JS

### Refactor

## Shopping cart

This is the second part of the lab

### write HTML and adjust CSS

### Create sample shopping cart data

order.js

### Test shopping cart functions

In register.js

- getLineTotal
- findProduct
- getOrderTotal

### Test shopping cart HTML generation

1. Copy table-row html from the page
1. You will need to remove extraneous whitespace. Don't worry, you can adjust the test as need
1. Copy the shopping cart and product data that corresponds to the example, and use as your input to your function
1. Using the DOM API, create your static example programmatically using JavaScript
1. Import and use the getLineTotal function in your render function!
1. Make the test pass! (Again, you may need to adjust html syntax - pay close attention to test details)

### Generate shopping cart

### Add discount code functionality

- button and field for discount code processing
- additional row for discount applied
- styling

- promo codes data objects

- revamp checkout tests with discount built-in
- modify checkout functions to pass tests

- modify html builder for cart

- event listener for the button and the field
- apply/remove hidden from the discount applied row

### Refactor 2

## Store setup in Local Storage

This is the third part of the lab

### Flexible Storage implemented in the store object

- QUnit testStart
- Get and Save
- Bootstrapping in getProducts
- Get Cart
- Add Product to Cart (empty/not & add multiple)

### Use store in webpage

- load products & cart from store on page refresh
- add button updates data in store
- use store.findProduct

### STRETCH: Cart Badge

- shopping cart badge image
- numeric text element for items in cart
- styling

- getShoppingCartSize function for store and testing

- On page load, update badge with length

- Move the work of adding products from the render function to the main page

In generate-bikes-list.js:

- add reference to the shopping cart element
- Build a function here that:
  - Accepts a code parameter
  - Calls the store to add the item
  - Updates the shopping cart badge based on the store's length
- Pass the function as a parameter to the render function

In generate-bike.js:

- Call the function passed as a parameter in the add button's eventListener
