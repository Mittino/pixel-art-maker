"use strict";

var grid = document.getElementById("line1");
console.log(grid);
var gridItem = document.getElementsByClassName("gridBox");
console.log(gridItem);

function addClick(){
  var i;

  for (i=0; i<gridItem.length; i++){
    console.log(gridItem[i]);
    gridItem[i].addEventListener("click", function(){
      this.style.backgroundColor = "red";
    });
  }
}
console.log(addClick());
