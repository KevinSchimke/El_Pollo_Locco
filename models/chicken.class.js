class Chicken extends MovableObject{
    y = 355;
    height = 80;
    width = 80;
    chickenAnimate;
    chickenAnimateImage;
    chickenAnimateSound;
    chicken_souund_interval = 3000;

    IMAGES_CHICKEN_WALKING =[
        './img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        './img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        './img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    IMAGES_CHICKEN_DEAD =[
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ]

    chicken_sound = new Audio('./audio/chicken.mp3');


    constructor(x){
        super().loadImage('./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png')
        this.loadImages(this.IMAGES_CHICKEN_WALKING);
        this.loadImages(this.IMAGES_CHICKEN_DEAD);
        this.x = x;
        this.speed = 0.15 + Math.random()*0.4;
        this.animate();
    }

    animate() {
        this.chickenAnimateMove = setInterval(() => {
            this.moveLeft();
        }, 1000/60);

        this.chickenAnimateImage = setInterval(() => {
            this.playAnimation(this.IMAGES_CHICKEN_WALKING);
        },250);
        this.chickenAnimateSound = setInterval(() => {
            // this.chicken_sound.play();
        },this.chicken_souund_interval);
    }

    animateDeadChicken() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_CHICKEN_DEAD);
            this.y += 50;
        }, 50);
        clearInterval(this.chickenAnimateMove);
        clearInterval(this.chickenAnimateImage);
        clearInterval(this.chickenAnimateSound);
    }
}