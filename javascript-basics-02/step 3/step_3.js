function change_text(){
    let b=  document.getElementById("name").value;
    document.getElementById("text").innerHTML=b;
}
document.querySelector("#name").oninput= function(){change_text()};