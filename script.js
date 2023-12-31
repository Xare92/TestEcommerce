var cart = [];

function addToCart(productName, price) {
  var product = { name: productName, price: price };
  cart.push(product);
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function clearCart() {
  cart = [];
  updateCart();
}

function updateCart() {
    var cartItemsElement = document.getElementById('cart-items');
    var checkoutButton = document.getElementById('checkout-btn');
  
    cartItemsElement.innerHTML = '';
  
    if (cart.length === 0) {
      cartItemsElement.innerHTML = '<p>Carrello vuoto</p>';
      checkoutButton.style.display = 'none'; 
    } else {
      var totalPrice = 0;
      for (var i = 0; i < cart.length; i++) {
        var product = cart[i];
        totalPrice += product.price;
  
        var item = document.createElement('div');
        item.innerHTML = '<p>' + product.name + ' - Prezzo: $' + product.price + ' <button onclick="removeFromCart(' + i + ')">Rimuovi</button></p>';
        cartItemsElement.appendChild(item);
      }
  
      var total = document.createElement('p');
      total.innerHTML = 'Totale: $' + totalPrice;
      cartItemsElement.appendChild(total);
  
      checkoutButton.style.display = 'block'; 
    }
  }
  

function toggleSection(sectionId) {
  var sections = document.getElementsByClassName('section');
  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    if (section.id === sectionId + '-section') {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  }
}
function proceedToCheckout() {
    window.location.href = "checkout.html";
  }  

var products = document.querySelectorAll('.product');

products.forEach(function(product) {
  var productImage = product.querySelector('img');
  var productDetails = product.querySelector('.product-details');

  productImage.addEventListener('mouseover', function(event) {

    var mouseX = event.pageX;
    var mouseY = event.pageY;

    productDetails.style.left = mouseX + 'px';
    productDetails.style.top = mouseY + 'px';
  });
});