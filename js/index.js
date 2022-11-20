// ITERATION 1

function updateSubtotal(product) {
  
  const price = product.queryselector('.price span').innerHTML

  const quantity = product.querySelector('.quantity input').valueAsNumber 

  const subtotal = +price * quantity

  const subtotalElement = product.querySelector('.subtotal span')

  subtotalElement.innerHTML = subtotal

  return subtotal 
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test




  // ITERATION 2
  
const productCollection = document.getElementsByClassName('product')

const productList = [...productCollection]

let total = 0;

productList.forEach(product => total += updateSubtotal(product))


  // ITERATION 3
  console.log (total)
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const parent = target.parentNode.parentNode
  parent.remove()

  calculateAll()

  console.log('The target in remove is:', target);
  
}





// ITERATION 5

function createProduct() {
  const nameImput = document.querySelector('.create-product input')

  let nameValue = nameImput.valueAsNumber

  const priceInput = document.querySelector('.create-product input[type=number]')

  let priceValue = priceInput.valueAsNumber

  if (nameValue == '' || !priceValue){
    window.alert('You should add the information')
    return
  }
   
  let newProduct = document.createAttribute.createElement ('tr')
  newProduct.className = 'product'

  newProduct.innerHTML= 

  <td class="name">
    <span>${nameValue}</span>
  </td>



}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
