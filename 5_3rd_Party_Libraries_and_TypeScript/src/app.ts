import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import 'reflect-metadata';
import { Product } from './product.model';
//! Creating a product using a class
//+ Creating a product using our class, we have attached the method getInformation();
const p1 = new Product('A Book', 12.99);
console.log(p1.getInformation());

//! Getting the products from a server
//+ Getting the products from the server, it has the same object structure, but it doesn't have the the method getInformation()
//+ For that, we have to loop through the entire list to create an instance of a Product (class)
const products = [
    { title: 'A Carpet', price: 29.99 },
    { title: 'A Book', price: 10.99 },
];

const loadedProducts = products.map((product) => {
    return new Product(product.title, product.price);
});

for (const product of loadedProducts) {
    console.log(product.getInformation());
}

//! One option is to use the 'class-transformer` package
//+ https://www.npmjs.com/package/class-transformer

const loadedProducts2 = plainToClass(Product, products);
for (const product of loadedProducts2) {
    console.log(product.getInformation());
}

const newProduct = new Product('', -5.99);
validate(newProduct).then((errors) => {
    if (errors.length > 0) {
        console.log('VALIDATION ERRORS');
        console.log(errors);
    } else {
        console.log(newProduct.getInformation());
    }
});
