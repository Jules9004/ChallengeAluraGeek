const loginButton = document.getElementById('login-btn');
const loginModal = document.getElementById('login-modal');
const closeModalButton = document.getElementsByClassName('close')[0];
const searchInput = document.getElementById('search-input');
const products = Array.from(document.getElementsByClassName('product'));

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

  products.forEach((product) => {
    const productName = product.querySelector('h2').innerText.toLowerCase();
    if (productName.includes(searchTerm)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
});
