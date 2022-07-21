class Endboss extends MovableObject{

    height = 200;
    width = 200;
    y = 240;


    IMAGES_WALKING =[
        './img/4_enemie_boss_chicken/1_walk/G1.png',
        './img/4_enemie_boss_chicken/1_walk/G2.png',
        './img/4_enemie_boss_chicken/1_walk/G3.png',
        './img/4_enemie_boss_chicken/1_walk/G4.png'
    ];

    constructor(){
        super().loadImage('./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png')
        this.loadImages(this.IMAGES_WALKING);
        this.x = 2550;
        this.animate();
    }

    animate(){
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        },250);
    }
}