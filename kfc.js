import dataFood from './dataFood.js'
console.log(dataFood);
const productContainer = document.querySelector('.js-menu')
productContainer.style.display = 'flex';
productContainer.style.flexWrap = 'wrap';
productContainer.style.width = '1350px';

const cart = function({image, description,price}){
    const productElement = document.createElement('div');
    productElement.style.position = 'relative';
    productElement.classList.add('product');
    productElement.style.width = '380px';
    productElement.style.height = '470px';
    productElement.style.borderRadius = '60px';
    productElement.style.boxShadow = '0px 0px 15px 5px rgba(0, 0, 0, 0.15)';
    productElement.style.marginBottom = '20px';
    productElement.style.textAlign = 'center';
    
    const imageElement = document.createElement('img');
    imageElement.classList.add('dataFood_image');
    imageElement.src = image;
    imageElement.style.width = '380px';
    imageElement.style.borderRadius = '22px';
    imageElement.style.paddingBottom = '20px';

    const descriptionElement = document.createElement('span');
    descriptionElement.classList.add('dataFood_description');
    descriptionElement.textContent = description;
    descriptionElement.style.fontWeight = "400";
    descriptionElement.style.fontSize = "18px";
    descriptionElement.style.lineHeight = "21px";
    descriptionElement.style.textTransform = "capitalize";
    descriptionElement.style.color = "rgba(0,0,0,0.5)";
    descriptionElement.style.marginTop = "20px";
    descriptionElement.style.width = '272px !important';
    
    

    const priceElement = document.createElement('p');
    priceElement.classList.add('dataFood_price')
    priceElement.textContent = `${price} $`
    priceElement.style.marginTop = '25px'
    priceElement.style.fontWeight = '700'
    priceElement.style.fontSize = '36px'
    priceElement.style.lineHeight = '42px'
    priceElement.style.color = '#000000'
    priceElement.style.textAlign = 'left'
    priceElement.style.marginLeft = '70px'

    const quantityElement = document.createElement('div');
    quantityElement.classList.add('card_quantity');
    quantityElement.textContent = '+';
    quantityElement.style.display = 'flex';
    quantityElement.style.justifyContent = 'center';
    quantityElement.style.alignItems = 'center';
    quantityElement.style.fontSize = '40px';
    quantityElement.style.width = '70px';
    quantityElement.style.height = '70px';
    quantityElement.style.background = '#212135';
    quantityElement.style.borderRadius = '100%';
    quantityElement.style.color = 'white';
    quantityElement.style.boxShadow = '0px 0px 20px #212135, 0px 0px 10px #212135';
    quantityElement.style.position = 'absolute';
    quantityElement.style.bottom = '30px';
    quantityElement.style.right = '20px';




    productElement.append(imageElement, descriptionElement, priceElement, quantityElement)
    return productElement
}
const elementRef = dataFood.map(cart)
productContainer.append(...elementRef)