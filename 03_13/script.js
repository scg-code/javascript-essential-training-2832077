/**
 * Use the global Date() object to transform dates.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 */

import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

const content = ``;

console.log("The everydayPack object:", everydayPack); // Backpack {name: "Everyday Backpack", volume: 30, color: "grey", pocketNum: 15, strapLength: 26, …}
console.log("Date acquired:", everydayPack.dateAcquired);  // Date acquired: December 5, 2018 15:00:00 PST
console.log("Days since acquired:", everydayPack.backpackAge()); 



