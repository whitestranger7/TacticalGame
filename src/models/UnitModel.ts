export default class Unit {
    constructor(
        protected name: string,
        protected health: number,
        protected readonly initiative: number,
        protected readonly damage: number,
        protected readonly image: string,
    ) {
        this.name = name;
        this.health = health;
        this.initiative = initiative;
        this.damage = damage;
        this.image = image;
    };

    getInfo() {
        console.log(
            `${this.name}. Now it's have parameters: ${this.health}, ${this.initiative}, ${this.damage}`
        );
    };

    takeDamage(damage: number) {
        this.health -= damage;
    };

    
}
