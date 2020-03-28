export default class UnitModel {
    constructor(
        protected readonly id: number,
        protected readonly name: string,
        protected hp: number,
        protected readonly initiative: number,
        protected readonly image: string
    ) {
        this.id = id;
        this.name = name;
        this.hp = hp;
        this.initiative = initiative;
        this.image = image;
    }

    get getName() {
        return this.name;
    };

    get getId() {
        return this.id;
    };

    get initiativeGetter() {
        return this.initiative;
    };

    get getHp() {
        return this.hp;
    }

    takeDamage(damage: number) {
        return this.hp -= damage;
    }
};