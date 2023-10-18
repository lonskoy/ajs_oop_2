import Character from "./Character";

export default class Zomby extends Character {
    constructor(name, type = 'Zomby') {
        super(name, type);
        this.attack = 40;
        this.defence = 10;
    }
}