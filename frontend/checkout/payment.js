document.querySelector("form").addEventListener("sumbit", (e)=>{
    e.preventDefault();
    console.log("inside")
   let card = document.getElementById("cardno").value;
   if(card.length==16){
    console.log("suc")
        window.location.href="succesful.html"
   }
   else{
    console.log("fail")
    alert("Please fill the valid card detail")
   }
})