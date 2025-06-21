document.addEventListener('DOMContentLoaded', () => {
    fetch('public/menu.json')
      .then(response => response.json())
      .then(menuItems => renderMenu(menuItems))
      .catch(err => {
        console.error("Error loading menu:", err);
        document.getElementById('menu-container').innerHTML = "<p>Failed to load menu.</p>";
      });
  });
  
  function renderMenu(items) {
    const container = document.getElementById('menu-container');
    container.innerHTML = '';
  
    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'menu-item';
  
      card.innerHTML = `
        <img src="${item.image || 'https://via.placeholder.com/300x180'}" alt="${item.name}" />
        <div class="menu-details">
          <h2>${item.name}</h2>
          <p class="price">$${item.price.toFixed(2)}</p>
          <p>${item.description}</p>
          <p><strong>Category:</strong> ${item.category}</p>
        </div>
      `;
  
      container.appendChild(card);
    });
  }
  