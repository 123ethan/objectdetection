function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    
}

function preload()
{
    img = loadImage('desk.jpg');
}
function draw()
{
    image(img, 0,0,640,420);
    


    fill("#FF0000");
    text("Desk" , 75,190  );
    noFill();
    stroke("#FF0000")
    rect( 70,180 , 450 , 220);

   
} 