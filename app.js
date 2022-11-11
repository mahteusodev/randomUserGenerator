let details = document.querySelector('.details');
let genUserBtn = document.querySelector('.genUserBtn');
let imgContainer = document.querySelector('.imgContainer');
let url = 'https://random-data-api.com/api/v2/users?response_type=json';

function genUser() {
    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
        imgContainer.innerHTML = `<img src= ${data.avatar}>`;
        details.innerHTML=
        `<h2>${data.first_name} ${data.last_name}</h2>
         <h3>${data.employment.title}</h3>
         <h4>${data.address.city}</h4>`
    });
}

window.addEventListener("load", genUser);
genUserBtn.addEventListener("click", genUser);