import { store } from './data/store.js';

const productForm = document.getElementById('product-form');

productForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(productForm);
    const code = formData.get('code');
    const image = formData.get('image');
    
    getBase64(image, (base64Url) => {
        store.addProduct({
            code: code,
            image: base64Url,
            name: formData.get('name'),
            description: formData.get('description'),
            category: formData.get('category'),
            price: +formData.get('price')
        });    
    });

    if(store.getProduct(code)) {
        alert('Product Successfully Added');
        productForm.reset();
    }

});

// A method to convert a file object to base64 JSON compatible text from Stack Overflow:
// https://stackoverflow.com/questions/36280818/how-to-convert-file-to-base64-in-javascript
function getBase64(file, callback) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
        callback(reader.result);
    };
}