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
      this.style.backgroundColor = "red";
    });
  }
}
console.log(addClick());

colorContainer.addEventListener("click", function(){
  var selectedColor = event.target.getAttribute('id');
  console.log(selectedColor);
  return selectedColor;
});
