class World{
    character = new Character();
    enemies =[
        new Chicken(),
        new Chicken(),
        new Chicken()
    ];

    constructor(canvas){
        this.ctx = canvas.getContext("2d");
        this.draw();
    }

    draw(){
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.height,this.character.width);

        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }
}