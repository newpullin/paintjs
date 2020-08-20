const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
canvas.width = "700";
canvas.height = "400";
ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = "2.5";

let painting = false;
let filling = false;
function onMouseMove(event) {

    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}
function startPainting(event) {
    if (filling) {

        ctx.fillRect(0, 0, 700, 400);
    }
    else {
        painting = true;
    }
}
function stopPainting(event) {
    painting = false;
}
function colorHandler(event) {
    const color = event.target.style.backgroundColor;
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
}
if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach(color => color.addEventListener("click", colorHandler));

function handleRangeChange(event) {
    ctx.lineWidth = event.target.value;
}
if (range) {
    range.addEventListener("input", handleRangeChange);
}

function handleModeClick(event) {
    if (!filling) {
        filling = true;
        mode.innerHTML = "paint"
    }
    else {
        filling = false;
        mode.innerHTML = "fill"
    }
}
if (mode) {
    mode.addEventListener("click", handleModeClick);
}