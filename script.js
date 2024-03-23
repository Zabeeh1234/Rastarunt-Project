function displayMenus(category) {
    var menuCont = document.querySelector('.menuCont');
    fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            menuCont.innerHTML = "";
            data[category].forEach(card => {
                var cardHtml = `
            <img src="${card.titleImg}" class="yummy kitkat dairymilk" alt="">
             <div class="menus">
             <div class="m-card">
              <h2 class="cards-title">${card.title}</h2>
              <img src="${card.src}" alt="">
              <div class="container">
              <button class="add-to-cart-button">
                <svg class="add-to-cart-box box-1" width="15" height="15" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="2" fill="#ffffff" />
                </svg>
                <svg class="add-to-cart-box box-2" width="15" height="15" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="2" fill="#ffffff" />
                </svg>
                <svg class="cart-icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
                  fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <svg class="tick" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path fill="#ffffff"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29L5.7 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z" />
                </svg>
                <span class="add-to-cart">Add to cart</span>
                <span class="added-to-cart">Added to cart</span>
              </button>
            </div>
          </div>

            </div>
            </div>
            `;
                menuCont.innerHTML += cardHtml;

                addToCartButton = document.querySelectorAll(".add-to-cart-button");

                document.querySelectorAll('.add-to-cart-button').forEach(function (addToCartButton) {
                    addToCartButton.addEventListener('click', function () {
                        addToCartButton.classList.add('added');
                        setTimeout(function () {
                            addToCartButton.classList.remove('added');
                        }, 2000);
                    });
                });
            })

        })
        .catch(error => console.log("Fetching not resolved", error));
}
// displayMenus("yummy");

document.getElementById('btn-2').addEventListener('click', function () {
    displayMenus("yummy");
})

document.getElementById('btn-3').addEventListener('click', function () {
    displayMenus("kitKat");
})

document.getElementById('btn-4').addEventListener('click', function () {
    displayMenus("dairyMilk");
})

//add to card button

addToCartButton = document.querySelectorAll(".add-to-cart-button");

document.querySelectorAll('.add-to-cart-button').forEach(function (addToCartButton) {
    addToCartButton.addEventListener('click', function () {
        addToCartButton.classList.add('added');
        setTimeout(function () {
            addToCartButton.classList.remove('added');
        }, 2000);
    });
});

AudioScheduledSourceNode.init({
    offset: 300,
    duration: 1000,
});


function ScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


