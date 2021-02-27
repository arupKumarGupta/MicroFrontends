import  {mount as productMount} from 'products/ProductsIndex';
import {mount as cartMount} from 'cart/CartSummary';
productMount(document.getElementById('host-products'));
cartMount(document.getElementById('host-cart'));
console.log('container');
