var SimpleSprite = (function () {
    function SimpleSprite() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { create: this.create, preload: this.preload });
    }
    SimpleSprite.prototype.preload = function () {
        var loader = this.game.load.image("jet", "Images/jet.png");
    };
    SimpleSprite.prototype.create = function () {
        var image = this.game.cache.getImage("jet");
        this.jetSprite = this.game.add.sprite(this.game.width / 2 - image.width / 2, this.game.height / 2 - image.height / 2, "jet");
        this.jetSprite.anchor.set(0.5, 0.5);
        this.jetSprite.position.x = this.jetSprite.position.y = 0.0;
    };
    return SimpleSprite;
})();
window.onload = function () {
    var game = new SimpleSprite();
};
//# sourceMappingURL=simpleSprite.js.map