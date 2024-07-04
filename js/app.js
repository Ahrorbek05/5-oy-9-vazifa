const wrapper = document.getElementById('wrapper');
const img = document.querySelector('.card img');
const loader = document.querySelector('.spinner');
const close = document.querySelector('.close-popup');

function createCard(user) {
  return `
    <div class="card">
      <img src="${user.flag}" alt="flag" class="card-image" />
      <h1>${user.country}</h1>
      <h3>${user.id}</h3>
      <h2>${user.code}</h2>
      <div class="card-overlay">
        <img src="${user.flag}" alt="flags" class="flags-image" />
        <span class="close-popup">&times;</span>
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', function () {
    alert("Sahifada 261 ta davlatning ma'lumotlari mavjud!");
  fetch('https://cars-pagination.onrender.com/all-countries')
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Failed to fetch data');
      }
    })
    .then(data => {
      if (data.length > 0) {
        wrapper.innerHTML = data.map(user => createCard(user)).join('');
      } else {
        wrapper.innerHTML = '<p>No data available</p>';
      }
    })
    .catch(err => {
      console.error(err);
      wrapper.style.display = 'block';
    })
    .finally(() => {
      loader.style.display = 'none';
    });
});

img.addEventListener('click', function(event) {
  const clickedElement = event.target;

  if (clickedElement.classList.contains('card-image')) {
    const card = clickedElement.closest('.card');
    const overlay = card.querySelector('.card-overlay');
    overlay.style.display = 'block';
  }

  if (clickedElement.classList.contains('close-popup')) {
    const overlay = clickedElement.closest('.card-overlay');
    overlay.style.display = 'none';
  }
});
