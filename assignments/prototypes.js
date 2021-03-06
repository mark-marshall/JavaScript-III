/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

/*
  === CharacterStats ===
  * healthPoints
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Game Object Constructor ============

function GameObject(gameObjectArgs) {
  this.createdAt = gameObjectArgs.createdAt;
  this.dimensions = gameObjectArgs.dimensions;
}

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
};

// Character Stats Constructor ============

function CharacterStats(characterStatsArgs) {
  GameObject.call(this, characterStatsArgs);
  this.healthPoints = characterStatsArgs.healthPoints;
  this.name = characterStatsArgs.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
};

// Humanoid Constructor ============

function Humanoid(humanoidArgs) {
  CharacterStats.call(this, humanoidArgs);
  this.team = humanoidArgs.team;
  this.weapons = humanoidArgs.weapons;
  this.language = humanoidArgs.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`;
};

// Villain Constructor ============

function Villain(villainArgs) {
  Humanoid.call(this, villainArgs);
  this.side = villainArgs.side;
  this.alive = true;
}

Villain.prototype = Object.create(Humanoid.prototype);

Villain.prototype.attack = function(object, multiplier = 0) {
  object.healthPoints -= 10 * multiplier;
  console.log(`Your victim has ${object.healthPoints} left`);
  if (object.healthPoints < 0) {
    console.log("Your victim is dead!!");
    object.alive = false;
  }
};

Villain.prototype.lightSaber = function(object, multiplier = 0) {
  object.healthPoints -= 30 * multiplier;
  console.log(`Your victim has ${object.healthPoints} left`);
  if (object.healthPoints < 0) {
    console.log("Your victim is dead!!");
    object.alive = false;
  }
};

Villain.prototype.deathStar = function(object, multiplier = 0) {
  object.healthPoints -= 100 * multiplier;
  console.log(`Your victim has ${object.healthPoints} left`);
  if (object.healthPoints < 0) {
    console.log("Your victim is dead!!");
    object.alive = false;
  }
};

Villain.prototype.revive = function() {
  this.healthPoints += 200;
  console.log(`You now have ${this.healthPoints}❤️`);
};

// Hero Constructor ============

function Hero(heroArgs) {
  Humanoid.call(this, heroArgs);
  this.side = heroArgs.side;
  this.alive = true;
}

Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.attack = function(object, multiplier = 0) {
  object.healthPoints -= 25 * multiplier;
  console.log(`Your victim has ${object.healthPoints} left`);
  if (object.healthPoints < 0) {
    console.log("Your victim is dead!!");
    object.alive = false;
  }
};

Hero.prototype.mindControl = function(object, multiplier = 0) {
  object.healthPoints -= 50 * multiplier;
  console.log(`Your victim has ${object.healthPoints} left`);
  if (object.healthPoints < 0) {
    console.log("Your victim is dead!!");
    object.alive = false;
  }
};

Hero.prototype.revive = function() {
  this.healthPoints += 200;
  console.log(`You now have ${this.healthPoints}❤️`);
};

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

const darth = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 1,
    height: 10
  },
  healthPoints: 200,
  name: "Darth",
  team: "None",
  weapons: ["Lightsaber", "Stormtroopers"],
  language: "English",
  side: "Dark"
});

const yoda = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 1,
    height: -2
  },
  healthPoints: 1000,
  name: "Yoda",
  team: "Jedi",
  weapons: ["Wisdom"],
  language: "Yodish",
  side: "Not Dark"
});

// Testing MVP constructor functions ============
console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Testing Hero and Villain constructor functions ============
console.log(darth.greet());
console.log(darth.takeDamage());
console.log(yoda.greet());

// Testing Hero and Villain attack methods ============
yoda.attack(darth);
yoda.attack(darth);
console.log(darth);

// Testing Hero and Villain expanded methods ============
yoda.mindControl(darth);
console.log(darth);
yoda.revive();
console.log(yoda);
darth.revive();
console.log(darth);
darth.deathStar(yoda);
console.log(yoda);

// Testing Hero and Villain expanded methods with multipliers ============
yoda.mindControl(darth, 100);
console.log(darth);

// Testing mesages on Hero and Villain expanded methods ============

yoda.attack(darth);
yoda.revive();

// Testing character death status ☠️ ============

yoda.mindControl(darth, 10000);
console.log(darth);

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!
