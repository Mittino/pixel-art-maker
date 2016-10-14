"use strict";

var grid = document.getElementById("line1");
//console.log(grid);
var gridItem = document.getElementsByClassName("gridBox");
//console.log(gridItem);

var colorContainer = document.querySelector(".colorContainer");
console.log(colorContainer);

function addClick(){
  var i;
  for (i=0; i<gridItem.length; i++){
    //console.log(gridItem[i]);
    gridItem[i].addEventListener("click", function(){
      this.style.backgroundColor = brushColor;
    });
  }
}
console.log(addClick());

var brushColor;

colorContainer.addEventListener("click", function(){
  brushColor = event.target.getAttribute('id');
  document.querySelector(".brushColor").style.backgroundColor = brushColor;
  console.log(brushColor);
  return brushColor;
});
console.log(brushColor);
