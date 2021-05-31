window.addEventListener('load', function () {
    onloadcartnums();
    var btnbuy = document.getElementsByClassName('btn');
    //array of my products which objects
    products = [
        {
            name: 'AppleLaptops',
            tag: 'laptop 1',
            price: 500,
            incart: 0 //how many items in cart
        },
        {
            name: 'Dell Laptops',
            tag: 'laptop 2',
            price: 350,
            incart: 0
        },
        {
            name: 'AppleLaptops',
            tag: 'laptop 3',
            price: 800,
            incart: 0
        },
        {
            name: 'Asus Laptops',
            tag: 'laptop 4',
            price: 700,
            incart: 0
        },
        {
            name: 'AppleLaptops',
            tag: 'laptop 5',
            price: 900,
            incart: 0
        },
        {
            name: 'Dell Laptops',
            tag: 'laptop 6',
            price: 1000,
            incart: 0
        },
        {
            name: 'Asus Laptops',
            tag: 'laptop 7',
            price: 1200,
            incart: 0
        },
        {
            name: 'AppleLaptops',
            tag: 'laptop 8',
            price: 2000,
            incart: 0
        },
        {
            name: 'Dell Laptops',
            tag: 'laptop 9',
            price: 2500,
            incart: 0
        }
    ];
    for (let i = 0; i < btnbuy.length; i++) {
        btnbuy[i].addEventListener('click', function () {
           //chick if user regester or no
            var userreges = document.cookie;
            if (userreges == "") {
                alert("Regester Or Login First");

            } else {
                btnnums(products[i]);
                totalcost(products[i]);
            }

        })
    }
});//end of load

//function to getting clicked products from local storage
function btnnums(p) {
    //geting products which user choose
    var prodnums = localStorage.getItem('btnnums');
    //convert from string to number
    prodnums = parseInt(prodnums);
    //chick if there is products or not choosen
    if (prodnums) {
        localStorage.setItem('btnnums', prodnums + 1);
        //from class cart and number(span) of products 
        document.querySelector('.cart span').textContent = prodnums + 1;
    }
    else {
        localStorage.setItem('btnnums', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(p);
}

//function to chick products from local storage and keep nums of productsnin the span 
function onloadcartnums() {
    //geting products which user choose
    var prodnums = localStorage.getItem('btnnums');
    if (prodnums) {
        document.querySelector('.cart span').textContent = prodnums;
    }
}
//function to add clicked products to local storage
function setItems(p) {
    var cartItems = localStorage.getItem('productsIncart');
    //covert from json to js object
    cartItems = JSON.parse(cartItems);
    console.log("My cartItems are ", cartItems);
    //check if there products in local storage or no
    if (cartItems != null) {
        //if click on diff product
        if (cartItems[p.tag] == undefined) {
            cartItems = {
                //to add diff product without clear first one(save more one product) 
                ...cartItems,
                [p.tag]: p
            }
        }
        //getting and increas it by one
        cartItems[p.tag].incart += 1;
    }
    else {
        //first time to clicke
        p.incart = 1;
        cartItems = { [p.tag]: p }
    }
    // json object to js object
    localStorage.setItem("productsIncart", JSON.stringify(cartItems));
}
//function to calcolate total cost
function totalcost(p) {
    var cartcost = localStorage.getItem("totalCost ");

    if (cartcost != null) {
        cartcost = parseInt(cartcost);
        localStorage.setItem("totalCost ", cartcost + p.price);

    } else
    //first click set price
        localStorage.setItem("totalCost ", p.price);

}

