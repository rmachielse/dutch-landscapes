var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d', { alpha: false });

function roundFillRect(context, x, y, width, height, radius) {
  context.beginPath();
  context.moveTo(x, y + radius);
  context.lineTo(x, y + height - radius);
  context.arcTo(x, y + height, x + radius, y + height, radius);
  context.lineTo(x + width - radius, y + height);
  context.arcTo(x + width, y + height, x + width, y + height-radius, radius);
  context.lineTo(x + width, y + radius);
  context.arcTo(x + width, y, x + width - radius, y, radius);
  context.lineTo(x + radius, y);
  context.arcTo(x, y, x, y + radius, radius);
  context.fill();
}

var length = 1000;
var startPosition = -length,
    startTime = new Date(),
    speed = 0.2;

function landscape() {
  var ratio = window.devicePixelRatio || 1,
      width = window.innerWidth,
      height = window.innerHeight;

  canvas.width = width * ratio;
  canvas.height = height * ratio;
  canvas.style.width = width;
  canvas.style.height = height;
  context.scale(ratio, ratio);

  // background
  context.fillStyle = '#504228';
  context.fillRect(0, 0, width, 30);

  context.fillStyle = '#406d80';
  context.fillRect(0, 320, width, height - 320);

  context.fillStyle = '#898f74';
  context.fillRect(0, 420, width, 30);

  context.fillStyle = '#555b29';
  context.fillRect(0, 450, width, height - 450);

  context.save();
  context.shadowOffsetY = 50;
  context.shadowColor = 'rgba(0, 0, 0, 0.1)';

  context.fillStyle = '#575c29';
  context.fillRect(0, 270, width, 50);

  context.fillStyle = '#b0ad9f';
  context.fillRect(0, 30, width, 240);
  context.restore();

  // rails
  context.fillStyle = '#68645b';
  context.fillRect(0, 115, width, 15);
  context.fillRect(0, 170, width, 15);
  context.fillRect(i, 100, 15, 100);
  for (var i = 10; i <= width; i = i + 35) {
    context.fillRect(i, 100, 15, 100);
  }

  // fences
  context.fillStyle = 'black';
  context.fillRect(0, 78, width, 2);
  context.fillRect(0, 220, width, 2);

  // train
  context.save();

  var x = startPosition + speed * ((new Date() - startTime)) % (width + length);

  context.save();
  context.shadowOffsetX = -50;
  context.shadowOffsetY = 50;
  context.shadowColor = 'rgba(0, 0, 0, 0.1)';

  context.fillStyle = '#ede466';
  context.beginPath();
  context.moveTo(x + 50, 95);
  context.lineTo(x + length - 50, 95);
  context.quadraticCurveTo(x + length, 100, x + length, 110);
  context.lineTo(x + length, 190);
  context.quadraticCurveTo(x + length, 200, x + length - 50, 205);
  context.lineTo(x + 50, 205);
  context.quadraticCurveTo(x, 200, x, 190);
  context.lineTo(x, 110);
  context.quadraticCurveTo(x, 100, x + 50, 95);
  context.fill();
  context.restore();
  context.clip();

  context.fillStyle = '#5c5e61';
  context.fillRect(x, 110, length, 80);

  context.beginPath();
  context.moveTo(x + length - 80, 110);
  context.lineTo(x + length - 25, 95);
  context.lineTo(x + length, 95);
  context.lineTo(x + length, 205);
  context.lineTo(x + length - 25, 205);
  context.lineTo(x + length - 80, 190);
  context.fill();

  context.beginPath();
  context.moveTo(x + 80, 110);
  context.lineTo(x + 25, 95);
  context.lineTo(x, 95);
  context.lineTo(x, 205);
  context.lineTo(x + 25, 205);
  context.lineTo(x + 80, 190);
  context.fill();

  context.fillStyle = '#959794';

  context.beginPath();
  context.moveTo(x + length - 80, 115);
  context.lineTo(x + length - 40, 105);
  context.quadraticCurveTo(x + length - 25, 100, x + length - 25, 115);
  context.lineTo(x + length - 25, 185);
  context.quadraticCurveTo(x + length - 25, 200, x + length - 40, 195);
  context.lineTo(x + length - 80, 185);
  context.fill();

  context.beginPath();
  context.moveTo(x + 80, 115);
  context.lineTo(x + 40, 105);
  context.quadraticCurveTo(x + 25, 100, x + 25, 115);
  context.lineTo(x + 25, 185);
  context.quadraticCurveTo(x + 25, 200, x + 40, 195);
  context.lineTo(x + 80, 185);
  context.fill();

  context.restore();

  // high-voltage line
  context.save();
  context.shadowOffsetX = -20;
  context.shadowOffsetY = 20;
  context.shadowColor = 'rgba(0, 0, 0, 0.1)';

  context.fillStyle = 'black';
  context.fillRect(0, 125, width, 4);
  context.fillRect(0, 170, width, 4);
  for (var j = 30; j <= width; j = j + 450) {
    roundFillRect(context, j, 40, 25, 25, 5);
    roundFillRect(context, j, 235, 25, 25, 5);
    context.fillRect(j + 9, 65, 8, 170);
  }
  context.restore();

  window.requestAnimationFrame(landscape);
}

window.requestAnimationFrame(landscape);
