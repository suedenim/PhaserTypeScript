/// <reference path="phaser.d.ts"/>
// Demonstrate keyboard input handling via callback
var SimpleKeyCapture = (function () {
    function SimpleKeyCapture() {
        this.game = new Phaser.Game(640, 480, Phaser.AUTO, 'content', {
            create: this.create,
            preload: this.preload
        });
    }
    SimpleKeyCapture.prototype.preload = function () {
        var loader = this.game.load.image("jet", "Images/jet.png");
    };
    SimpleKeyCapture.prototype.moveLeft = function () {
        this.jetSprite.position.add(-1, 0);
    };
    SimpleKeyCapture.prototype.moveRight = function () {
        this.jetSprite.position.add(1, 0);
    };
    SimpleKeyCapture.prototype.moveUp = function (e) {
        // As you can see the event handler is passed an optional event KeyboardEvent
        // This contains additional information about the key, including the Control
        // key status.
        // Basically if the control key is held, we move up or down by 5 instead of 1
        if (e.ctrlKey)
            this.jetSprite.position.add(0, -5);
        else
            this.jetSprite.position.add(0, -1);
    };
    SimpleKeyCapture.prototype.moveDown = function (e) {
        if (e.ctrlKey)
            this.jetSprite.position.add(0, 1);
        else
            this.jetSprite.position.add(0, 1);
    };
    SimpleKeyCapture.prototype.create = function () {
        var image = this.game.cache.getImage("jet");
        this.jetSprite = this.game.add.sprite(this.game.width / 2 - image.width / 2, this.game.height / 2 - image.height / 2, "jet");
        // Create a key for each WASD key
        this.W = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
        this.A = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
        this.S = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
        this.D = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
        // Since we are allowing the combination of CTRL+W, which is a shortcut for close window
        // we need to trap all handling of the W key and make sure it doesnt get handled by 
        // the browser.  
        // Unfortunately you can no longer capture the CTRL+W key combination in Google Chrome
        // except in "Application Mode" because apparently Google thought an unstoppable un prompted
        // key combo of death was a good idea...
        this.game.input.keyboard.addKeyCapture(Phaser.Keyboard.W);
        // Wire up an event handler for each K.  The handler is a Phaser.Signal attached to the Key Object
        this.W.onDown.add(SimpleKeyCapture.prototype.moveUp, this);
        this.A.onDown.add(SimpleKeyCapture.prototype.moveLeft, this);
        this.S.onDown.add(SimpleKeyCapture.prototype.moveDown, this);
        this.D.onDown.add(SimpleKeyCapture.prototype.moveRight, this);
    };
    return SimpleKeyCapture;
})();
window.onload = function () {
    var game = new SimpleKeyCapture();
};
//# sourceMappingURL=simpleKeyCapture.js.map