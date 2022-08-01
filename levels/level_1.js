const level1 = new Level(
    [
        new Chicken(200 + Math.random() * 1500),
        new Chicken(400 + Math.random() * 1500),
        new Chicken(600 + Math.random() * 1500)
    ],
    [
        new Endboss()
    ],
    [
        new Cloud()
    ],
    [
        new BackgroundObject('./img/5_background/layers/air.png', -719, 0),
        new BackgroundObject('./img/5_background/layers/3_third_layer/2.png', -719, 0),
        new BackgroundObject('./img/5_background/layers/2_second_layer/2.png', -719, 0),
        new BackgroundObject('./img/5_background/layers/1_first_layer/2.png', -719, 0),

        new BackgroundObject('./img/5_background/layers/air.png', 0, 0),
        new BackgroundObject('./img/5_background/layers/3_third_layer/1.png', 0, 0),
        new BackgroundObject('./img/5_background/layers/2_second_layer/1.png', 0, 0),
        new BackgroundObject('./img/5_background/layers/1_first_layer/1.png', 0, 0),
        new BackgroundObject('./img/5_background/layers/air.png', 719, 0),
        new BackgroundObject('./img/5_background/layers/3_third_layer/2.png', 719, 0),
        new BackgroundObject('./img/5_background/layers/2_second_layer/2.png', 719, 0),
        new BackgroundObject('./img/5_background/layers/1_first_layer/2.png', 719, 0),

        new BackgroundObject('./img/5_background/layers/air.png', 1438, 0),
        new BackgroundObject('./img/5_background/layers/3_third_layer/1.png', 1438, 0),
        new BackgroundObject('./img/5_background/layers/2_second_layer/1.png', 1438, 0),
        new BackgroundObject('./img/5_background/layers/1_first_layer/1.png', 1438, 0),
        new BackgroundObject('./img/5_background/layers/air.png', 2157, 0),
        new BackgroundObject('./img/5_background/layers/3_third_layer/2.png', 2157, 0),
        new BackgroundObject('./img/5_background/layers/2_second_layer/2.png', 2157, 0),
        new BackgroundObject('./img/5_background/layers/1_first_layer/2.png', 2157, 0)
    ],
    [
        new Coin(300, 300),
        new Coin(400, 200),
        new Coin(500, 200),
        new Coin(600, 300)
    ],
    [
        new Bottle(600, 250),
        new Bottle(700, 220),
        new Bottle(800, 200),
        new Bottle(900, 200),
        new Bottle(1000, 250)
    ]

);