function reset(){
    var a = confirm("sure you want to reset?")
    if(a==true){
        document.getElementById("name").value=""
        document.getElementById("surname").value=""
        document.getElementById("city").value=""
     }
    }
     document.querySelector("button").onclick=function(){reset()}