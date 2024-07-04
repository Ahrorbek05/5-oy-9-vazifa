const wrapper = document.getElementById('wrapper');
const img = document.querySelector('.card img');

function createCard(user) {
    return`
    <div class="card">
    <img src="${user.flag}" alt="flag"/>
    <h1>${user.country}</h1>
    <h3>${user.id}</h3>
    <h2>${user.code}</h2>
 </div>
    `;
}

document.addEventListener('DOMContentLoaded', function () {
    fetch('https://cars-pagination.onrender.com/all-countries')
    .then(function (respone) {
        if(respone.status == 200){
            return respone.json()
        }
    })

    .then(function (data) {
        data.length > 0 && data.forEach(user => {
            const card  = createCard(user);
            wrapper.innerHTML += card; 
        })
    })

});



