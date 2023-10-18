import Bowman from "../class/Bowman";


const testDamage = 
  {
    damage: 8,
    result: 19,
  };

const testLevel = 
  {
    type: "Bowman",
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };

const charBowman = new Bowman('Eric', 'Bowman');


test('Level Up test Bowman', () => {
  charBowman.levelUp();
  expect(charBowman).toEqual(testLevel);
});

test('Damage test Bowman', () => {
  charBowman.damage(testDamage);
  expect(charBowman.health).toEqual(testDamage.result);
});