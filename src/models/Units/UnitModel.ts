export default class UnitModel {

    private hp: number;
    private alive: boolean;
    private isDefending: boolean;
    private isParalyzed: boolean;

    constructor(
        protected readonly id: number,
        protected readonly name: string,
        protected maxHp: number,
        protected readonly initiative: number,
        protected readonly image: string
    ) {
        this.id = id;
        this.name = name;
        this.maxHp = maxHp;
        this.hp = maxHp;
        this.initiative = initiative;
        this.image = image;
        this.alive = true;
        this.isDefending = false;
        this.isParalyzed = false;
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

    get getMaxHp() {
        return this.maxHp
    }

    get getDefend() {
        return this.defend;
    }

    get getAliveStatus() {
        return this.alive;
    }

    get getParalyzedStatus() {
        return this.isParalyzed;
    }

    private checkIsAlive() {
        if(this.hp <= 0){
            this.alive = false;
        }else {
            this.alive = true;
        }
    }

    paralyze(){
        this.isParalyzed = true;
    }

    undoParalyze() {
        this.isParalyzed = false;
    }

    defend(){
        this.isDefending = true;
    }

    undoDefend() {
        this.isDefending = false;
    }

    healHp(heal: number){
        this.hp += heal;
        if(this.hp > this.maxHp) {
            this.hp = this.maxHp;
        }
        this.checkIsAlive();
    }

    takeDamage(damage: number) {
        if(this.isDefending){
            this.hp -= damage / 2;
        }else {
            this.hp -= damage;
        }
        this.checkIsAlive();
    }
};