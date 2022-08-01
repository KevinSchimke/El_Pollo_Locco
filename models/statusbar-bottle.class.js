class StatusBarBottle extends StatusBar {
    IMAGES = [
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/green/20.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/green/40.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png',
        './img/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png'
    ];

    x = 495;
    bottles = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.setPercentage(0);
    }

    collectBottle() {
        this.bottles += 20;
        if (this.bottles > 100) {
            this.bottles = 100;
        }
        this.setPercentage(this.bottles);
    }

    reduceBottle() {
        this.bottles -= 20;
        if (this.bottles <= 0) {
            this.bottles = 0;
        }
        this.setPercentage(this.bottles);
    }

}