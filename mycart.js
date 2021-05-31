window.addEventListener('load', function () {
    displaycart();
    clrearlocalstorage();
});
//function run when choose products
function displaycart() {
    var cartItems = localStorage.getItem('productsIncart');
    //covert from json to js object
    cartItems = JSON.parse(cartItems);
    var productcontainer = document.querySelector(".products");
    var cartcost = localStorage.getItem("totalCost ");
    console.log(cartItems);
    //check if there is any thing in local storage and in my page 
    if (cartItems && productcontainer) {
        //in the first empty page
        productcontainer.innerHTML = '';
        //loop and chick  the values
        Object.values(cartItems).map(function (item) {
            //add new products 
            productcontainer.innerHTML += `
            <table class="product">
    <tr>
        <td style="padding-left: 0px;"> ${item.name}</td>
        <td style="padding-left: 100px;">$${item.price}</td>
        <td style="padding-left: 130px;">${item.incart}</td>
        <td style="padding-left: 120px;">$${item.incart * item.price},00</td>
    </tr>
</table>
                   
            `;
        });
// <div class="product">
            // ${item.name}
            // <div class="price"> $${item.price}</div>
            // <div class="quantity">${item.incart}</div>
            // <div class="total">$${item.incart * item.price},00</div>
            // </div> 
        productcontainer.innerHTML += `
        <div class="basketTotalContainer">
          <h4 class="basketTotalTitle">  Basket Total </h4>
          <h4 class="basketTotal"> $${cartcost},00  </h4>
        </div>
    `;
    productcontainer.innerHTML += `
    <div class="btnconfirmcontainer">
    <input id="confirmclrear" type="submit" value="confirm" />

    </div>
`;
}

}
function clrearlocalstorage()
{
    var clearbtn=document.getElementById("confirmclrear");
    clearbtn.addEventListener('click',function(){
        sendEmail();
        alert("Massege sent");
       localStorage.clear();
       window.location.reload();
   });
}
function sendEmail(params) {

    var tempparams={
        from_name:'java script code',
        to_name:'smosobhy@gmail.com',
        message:'confirm buying'
    };
     emailjs.send('service_uyw6qhb','template_ud2ps8r',tempparams)
    .then(function(res){
        console.log("success",res.status);
    })
}