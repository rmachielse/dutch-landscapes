var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d', { alpha: false });
var width, height, min, max, diff;

function scale() {
  width = window.innerWidth;
  height = window.innerHeight;
  min = Math.min(width, height);
  max = Math.max(width, height);
  diff = max - min;

  canvas.width = width;
  canvas.height = height;
}

function rectangle(color, x, y, width, height) {
  context.fillStyle = color;
  context.fillRect(x, y, width, height);
}

function shape(color, [x, y], ...points) {
  context.fillStyle = color;
  context.beginPath();
  context.moveTo(Math.round(x), Math.round(y));
  points.forEach(([x, y]) => context.lineTo(Math.round(x), Math.round(y)));
  context.lineTo(Math.round(x), Math.round(y));
  context.fill();
}

window.addEventListener('load', scale);
window.addEventListener('resize', scale);
