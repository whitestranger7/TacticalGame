export default class Unit {
    constructor(
        private readonly type: string,
        private name: string,
        private health: number,
        private readonly initiative: number,
        private readonly damage: number,
        private readonly image: string,
        private actionStrategy: any,
    ) {
        this.type = type;
        this.name = name;
        this.health = health;
        this.initiative = initiative;
        this.damage = damage;
        this.image = image;
        this.actionStrategy = actionStrategy;
    };

    getInfo() {
        console.log(
            `${this.name} with ${this.type} type. Now it's have parameters: ${this.health}, ${this.initiative}, ${this.damage}`
        );
    };

    action() {
        return this.actionStrategy.action();
    };
}
