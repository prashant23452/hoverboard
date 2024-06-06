const container = document.getElementById('container')
const colors = ['#e74c3s', '#8e44ad', '#3498db', '#e67e22', '#2ecc71', '#ff007f', '#ffda00','#0000cd']

const SQUARES = 600;

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
} 