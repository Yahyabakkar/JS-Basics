function newimage(){
    document.getElementById("image1").src="images/image1_2.jpg"
}
document.getElementById("image1").onmouseover=function(){
    console.log("1")
    newimage()
}          