var x =document.querySelectorAll("img");
for(let y=0;y<=x.length;y++){
x[y].addEventListener("mouseover",function(){
document.getElementById("image"+(y+1)).src="images/image"+(y+1)+"_2.jpg"
})
}