let cellData = [];

// Create a 10x10 grid
function createGrid(rows = 10, cols = 10) {
  const sheet = document.getElementById('sheet');
  for (let i = 0; i < rows; i++) {
    let row = document.createElement('tr');
    cellData[i] = [];
    for (let j = 0; j < cols; j++) {
      let cell = document.createElement('td');
      cell.contentEditable = true;
      cell.addEventListener('input', (event) => updateCell(i, j, event.target.textContent));
      row.appendChild(cell);
      cellData[i][j] = '';
    }
    sheet.appendChild(row);
  }
}

// Update cell data when edited
function updateCell(row, col, value) {
  cellData[row][col] = value;
  checkFormula(row, col);
}

// Check and evaluate formulas
function checkFormula(row, col) {
  let cellValue = cellData[row][col];
  if (cellValue.startsWith('=')) {
    let formula = cellValue.slice(1);
    // Implement logic for handling the formula (SUM, AVERAGE, etc.)
    // For now, just log the formula
    console.log('Formula detected:', formula);
  }
}

// Apply bold styling to selected cell
function applyBold() {
  document.execCommand('bold');
}

// Call createGrid to initialize the grid when the page loads
createGrid();
