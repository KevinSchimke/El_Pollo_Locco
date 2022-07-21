class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusbar_health = new StatusBarHealth();
    statusbar_coin = new StatusBarCoin();
    statusbar_bottle = new StatusBarBottle();
    throwable = [];


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectToMap(this.level.backgroundObjects);

        this.addToMap(this.character);
        this.addObjectToMap(this.level.enemies);
        this.addObjectToMap(this.level.clouds);
        this.addObjectToMap(this.throwable);

        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusbar_health);
        this.addToMap(this.statusbar_coin);
        this.addToMap(this.statusbar_bottle);
        this.ctx.translate(this.camera_x, 0);

        this.ctx.translate(-this.camera_x, 0);

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.reflectImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        if (mo.otherDirection) {
            this.reflectImageBack(mo);
        }
    }

    reflectImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    reflectImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

    run() {
        setInterval(() => {
            this.checkCollision();
            this.checkThrowableObject();
        }, 200);
    }

    checkCollision() {
        this.level.enemies.forEach((enemy) => {
            
            if (this.character.isColliding(enemy)) {
                console.log('treffer')
                this.character.hit();
                this.statusbar_health.setPercentage(this.character.energy)
            }
        });
    }

    checkThrowableObject() {
        if (this.keyboard.D){
            console.log("Checking throwable object...");
            let bottle = new ThrowableObject(this.character.x + 95, this.character.y + 40)
            this.throwable.push(bottle);
        }
    }
}