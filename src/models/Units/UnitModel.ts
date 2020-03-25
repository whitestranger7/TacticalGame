export default class UnitModel {
    constructor(
        protected readonly name: string,
        protected readonly hp: number,
        protected readonly initiative: number,
        protected readonly image: string
    ) {
        this.name = name;
        this.hp = hp;
        this.initiative = initiative;
        this.image = image;
    }

    get initiativeGetter() {
        return this.initiative
    }
};