function Character(name, profession, age, strength, hitPoints) {
  this.name = name;
  this.profession = profession;
  this.age = age;
  this.strength = strength;
  this.hitPoints = hitPoints;
  this.printStats = function () {
    console.log(`Name:       ${this.name} 
Profession: ${this.profession}
Age:        ${this.age}
Strength:   ${this.strength}
HitPoints:  ${this.hitPoints}`);
  };
}

Character.prototype.isAlive = function () {
  if (this.hitPoints > 0) return true;

  return false;
};

Character.prototype.attack = function (opponent) {
  opponent.hitPoints -= this.strength;
};

Character.prototype.levelUp = function () {
  this.age += 1;
  this.strength += 5;
  this.hitPoints += 25;
};

module.exports = Character;
