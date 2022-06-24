class MovableObject {
    x = 0;
    y = 230;
    width = 180;
    height = 200;
    img;
    imageCache = [];
    speed = 0.15;
    currentImage = 0;
    otherDirection = false;

    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr){
        arr.forEach((path)=>{
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveRight() {
        console.log('Moving-right');
    }

    moveLeft(){
        setInterval(() => {
            this.x -= this.speed ;
        }, 1000/60);
    }

    playAnimation(images){
        let i =  this.currentImage % this.IMAGES_WALKING.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;  
    }
}