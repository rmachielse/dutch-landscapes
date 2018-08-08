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

function tulips(color, [ax, ay], [bx, by]) {
  var j = ay;
  for (var i = ax; i <= bx; i = i + 5) {
    j = j + 5;
    rectangle(color, i, j, 5, 5);
    rectangle(color, i - 3, j + 3, 5, 5);
  }
}

function tulipFieldVerticalRight(color, max, [ax, ay], [bx, by]) {
  for (var i = 0; i < max; i = i + 8) {
    tulips(
      color,
      [ax + i, ay - i],
      [bx + i, by - i]
    );
  }
}

function tulipFieldVerticalLeft(color, max, [ax, ay], [bx, by]) {
  for (var i = 0; i < max; i = i + 8) {
    tulips(
      color,
      [ax - i, ay + i],
      [bx - i, by + i]
    );
  }
}

function draw() {
  water();

  field(
    [-5, -5],
    [0.2 * min + diff / 2, 0],
    [0, 0.2 * min + diff / 2],
    [-5, -5]
  );

  tulipFieldVerticalLeft(
    '#7a4b7d',
    0.2 * min + diff / 2,
    [0, 0],
    [0.1 * min + diff / 4 - 10, 0.1 * min + diff / 4 - 10]
  );

  tulipFieldVerticalRight(
    '#7a4b7d',
    0.1 * min + diff / 4,
    [10, -10],
    [0.1 * min + diff / 4, 0.1 * min + diff / 4 - 20]
  );

  field(
    [0.25 * min + diff / 2, 0],
    [1.2 * min + diff / 2, 0],
    [0, 1.2 * min + diff / 2],
    [0, 0.25 * min + diff / 2]
  );

  tulipFieldVerticalRight(
    '#6e669f',
    72,
    [0.125 * min + diff / 4 - 27, 0.125 * min + diff / 4 + 37],
    [0.6 * min + diff / 4 - 47, 0.6 * min + diff / 4 + 17]
  );

  tulipFieldVerticalRight(
    '#c1575e',
    24,
    [0.125 * min + diff / 4 + 45, 0.125 * min + diff / 4 - 35],
    [0.6 * min + diff / 4 + 25, 0.6 * min + diff / 4 - 55]
  );

  tulips(
    '#c1575e',
    [0.125 * min + diff / 4 + 71, 0.125 * min + diff / 4 - 61],
    [0.6 * min + diff / 4 + 51, 0.6 * min + diff / 4 - 81]
  );

  tulipFieldVerticalRight(
    '#d3a062',
    88,
    [0.125 * min + diff / 4 + 79, 0.125 * min + diff / 4 - 69],
    [0.6 * min + diff / 4 + 59, 0.6 * min + diff / 4 - 89]
  );

  tulipFieldVerticalRight(
    '#d3a062',
    56,
    [0.125 * min + diff / 4 + 169, 0.125 * min + diff / 4 - 159],
    [0.6 * min + diff / 4 + 149, 0.6 * min + diff / 4 - 179]
  );

  tulipFieldVerticalRight(
    '#952b37',
    16,
    [0.125 * min + diff / 4 + 225, 0.125 * min + diff / 4 - 215],
    [0.6 * min + diff / 4 + 205, 0.6 * min + diff / 4 - 235]
  );

  tulipFieldVerticalRight(
    '#f3f3e8',
    24,
    [0.125 * min + diff / 4 + 241, 0.125 * min + diff / 4 - 231],
    [0.6 * min + diff / 4 + 221, 0.6 * min + diff / 4 - 278]
  );

  tulipFieldVerticalRight(
    '#f3f3e8',
    40,
    [0.125 * min + diff / 4 + 267, 0.125 * min + diff / 4 - 257],
    [0.6 * min + diff / 4 + 247, 0.6 * min + diff / 4 - 304]
  );

  tulipFieldVerticalRight(
    '#686649',
    16,
    [0.125 * min + diff / 4 + 307, 0.125 * min + diff / 4 - 297],
    [0.6 * min + diff / 4 + 287, 0.6 * min + diff / 4 - 344]
  );

  tulips(
    '#1d1f44',
    [0.125 * min + diff / 4 + 323, 0.125 * min + diff / 4 - 313],
    [0.6 * min + diff / 4 + 303, 0.6 * min + diff / 4 - 360]
  );

  tulipFieldVerticalRight(
    '#e6cd6f',
    32,
    [0.125 * min + diff / 4 + 331, 0.125 * min + diff / 4 - 321],
    [0.6 * min + diff / 4 + 311, 0.6 * min + diff / 4 - 368]
  );

  dike(
    [width, 0.25 * min + (height - width) / 2],
    [width, 0.5 * min + (height - width) / 2],
    [0.5 * min - (height - width) / 2, height],
    [0.25 * min - (height - width) / 2, height]
  );

  grass(
    [width, height - 0.45 * min - diff / 2],
    [width, height],
    [width, height],
    [width - 0.45 * min - diff / 2, height]
  );
}

window.addEventListener('load', draw);
window.addEventListener('resize', draw);
