import faker from 'faker';
const mount = (el) => {
  const products = [];
  for(let i = 0; i < 5; ++i) {
    const name = faker.commerce.productName();
    products.push(name);
  }
  products.forEach(product => {
    const div = document.createElement('div');
    div.innerText = product;
    el.appendChild(div);
  });
};

if(process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#development-products-team');
  if(el) {
    mount(el);
  }
}

export  {mount};
