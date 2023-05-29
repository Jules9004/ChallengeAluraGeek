document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.getElementById('search-input');
  
    searchInput.addEventListener('input', function () {
      var searchTerm = searchInput.value.toLowerCase();
  
      var products = document.querySelectorAll('#product-table tbody tr');
  
      for (var i = 0; i < products.length; i++) {
        var product = products[i];
        var productName = product.querySelector('td:first-child').textContent.toLowerCase();
  
        if (productName.includes(searchTerm)) {
          product.style.display = 'table-row';
        } else {
          product.style.display = 'none';
        }
      }
    });
  });
  