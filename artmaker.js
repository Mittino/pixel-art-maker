"use strict";

(function() {

  var colors = [
    '#FF3855',
    '#FFAA1D',
    '#FFF700',
    '#299617',
    '#2243B6',
    '#5DADEC',
    '#5946B2',
    '#9C51B6',
    '#A83731',
    '#AF6E4D',
    '#1B1B1B',
    '#BFAFB2',
    '#FF5470',
    '#FF7A00',
    '#87FF2A',
    '#FF007C',
    '#8A496B',
    '#4570E6',
    '#DA2C43',
    '#44D7A8',
    'white',
  ];
  var brushColor;
  setBrushColor('white');

  var colorContainer = document.querySelector(".colorContainer");
  var gridItem = document.getElementsByClassName("gridBox");


  (function buildGrid(){
    var i;
    var j;
    var gridContainer;
    var gridBox;
    var rows = 45;
    var columns = 25;

    for (i=0; i<rows; i++){
      gridContainer = document.querySelector(".gridContainer");
      gridBox = document.createElement("div");
      gridBox.className += 'gridBox';
      gridContainer.appendChild(gridBox);

      for (j=0; j<columns; j++){
        gridContainer = document.querySelector(".gridContainer");
        gridBox = document.createElement("div");
        gridBox.className += 'gridBox';
        gridContainer.appendChild(gridBox);
      }
    }
  })();


  (function buildColorPallette() {
    colors.forEach(function(colorId) {
      var colorContainerNode = document.getElementById("colorContainer");
      var colorItem = document.createElement("div");
      colorItem.style.backgroundColor = colorId; // Add backgroundColor to element via style attribute
      colorItem.className += 'colorBox'; // Adding a className
      colorItem.dataset.colorId = colorId;
      colorContainerNode.appendChild(colorItem); // Adding to a parent
    });
  })();

  (function addClick(){
    var i;
    var clickHandler = function(){
      this.style.backgroundColor = brushColor;
    };

    for (i=0; i<gridItem.length; i++){
      gridItem[i].addEventListener("click", clickHandler);
    }
  })();

  colorContainer.addEventListener("click", function(){
    var colorBox = event.target;
    setBrushColor(colorBox.dataset.colorId);
    return brushColor;
  });

  function setBrushColor(colorId) {
    brushColor = colorId;
    document.querySelector(".brushColor").style.backgroundColor = colorId;
  }
})();
