function water() {
  rectangle('#3f6d82', 0, 0, width, height);
}

function field([ax, ay], [bx, by], [cx, cy], [dx, dy]) {
  shape('#55402d', ...arguments);

  shape(
    '#3f371d',
    [bx - 5, by],
    [bx, by],
    [cx, cy],
    [cx - 5, cy]
  );

  shape(
    '#675b4a',
    [ax, ay],
    [ax + 10, ay],
    [dx, dy + 10],
    [dx, dy]
  );
}

function grass([ax, ay], [bx, by], [cx, cy], [dx, dy]) {
  shape('#545a29', ...arguments);

  shape(
    '#74634b',
    [ax, ay],
    [ax + 10, ay],
    [dx + 10, dy],
    [dx, dy]
  );

  shape(
    '#3a4d25',
    [bx - 5, by],
    [bx, by],
    [cx, cy],
    [cx - 5, cy]
  );
}

function sand([ax, ay], [bx, by], [cx, cy], [dx, dy]) {
  shape('#b0ad9f', ...arguments);

  shape(
    '#c4bcb0',
    [ax, ay],
    [ax + 10, ay],
    [dx + 10, dy],
    [dx, dy]
  );

  shape(
    '#969581',
    [bx, by - 5],
    [bx, by],
    [cx, cy],
    [cx - 5, cy]
  );
}

function dike([ax, ay], [bx, by], [cx, cy], [dx, dy]) {
  var xdiff = cx - dx,
      ydiff = by - ay;

  field(
    [ax, ay],
    [bx, by - ydiff / 2],
    [cx - xdiff / 2, cy],
    [dx, dy]
  );

  grass(
    [ax, ay + ydiff / 2],
    [bx, by],
    [cx, cy],
    [dx + xdiff / 2, dy]
  );

  sand(
    [ax, ay + ydiff * 0.25],
    [bx, by - ydiff * 0.1],
    [cx - xdiff * 0.1, cy],
    [dx + xdiff * 0.25, dy]
  );
}

function draw() {
  water();

  field(
    [0, 0],
    [min * 0.2 + diff / 2, 0],
    [0, min * 0.2 + diff / 2],
    [0, 0]
  );

  field(
    [min * 0.25 + diff / 2, 0],
    [1.2 * min + diff / 2, 0],
    [0, 1.2 * min + diff / 2],
    [0, min * 0.25 + diff / 2]
  );

  dike(
    [width, 0.25 * min + (height - width) / 2],
    [width, 0.5 * min + (height - width) / 2],
    [0.5 * min - (height - width) / 2, height],
    [0.25 * min - (height - width) / 2, height]
  );

  grass(
    [width, height - min * 0.45 - diff / 2],
    [width, height],
    [width, height],
    [width - min * 0.45 - diff / 2, height]
  );
}

window.addEventListener('load', draw);
window.addEventListener('resize', draw);
