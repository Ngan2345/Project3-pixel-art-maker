// 1. Define global variables
const table = document.getElementById('pixelCanvas');
const sizePicker = document.getElementById('sizePicker');
const inputHeight = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');
const colorPicker = document.getElementById('colorPicker');

// 2. Add event listeners to submit event

// Prevent page to go back to default
// Get height and width value
sizePicker.addEventListener('click', function(event) {
    event.preventDefault();
    let height = inputHeight.value;
    let width = inputWidth.value;
    table.firstChild.remove();
    makeGrid(height, width);
});

// 3. Set cross stitch canvas size

// Add function makeGrid()
function makeGrid(height, width) {
    for (let r = 0; r < height; r++) {
        let row = table.insertRow(r);
        for (let c = 0; c < width; c++) {
            let cell = row.insertCell(c);
            cell.addEventListener('click', function (event) {
                event.target.style.backgroundColor = colorPicker.value;
            });
        }
    }
};

// Create a default grid
makeGrid(1, 1);
