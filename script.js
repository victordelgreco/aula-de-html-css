var index = 0; 

function slide(){
var imgArr = document.getElementById('imgContainer').getElementsByTagName('img');
  

  var tamanhoTotal = imgArr.length-1; 
  var indexAnterior = index-1; 

  if(index > tamanhoTotal){
    index = 0;
    indexAnterior = tamanhoTotal;
    imgArr[indexAnterior].style.display = "none"; 
    imgArr[index].style.display = "block";
  }
  else{
    if(index == 0){
      indexAnterior = tamanhoTotal;
    }
    imgArr[indexAnterior].style.display = "none"; 
    imgArr[index].style.display = "block"; 
  }

  index++; 
}

setInterval(slide,1000); 