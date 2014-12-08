/// <reference path="phaser.d.ts"/>
var SimpleScaling = (function () {
    function SimpleScaling() {
        this.game = new Phaser.Game(640, 480, Phaser.AUTO, 'content', { create: this.create, preload: this.preload });
    }
    SimpleScaling.prototype.preload = function () {
        var loader = this.game.load.image("jet", "Images/jet.png");
    };
    // This function is called when a full screen request comes in
    SimpleScaling.prototype.onGoFullScreen = function () {
        // tell Phaser how you want it to handle scaling when you go full screen
        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.NO_SCALE;
        // and this causes it to actually do it
        this.game.scale.refresh();
    };
    SimpleScaling.prototype.goFullScreen = function () {
    };
    SimpleScaling.prototype.create = function () {
        var _this = this;
        var image = this.game.cache.getImage("jet");
        // Draw the jet image centered to the screen
        this.jetSprite = this.game.add.sprite(this.game.width / 2 - image.width / 2, this.game.height / 2 - image.height / 2, "jet");
        // Set background to white to make effect clearer
        this.game.stage.backgroundColor = 0xffffff;
        // Add a function that will get called when the game goes fullscreen
        this.game.scale.enterFullScreen.add(SimpleScaling.prototype.onGoFullScreen, this);
        // Now add a function that will get called when user taps screen.
        // Function declared inline using arrow (=>) function expression
        // Simply calls startFullScreen().  True specifies you want anti aliasing.
        // Unfortunately you can only make full screen requests in desktop browsers in event handlers
        this.game.input.onTap.add(function () {
            _this.game.scale.startFullScreen(true);
        }, this);
    };
    return SimpleScaling;
})();
window.onload = function () {
    var game = new SimpleScaling();
};
//# sourceMappingURL=simpleScaling.js.map