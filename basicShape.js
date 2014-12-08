/// <reference path="phaser.d.ts"/>
var basicShape = (function () {
    function basicShape() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { create: this.create, preload: this.preload });
    }
    basicShape.prototype.preload = function () {
        var loader = this.game.load.image("jet", "jet.png");
    };
    basicShape.prototype.create = function () {
        // Add a graphics object to our game
        var graphics = this.game.add.graphics(0, 0);
        // Create an array to hold the points that make up our triangle
        var points = [];
        // Add 4 Point objects to it
        points.push(new Phaser.Point());
        points.push(new Phaser.Point());
        points.push(new Phaser.Point());
        // Position one top left, top right and botto mmiddle
        points[0].x = 1;
        points[0].y = 1;
        points[1].x = this.game.width - 1;
        points[1].y = 1;
        points[2].x = (this.game.width / 2) - 1;
        points[2].y = this.game.height - 1;
        // set fill color to red in HEX form.  The following is equal to 256 red, 0 green and 0 blue.  
        // Do at 50 % alpha, meaning half transparent
        graphics.beginFill(0xff0000, 0.5);
        // Finally draw the triangle, false indicates not to cull ( remove unseen values )
        graphics.drawTriangle(points, true);
        graphics.drawRect(10, 100, 100, 200);
        // Now change colour to green and 100% opacity/alpha
        graphics.beginFill(0x00ff00, 1.0);
        // Draw circle about screen's center, with 200 pixels radius
        graphics.drawCircle(this.game.width / 2, this.game.height / 2, 200);
    };
    return basicShape;
})();
window.onload = function () {
    var game = new basicShape();
};
//# sourceMappingURL=basicShape.js.map