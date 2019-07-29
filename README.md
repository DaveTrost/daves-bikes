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

## Product Entry through form submission

This is the fourth part of the lab

### Product Entry Page

- Create a form with fields for all necessary product data
- give the form an id

### TDD API Method for Add Product

- Create a store method called .addProduct.
  - It takes a product object as a parameter and adds that product to the product list
  - make sure to prevent duplicate id's
- Build some tests for the new method
  - add a product to the store and then use deepEqual to test the returned product with the input product
  - add a duplicate product and ensure that the products list is unchanged

### Form Submission

create new functionality in product-entry.js

- Get a reference to the form
- Subscribe to the submit event
  - Don't forget to call event.preventDefault()!
- Create a new FormData object passing in the form
- Make a new product object from the formData
- Call your new store .addProduct method with the object.
- Reset the form

### STRETCH: Remove a product

- On the product entry page, also render a list of products with a remove button by each one.
- Add a store method .removeProduct that takes a product code. In that method, find the product and remove from the product array.
- In the event handler for the remove button call the remove product method on the store, and call .remove() on the top-level list item element.
