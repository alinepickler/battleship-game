function checkForShip (player, coordinates) {
  for (var i = 0; i < player.ships.length; i++) {
    var ship = player.ships[i];

    var hitLocation = ship.locations.filter(function (shipLocation) {
      return (shipLocation[0] === coordinates[0]) && (shipLocation[1] === coordinates[1]);
    }) [0];

    if (hitLocation) {
      return true;
    }
  }
  return false;
}

function damageShip (ship, coordinates) {
  ship.damage.push(coordinates);
}

module.exports.checkForShip = checkForShip;
module.exports.damageShip = damageShip;
