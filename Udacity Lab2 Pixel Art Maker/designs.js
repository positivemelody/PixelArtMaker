// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

  var gridHeight = document.getElementById('inputHeight').value;
  var gridWidth = document.getElementById('inputWidth').value;
  var canvas = document.getElementById('pixelCanvas');
  var color = document.getElementById('colorPicker');
  var sizePicker = document.getElementById("sizePicker");
  var cell;
   var row

  while (canvas.rows.length > 0) {
  canvas.deleteRow(0);
  }


  for (var n = 0; n < gridHeight; n++) {
     row = canvas.insertRow(n);

    for (var m = 0; m < gridWidth; m++) {
       cell = row.insertCell(m);

      cell.addEventListener('click', function(event) {
       
        event.target.style.backgroundColor = color.value;
      });
    }
  }
}

sizePicker.addEventListener('submit', function(event) {
  event.preventDefault();
  makeGrid();
});

