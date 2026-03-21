// @ts-nocheck
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let minutes = 0;
  switch(name) {
    case 'Tropical Island':
      minutes = 3;
      break;
    case 'Pure Strawberry Joy':
      minutes = 0.5;
      break;
    case 'Energizer':
    case 'Green Garden':
      minutes = 1.5;
      break;
    case 'All or Nothing':
      minutes = 5;
      break;
    default:
      minutes = 2.5;
      break;
  }
  return minutes;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let wedgesCut = 0;
  let limesCut = 0;

  
  while(wedgesCut < wedgesNeeded && limes.length > 0) {
  const lime = limes.shift();

    switch(lime) {
      case 'small':
        wedgesCut += 6;
        break;
      case 'medium':
        wedgesCut += 8
        break;
      case 'large':
        wedgesCut += 10;
        break;
    }
  limesCut++;
  }
  return limesCut;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  const queue = [...orders];

  // while(timeLeft > 0 && queue.length > 0) {
    
  //   const order = queue.shift();
  //   const prepTime = timeToMixJuice(order)
  //   timeLeft -= prepTime;
  // }
  // return queue;

  do {
    const order = queue.shift();
    const prepTime = timeToMixJuice(order);
    timeLeft = timeLeft - prepTime;
  } while(timeLeft > 0 && queue.length > 0);

  return queue;
}

