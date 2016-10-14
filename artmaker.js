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
  var selectedColor = "";
  //var color = document.getElementByID()
  //selectedColor =
  console.log(this.style.backgroundColor);
  console.log(selectedColor);
  console.log(event.target.id);
});
console.log(colorContainer.this);
//function selectColor(){
  // var i;
  // for(i=0; i<colorItems.length; i++){
  //   console.log(colorItems[i]);
  //   colorItems[i].addEventListener("click", function(){
  //
  //     selectedColor = colorItems[i].style.backgroundColor;
  //     console.log(selectedColor);
  //   });
  //}
// }
// console.log(selectColor());
