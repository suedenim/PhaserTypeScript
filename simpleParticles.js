/// <reference path="phaser.d.ts"/>
var SimpleParticle = (function () {
    function SimpleParticle() {
        this.game = new Phaser.Game(640, 480, Phaser.AUTO, 'content', { create: this.create, preload: this.preload });
    }
    SimpleParticle.prototype.preload = function () {
        // Load the image we are going to use for our particle
        this.game.load.image("particle", "Images/particle.png");
    };
    SimpleParticle.prototype.create = function () {
        // Now we are creating the particle emitter, centered to the world
        this.emitter = this.game.add.emitter(this.game.world.centerX, this.game.world.centerY);
        // Make the particles for the emitter to emmit.  We use the key for the particle graphic we loaded earlier
        // We want 500 particles total
        this.emitter.makeParticles('particle', 1, 500, false, false);
        // And BOOM, emit all 500 particles at once with a life span of 10  seconds.
        this.emitter.explode(10000, 500);
    };
    return SimpleParticle;
})();
var SimpleParticle2 = (function () {
    function SimpleParticle2() {
        this.game = new Phaser.Game(640, 480, Phaser.AUTO, 'content', {
            create: this.create,
            preload: this.preload,
            update: this.update
        });
    }
    SimpleParticle2.prototype.preload = function () {
        // This time we have 3 different particle graphics to use
        this.game.load.image("particle1", "Images/particle1.png");
        this.game.load.image("particle2", "Images/particle2.png");
        this.game.load.image("particle3", "Images/particle3.png");
        this.game.load.image("logo", "Images/phaser2.png");
    };
    SimpleParticle2.prototype.update = function () {
        // This checks for and handles collisions between our sprite and particles from the emitter
        this.game.physics.arcade.collide(this.sprite, this.emitter);
    };
    SimpleParticle2.prototype.create = function () {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > 10000) {
                break;
            }
        }
        this.emitter = this.game.add.emitter(0, 0);
        // As you can see, you can pass in an array of keys to particle graphics
        this.emitter.makeParticles(['particle1', 'particle2', 'particle3'], 1, 500, false, false);
        // Instead of exploding, you can also release particles as a stream
        // This one lasts 10 seconds, releases 20 particles of a total of 500
        // Which of the 3 graphics will be randomly chosen by the emitter
        this.emitter.start(false, 10000, 20, 500, true);
        // This line of code illustrates that you can move a particle emitter.  In this case, left to right across
        // The top of the screen.  Ignore details tweening for now if it's new, we will discuss later
        this.game.add.tween(this.emitter).to({ x: this.game.width }, 10000, null, true, 0, 1, true).start();
        // Let's create a sprite in the center of the screen
        this.sprite = this.game.add.sprite((this.game.width / 2) - 100, (this.game.height / 2) - 100, "logo");
        this.sprite.scale.setTo(0.5, 0.5);
        // We want it to be part of the physics of the world to give something for particles to respond to
        // Note, we will cover physics in more detail later ( after tweening perhaps... ;) )
        this.game.physics.enable(this.sprite);
        this.sprite.body.immovable = true;
    };
    return SimpleParticle2;
})();
window.onload = function () {
    var game = new SimpleParticle2();
};
//# sourceMappingURL=simpleParticles.js.map