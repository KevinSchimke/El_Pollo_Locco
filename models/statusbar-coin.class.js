class StatusBarCoin extends StatusBar {
    IMAGES =[
        './img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png',
        './img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png',
        './img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png',
        './img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png',
        './img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png',
        './img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png'
    ];

    x = 255;
    coins = 0;
    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.setPercentage(0);
    }



    collectCoin() {
        this.coins += 20;
        if (this.coins > 100) {
            this.coins = 100;
        }
        this.setPercentage(this.coins);
    }

}