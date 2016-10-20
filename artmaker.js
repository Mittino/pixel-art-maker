"use strict";

(function() {

  var colors = [
    '#D92121',
    '#FF007C',
    '#FF3855',
    '#FF5470',
    '#FF00CC',
    '#FFAA1D',
    '#FF7A00',
    '#FF681F',
    '#FFAE42',
    '#FFDB00',
    '#FFF700',
    '#FFFF9F',
    '#299617',
    '#5E8C31',
    '#87FF2A',
    '#00CCCC',
    '#44D7A8',
    '#2243B6',
    '#5DADEC',
    '#4570E6',
    '#2E5894',
    '#4A646C',
    '#6F2DA8',
    '#5946B2',
    '#9C51B6',
    '#8A496B',
    '#87421F',
    '#A83731',
    '#AF6E4D',
    '#C39953',
    '#92926E',
    'white',
    '#1B1B1B',
    '#8B8680',
    '#BFAFB2',
  ];
  var brushColor;
  setBrushColor('white');

  var colorContainer = document.querySelector(".colorContainer");
  var gridContainer = document.querySelector(".gridContainer");
  var selectColor = document.getElementById("selectColor");
  console.log(selectColor);
  var submitColor = document.getElementById("submitColor");


  (function buildGrid(){
    var i;
    var j;
    var gridContainer;
    var gridRow;
    var gridBox;
    var rows = 25;
    var columns = 25;

    for (i=0; i<rows; i++){
      gridContainer = document.querySelector(".gridContainer");
      gridRow = document.createElement("div");
      gridRow.className += 'gridRow';
      gridContainer.appendChild(gridRow);

      for (j=0; j<columns; j++){
        gridContainer = document.querySelector(".gridRow");
        gridBox = document.createElement("div");
        gridBox.className += 'gridBox';
        gridRow.appendChild(gridBox);
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
    var mousedown = false;

    gridContainer.addEventListener("mousedown", function() {
      mousedown = true;
    });
    gridContainer.addEventListener("mouseup", function() {
      mousedown = false;
    });
    gridContainer.addEventListener("mousemove", function() {
      if (mousedown === true && event.target.className.includes('gridBox')) {
        event.target.style.backgroundColor = brushColor;
      }
    });
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

  selectColor.addEventListener("change", function(){
    brushColor = document.getElementById("selectColor").value;
    setBrushColor(brushColor);
    return brushColor;
  });

})();
