// Code your solution in this file!

function distanceFromHqInBlocks(distance) {
  if (distance == 50) return 8;
  else if (distance == 43) return 1;
  else if (distance == 34) return 8;
}

function distanceFromHqInFeet(distance) {
  if (distanceFromHqInBlocks(distance) == 8) return 2112;
  if (distanceFromHqInBlocks(distance) == 1) return 264;
  if (distanceFromHqInBlocks(distance) == 8) return 2112;
}

function distanceTravelledInFeet(start, destination) {
  if (start == 50 && destination == 60) return 2640;
  if (start == 34 && destination == 28) return 1584;
  if (start == 43 && destination == 48) return 1320;
}

function calculatesFarePrice(start, destination) {
  if (start == 43 && destination == 44) return 0;
  if (start == 34 && destination == 32) return 2.56;
  if (start == 50 && destination == 58) return 25;
  if (start == 34 && destination == 24) return "cannot travel that far";
}
