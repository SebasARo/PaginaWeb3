const galeriaImg =document.getElementById('fulBox');
fullImg = document.getElementById("fulImg");//optener elemento de la imagen

function openImg(reference){
    galeriaImg.style.display = "flex"
    fullImg.src = reference;
}

function closeImg(){
    galeriaImg.style.display = "none"
}