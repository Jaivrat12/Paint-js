const canvas = document.getElementById('canvas');

function drawPixel(x, y) {

    const pixel = document.createElement('span');
    pixel.className = 'pixel';
    pixel.style.top = `${ y }px`;
    pixel.style.left = `${ x }px`;
    canvas.appendChild(pixel);
}

let mouseDown = false;
canvas.addEventListener('mousedown', (e) => {

    const { offsetX, offsetY } = e;
    drawPixel(offsetX, offsetY);
    mouseDown = true;
});
canvas.addEventListener('mouseup', (e) => mouseDown = false);

canvas.addEventListener('mousemove', (e) => {
    
    if (mouseDown) {

        const { offsetX, offsetY } = e;
        drawPixel(offsetX, offsetY);
    }
});