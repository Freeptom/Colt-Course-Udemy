var faker = require('faker');

console.log('==================');
console.log('Welcome To My Shop');
console.log('==================');

for(i = 0; i < 10; i++){
var randomProduct = console.log(faker.commerce.productName() + " - £" + faker.commerce.price());
}