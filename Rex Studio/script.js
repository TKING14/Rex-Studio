const d = document;
const game_out = d.getElementById("game");
const size = 3;

function create_row(size) {
  var i;
  i = 0;

  //create a button-row of size.
  while (i < size) {
    var btn = d.createElemnt("button");
    btn.id = i + + height;
    i++;
  }
}

function init_game(size) {
  var height;
  height = 0;

  //create a field of 3x3 buttons.
  while (height < size) {
    create_row(size);
    height++;
  }
}
