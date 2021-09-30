img = "";

function preload()
{
    img = loadImage('dog_cat.jpg')
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FF0000")
    text("Dog", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30 ,60, 450, 350 );
    fill("#FFFF00")
    text("Cat", 295, 90);
    noFill();
    stroke("#FFFF00");
    rect(275 ,75, 335, 320 );
}