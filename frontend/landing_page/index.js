let loggedin = JSON.parse(localStorage.getItem("loggedin"))||"";
if(loggedin.length!=0){
    document.getElementById("changeimg").src='/landing_page/Utiles/logout.jpg'
    document.getElementById("changeimg").addEventListener("click", function(){
        localStorage.removeItem('loggedin');
        alert("Your are logged out")
       window.location.reload();
    })
}
else{
    document.getElementById("changeimg").addEventListener("click", function(){
       
        window.location.href='/login_authentication/login.html'
    })
}