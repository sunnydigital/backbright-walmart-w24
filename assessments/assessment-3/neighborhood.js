function getRandomRestaurant(evt) {
    evt.preventDefault();
    
    const restaurantArray = ['Joyce Chinese', 'Gameeok', 'Chillers Grill', 'Kura Revolving Sushi Bar', 'Q Tea Tapas', 'Tsujita Artisan Noodles'];
    let item = restaurantArray[Math.floor(Math.random()*restaurantArray.length)];

    alert(item);
}

let randomRestaurantBtn = document.querySelector('#get-random-restaurant');
randomRestaurantBtn.addEventListener('click', getRandomRestaurant);
    console.log("Event listener added");