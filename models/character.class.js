class Character extends MovableObject {

    IMAGES_WALKING = [
        './img/2_character_pepe/2_walk//W-21.png',
        './img/2_character_pepe/2_walk//W-22.png',
        './img/2_character_pepe/2_walk//W-23.png',
        './img/2_character_pepe/2_walk//W-24.png',
        './img/2_character_pepe/2_walk//W-25.png',
        './img/2_character_pepe/2_walk//W-26.png'
    ];
    IMAGES_JUMPING = [
        './img/2_character_pepe/3_jump//J-31.png',
        './img/2_character_pepe/3_jump//J-32.png',
        './img/2_character_pepe/3_jump//J-33.png',
        './img/2_character_pepe/3_jump//J-34.png',
        './img/2_character_pepe/3_jump//J-35.png',
        './img/2_character_pepe/3_jump//J-36.png',
        './img/2_character_pepe/3_jump//J-37.png',
        './img/2_character_pepe/3_jump//J-38.png',
        './img/2_character_pepe/3_jump//J-39.png'
    ];
    IMAGES_DEAD = [
        './img/2_character_pepe/5_dead//D-51.png',
        './img/2_character_pepe/5_dead//D-52.png',
        './img/2_character_pepe/5_dead//D-53.png',
        './img/2_character_pepe/5_dead//D-54.png',
        './img/2_character_pepe/5_dead//D-55.png',
        './img/2_character_pepe/5_dead//D-56.png',
        './img/2_character_pepe/5_dead//D-57.png'
    ];
    IMAGES_HURT = [
        './img/2_character_pepe/4_hurt/H-41.png',
        './img/2_character_pepe/4_hurt/H-42.png',
        './img/2_character_pepe/4_hurt/H-43.png'
    ];

    energy = 100;
    y = 50;
    speed = 10;

    walking_sound = new Audio('./audio/running.mp3');
    jumping_sound = new Audio('./audio/jump.mp3');
    // hurt_sound = new Audio('./audio/hurt.mp3'); // Kevin ersetzen
    // dead_sound = new Audio('./audio/dead.mp3'); // Kevin ersetzen

    constructor() {
        super().loadImage('./img/2_character_pepe/1_idle/idle/I-1.png')
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.applyGravity();
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.characterMoves();
        }, 1000 / 60);

        setInterval(() => {
            this.characterImageStateDead();
            this.characterImageStateHurt();
            this.characterImageStateJumping();
            this.characterImageStateWalking();
        }, 150);
    }

    characterMoves() {
        this.walking_sound.pause();
        this.characterMovesRight();
        this.characterMovesLeft();
        this.characterJumping();
        this.characterCamera();
    }

    characterMovesRight() {
        if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
            this.moveRight();
            this.otherDirection = false;
            this.walking_sound.play();
        }
    }

    characterMovesLeft() {
        if (this.world.keyboard.LEFT && this.x > 0) {
            this.moveLeft();
            this.otherDirection = true;
            this.walking_sound.play();
        }
    }

    characterJumping() {
        if ((this.world.keyboard.UP || this.world.keyboard.SPACE) && !this.isAboveGround()) {
            this.jump();
            this.jumping_sound.play();
        }
    }

    characterCamera() {
        if (this.x > 2157) {
            this.world.camera_x = - 2157;
        } else {
            this.world.camera_x = - this.x + 50;
        }
    }

    characterImageStateDead() {
        if (this.isDead()) {
            this.playAnimation(this.IMAGES_DEAD);
            document.getElementById('end_Screen_Image').classList.remove('hide')
            setTimeout(() => {
                window.location.reload();
               }, 3000); 
            // this.dead_sound.play(); // Kevin ersetzen
        }
    }

    characterImageStateHurt() {
        if (this.isHurt()) {
            this.playAnimation(this.IMAGES_HURT);
            // this.hurt_sound.play(); // Kevin ersetzen
        }
    }

    characterImageStateJumping() {
        if (this.isAboveGround()) {
            this.playAnimation(this.IMAGES_JUMPING);
        }
    }

    characterImageStateWalking() {
        if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
            this.playAnimation(this.IMAGES_WALKING);
        }
    }

}
