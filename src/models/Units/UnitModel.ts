export default class UnitModel {
    constructor(
        protected readonly id: number,
        protected readonly name: string,
        public hp: number,
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
};