/// <reference path="kinetic-v5.1.0.js" />
'use strict';

var stage = new Kinetic.Stage({
    container: 'canvas-container',
    width: 660,
    height: 600
});

var layer = new Kinetic.Layer();

var imageObj = new Image();
imageObj.onload = function () {
    var blob = new Kinetic.Sprite({
        x: 350,
        y: 40,
        image: imageObj,
        animation: 'idle',
        animations: {
            idle: [
              0, 0, 31, 42,
            ],
            move: [
              37, 0, 39, 42,
              86, 0, 29, 42,
              126, 3, 34, 39,
            ]
        },
        frameRate: 7,
        frameIndex: 0
    });

    layer.add(blob);
    stage.add(layer);
    blob.start();

    document.addEventListener('keyup', function () {
        blob.animation('idle');
    });

    document.addEventListener('keydown', function (e) {
        if (e.keyCode == 39) {
            blob.scaleX(1);
        } else if (e.keyCode == 37) {
            blob.scaleX(-1);
        } else {
            return;
        }

        blob.animation('move');
        var currentX = blob.x();
        currentX += blob.scaleX() * 10
        blob.x(currentX)
    }, false);
};

imageObj.src = "images/mario-sprites.png";