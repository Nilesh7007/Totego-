// let loggedin = JSON.parse(localStorage.getItem("loggedin"))||"";
// if(loggedin.length!=0){
//     document.getElementById("changeimg").src='/landing_page/Utiles/logout.jpg'
//     document.getElementById("changeimg").addEventListener("click", function(){
//         localStorage.removeItem('loggedin');
//         alert("Your are logged out")
//        window.location.reload();
//     })
// }
// else{
//     document.getElementById("changeimg").addEventListener("click", function(){
       
//         window.location.href='/login_authentication/login.html'
//     })
// }


let cart = document.getElementById("carrt");
let token = localStorage.getItem("token")
cart.addEventListener("click", ()=>{

    if(token){
        window.location.href='../Cart_Page/cart.html'
    }
    else{
        window.location.href='../Sign_in/login.html'
    }
})