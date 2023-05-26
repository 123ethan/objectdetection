function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    
}

function preload()
{
    img = loadImage('fruits.jpg');
}
function draw()
{
    image(img, 0,0,640,420);
    


    fill("#FF0000");
    text("Fruits" , 115,130 );
    noFill();
    stroke("#FF0000")
    rect( 100,120 , 450 , 220);

   
} 