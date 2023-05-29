const loginButton = document.getElementById('login-btn');
const loginModal = document.getElementById('login-modal');
const closeModalButton = document.getElementsByClassName('close')[0];
const searchInput = document.getElementById('search-input');
const productsGallery = document.getElementById('products-gallery');

const adminUsername = 'admin';
const adminPassword = 'admin123';

loginButton.addEventListener('click', () => {
  loginModal.style.display = 'block';
});

closeModalButton.addEventListener('click', () => {
  loginModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target == loginModal) {
    loginModal.style.display = 'none';
  }
});

searchInput.addEventListener('keyup', (event) => {
  const searchTerm = event.target.value.toLowerCase();

  Array.from(productsGallery.children).forEach((product) => {
    const productName = product.querySelector('h3').innerText.toLowerCase();
    if (productName.includes(searchTerm)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
});

function addProduct() {
  const productName = document.getElementById('name_field').value;
  const productPrice = document.getElementById('price_field').value;
  const productDescription = document.getElementById('description_field').value;
  const productImages = document.getElementById('customFile').files;

  const newProduct = document.createElement('div');
  newProduct.className = 'product';
  newProduct.innerHTML = `
    <img src="" alt="Maquillaje">
    <h3>${productName}</h3>
    <p>Precio: $${productPrice}</p>
    <p>${productDescription}</p>
    <a href="#">Ver detalles</a>
  `;

  productsGallery.appendChild(newProduct);

  const reader = new FileReader();
  reader.onload = function (event) {
    newProduct.querySelector('img').src = event.target.result;
  };

  for (let i = 0; i < productImages.length; i++) {
    reader.readAsDataURL(productImages[i]);
  }

  resetForm();
}

function resetForm() {
  document.getElementById('myForm').reset();
}

function authenticate(username, password) {
  return username === adminUsername && password === adminPassword;
}

function showAdminSection() {
  const adminSection = document.getElementById('admin-section');
  adminSection.style.display = 'block';
  loginModal.style.display = 'none';
}

const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const usernameInput = loginForm.querySelector('input[type="text"]');
  const passwordInput = loginForm.querySelector('input[type="password"]');
  const username = usernameInput.value;
  const password = passwordInput.value;

  if (authenticate(username, password)) {
    showAdminSection();
  } else {
    alert('Credenciales incorrectas. Inténtalo de nuevo.');
  }

  loginForm.reset();
});

const addProductForm = document.getElementById('myForm');
addProductForm.addEventListener('submit', (event) => {
  event.preventDefault();
  addProduct();
});
