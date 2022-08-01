class Endboss extends MovableObject{

    height = 200;
    width = 200;
    y = 240;
    energy = 15;


    IMAGES_WALKING =[
        './img/4_enemie_boss_chicken/1_walk/G1.png',
        './img/4_enemie_boss_chicken/1_walk/G2.png',
        './img/4_enemie_boss_chicken/1_walk/G3.png',
        './img/4_enemie_boss_chicken/1_walk/G4.png'
    ];

    IMAGES_DEAD =[
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png',
    ];

    constructor(){
        super().loadImage('./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png')
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 2550;
        this.animate();
    }

    animate(){
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        },250);
        setInterval(() => {
            this.endbossImageStateDead();
        }, 150);
    }

    endbossImageStateDead() {
        if (this.energy == 0) {
            this.playAnimation(this.IMAGES_DEAD);
            document.getElementById('end_Screen_Image').classList.remove('hide')
            setTimeout(() => {
                window.location.reload();
               }, 3000); 
        }
    }

}