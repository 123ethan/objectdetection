function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    
}

function preload()
{
    img = loadImage('bottle.jpg');
}
function draw()
{
    image(img, 0,0,640,420);
    


    fill("#FF0000");
    text("Bottle" , 165,60 );
    noFill();
    stroke("#FF0000")
    rect( 160,50 , 120 , 320);

   
} 