let yPosition = 60;
let yChange = 1;
let ellipseWidth = 72;
let yEndLine = 0;
let ellipseWidthChange = 1;
let growWide = true;
let ellipseHeight = 72;
let ellipseHeightChange = 1;
let angle = 0;
let redRandom = 0;
let blueRandom = 0;
let greenRandom = 0;

function setup() {
    let myCanvas = createCanvas(600, 400);
    myCanvas.parent('myContainer');
    rectMode(CENTER);
    angleMode(DEGREES);
}

function draw() {
    background(55);

    noStroke();
    fill(255, 0, 0);
    rect(width * 0.1, yPosition, 50, 100);

    rectMode(CENTER);
    fill(0, 0, 255);
    rect(width * 0.1, yPosition, 25, 50);

    yPosition = yPosition + yChange;

    if (yPosition > 120 || yPosition < 60) {
        yChange = yChange * -1;
    }

    fill(255);
    ellipse(252, 144, ellipseWidth, ellipseHeight);

    if (growWide) {
        ellipseWidth = ellipseWidth + ellipseWidthChange;
    } else {
        ellipseHeight = ellipseHeight + ellipseHeightChange;
    }


    if (ellipseWidth > 150) {
        ellipseWidthChange = ellipseWidthChange * -1;
    }
    if (ellipseWidth <= 50) {
        growWide = false;
        ellipseWidthChange = ellipseWidthChange * -1;
    }
    if (ellipseHeight > 150) {
        ellipseHeightChange = ellipseHeightChange * -1;
    }
    if (ellipseHeight <= 50) {
        growWide = true;
        ellipseHeightChange = ellipseHeightChange * -1;
    }

    push()
    translate(400, 300); 
    rotate(angle);
    fill(12, 120, 120);
    rect(0, 0, 50, 50);
    pop();

    redRandom = random(0, 255);
    greenRandom = random(0, 255);
    blueRandom = random(0, 255);
    push()
    translate(500, 100); 
    rotate(angle);
    fill(redRandom, greenRandom, blueRandom);
    rect(0, 0, 100, 100);
    pop();

    push()
    translate(500, 100); 
    rotate(angle);
    fill(20);
    rect(0, 0, 15, 15);
    pop();

    angle+=1;

    fill(0, 255, 0);
    square(100, 350, 80);

    fill(255, 0, 255);
    triangle(60, 310, 100, 240, 140, 310);

    fill(0);
    rect(100, 365, 25, 50);

    fill(255);
    circle(105, 365, 6);

}
