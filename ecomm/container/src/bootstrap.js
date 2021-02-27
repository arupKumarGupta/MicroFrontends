import {mount} from 'products/ProductsIndex';
import cartMount from 'cart/CartSummary';
mount(document.getElementById('products'));
cartMount(document.getElementById('cart'));
console.log('container');
