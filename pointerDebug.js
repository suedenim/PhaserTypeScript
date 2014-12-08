/// <reference path="phaser.d.ts"/>
// This code demonstrates polling for touch or mouse clicks
var SimplePointerCallback = (function () {
    function SimplePointerCallback() {
        this.game = new Phaser.Game(640, 480, Phaser.AUTO, 'content', {
            create: this.create,
            preload: this.preload,
            render: this.render
        });
    }
    SimplePointerCallback.prototype.preload = function () {
        var loader = this.game.load.image("jet", "Images/jet.png");
    };
    SimplePointerCallback.prototype.create = function () {
        var image = this.game.cache.getImage("jet");
        this.jetSprite = this.game.add.sprite(this.game.width / 2 - image.width / 2, this.game.height / 2 - image.height / 2, "jet");
        this.jetSprite.pivot.x = this.jetSprite.width / 2;
        this.jetSprite.pivot.y = this.jetSprite.height / 2;
        // You can handle mouse input by registering a callback as well
        // The following registers a callback that will be called each time the mouse is moved
        this.game.input.addMoveCallback(this.mouseCallBack, this);
        // This one registers a mouse click handler that will be called
        this.game.input.onDown.add(SimplePointerCallback.prototype.mouseDown);
    };
    SimplePointerCallback.prototype.mouseCallBack = function (pointer, x, y) {
        this.jetSprite.position.set(x, y);
        alert('X: ' + x);
    };
    SimplePointerCallback.prototype.mouseDown = function (event) {
        alert("Mouse is down " + event.button);
    };
    SimplePointerCallback.prototype.render = function () {
        //  Just renders out the pointer data when you touch the canvas
        this.game.debug.pointer(this.game.input.mousePointer);
    };
    return SimplePointerCallback;
})();
window.onload = function () {
    var game = new SimplePointerCallback();
};
//# sourceMappingURL=pointerDebug.js.map