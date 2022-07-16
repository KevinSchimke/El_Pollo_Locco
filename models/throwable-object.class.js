class ThrowableObject extends MovableObject {

    // IMAGES = [
    //     './img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
    //     './img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    // ];

    constructor(x,y) {
        super().loadImage('./img/6_salsa_bottle/1_salsa_bottle_on_ground.png');
        this.x = x;
        this.y = y;
        this.height = 90;
        this.width = 80;
        this.trow();
    }

    trow() {
        this.speedY = 15;
        this.applyGravity();
        setInterval(() => {
            this.x += 7;
        }, 25);
    }
}