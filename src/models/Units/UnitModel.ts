export default class UnitModel {

    private isDefending: boolean;

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
        this.isDefending = false;
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

    get getDefend() {
        return this.defend;
    }

    defend(){
        this.isDefending = true;
    }

    undoDefend() {
        this.isDefending = false;
    }

    healHp(heal: number){
        return this.hp += heal;
    }

    takeDamage(damage: number) {
        return this.hp -= damage;
    }
};