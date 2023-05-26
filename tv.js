function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    
}

function preload()
{
    img = loadImage('tv.jpg');
}
function draw()
{
    image(img, 0,0,640,420);
    fill("#FF0000");
    text("AC" , 225,15  );
    noFill();
    stroke("#FF0000")
    rect(220 ,3 , 300 , 140);


    fill("#FF0000");
    text("TV" , 225,190  );
    noFill();
    stroke("#FF0000")
    rect(220 ,180 , 300 , 180);

   
} 