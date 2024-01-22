/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const car = {
    name: "Tesla",
    model: "Model 3",
    color: "black",
    year: 2021,
    doors: 4,
    trunk: {
        front: "frunk",
        back: "trunk",
    },
    lidOpen: false,
    toggleLid: function (lidStatus) {
        this.lidOpen = lidStatus;
    },
    newDoors: function (doors) {
        this.doors = doors;
    },
    };
    
    console.log("The car object:", car);