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


    constructor(canvas, keyboard, gameEnd) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.gameEnd = gameEnd;
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
        this.addObjectToMap(this.level.endboss);
        this.addObjectToMap(this.level.coins);
        this.addObjectToMap(this.level.bottles);
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
        // mo.drawFrame(this.ctx);
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
        this.checkCollisionWithEnemies();
        this.checkCollisionWithCoins();
        this.checkCollisionWithBottle();
        this.checkCollisionBottleWithEnemies();
        this.checkCollisionWithEndboss();
    }

    checkCollisionWithEnemies() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                if (this.character.y > 235) {
                    this.character.hit();
                    this.statusbar_health.setPercentage(this.character.energy)
                } else {
                    let i = this.level.enemies.indexOf(enemy);
                    this.level.enemies[i].animateDeadChicken();
                }
            }
        });
    }

    checkCollisionWithCoins() {
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.statusbar_coin.collectCoin();
                let i = this.level.coins.indexOf(coin);
                this.level.coins.splice(i, 1);
            }
        });
    }

    checkCollisionWithBottle() {
        this.level.bottles.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
                this.statusbar_bottle.collectBottle();
                let i = this.level.bottles.indexOf(bottle);
                this.level.bottles.splice(i, 1);
            }
        });
    }

    checkCollisionBottleWithEnemies() {
        this.level.enemies.forEach((enemy) => {
            this.throwable.forEach((object) => {
                if (object.isColliding(enemy)) {
                    let i = this.level.enemies.indexOf(enemy);
                    this.level.enemies[i].animateDeadChicken();
                }
            });
        });
    }

    checkCollisionWithEndboss() {
        this.level.endboss.forEach((endboss) => {
            this.throwable.forEach((object) => {
                if (object.isColliding(endboss)) {
                    let i = this.level.endboss.indexOf(endboss);
                    this.level.endboss[i].hit();
                }
            });
        });
    }

    checkThrowableObject() {
        if (this.statusbar_bottle.bottles > 0 && this.keyboard.D) {
            let bottle = new ThrowableObject(this.character.x + 95, this.character.y + 40)
            this.throwable.push(bottle);
            this.statusbar_bottle.reduceBottle();
        }
    }

}