let cart = JSON.parse(localStorage.getItem("Add")) || [];
// let loggedin = JSON.parse(localStorage.getItem("loggedin"))||""
// if(loggedin.length==0){
//   location.href='/login_authentication/login.html'
// }
// else{
//   document.getElementById("changeimg").src='/landing_page/Utiles/logout.jpg'
//     document.getElementById("changeimg").addEventListener("click", function(){
//         localStorage.removeItem('loggedin');
//         alert("Your are logged out")
//        window.location.reload();
//     })
// }



function displaydata(cart) {
    document.querySelector("#items").innerHTML=null
    let sum=0;
   cart.map((el,i)=>{
    let cartrow = document.createElement("div");
    cartrow.setAttribute("class", "cartItem row align-items-start");
    let imgbox = document.createElement("div");
    imgbox.setAttribute("class", "col-2 mb-2");
    let img = document.createElement("img");
    img.setAttribute("class", "w-100");
    let descbox = document.createElement("div");
    descbox.setAttribute("class", "col-5 mb-2");
    let name = document.createElement("h6");
    let desc = document.createElement("p");
    desc.setAttribute("class", "pl-1 mb-0");
    let quantitybox = document.createElement("div");
    quantitybox.setAttribute("class", "col-2 quantity");
    let increment = document.createElement("button");
    increment.setAttribute("id", "increment");
    increment.textContent = "+";
    increment.addEventListener("click", function () {
      el.quantity++;
      localStorage.setItem("Add", JSON.stringify(cart))
      displaydata(cart)
      
    });
    let quantity = document.createElement("p");
    quantity.setAttribute("class", "cartItemQuantity p-1 text-center");
    let decrement = document.createElement("button");
    decrement.setAttribute("id", "decrement");
    decrement.textContent = "-";
    decrement.addEventListener("click", function () {
      if (el.quantity != 1) {
        el.quantity--;
        localStorage.setItem("Add", JSON.stringify(cart))
        displaydata(cart)
        
      }
    });
    let pricebox = document.createElement("div");
    pricebox.setAttribute("class", "col-2");
    let price = document.createElement("p");
    price.setAttribute("id", "cartItemPrice");
    let removebox = document.createElement("div");
    removebox.setAttribute("class", "col-1");
  
    removebox.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    removebox.addEventListener("click", function () {
      removeitem(i);
    });
  
    img.src =el.img3
    imgbox.append(img);
    name.textContent = el.des;
    desc.textContent = "";
    descbox.append(name, desc);
  
    quantity.textContent = el.quantity;
    quantitybox.append(increment, quantity, decrement);
    
    price.textContent = el.price;
  
    pricebox.append(price);
  
    cartrow.append(imgbox, descbox, quantitybox, pricebox, removebox);
    let hr = document.createElement("hr");
    document.querySelector("#items").append(cartrow,hr);
    sum+=Number(el["price-currency-text"])*Number(el.quantity)
  
   })
    document.getElementById("subtotal").innerText=`₹ ${sum}`;
    document.getElementById("tax").innerText=`₹ ${sum*0.18}`;
    document.getElementById("total").innerText=`₹ ${sum+sum*0.18}`
  }
  
  displaydata(cart);
  
  function removeitem(i) {
    cart.splice(i, 1);
    localStorage.setItem("Add", JSON.stringify(cart));
    displaydata(cart);
  }