function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    
}

function preload()
{
    img = loadImage('br.jpg');
}
function draw()
{
    image(img, 0,0,640,420);
    fill("#FF0000");
    text("Bed" , 90,120  );
    noFill();
    stroke("#FF0000")
    rect(60 ,100 , 400 , 300);  


    fill("#FF0000");
    text("Chair" , 490,210  );
    noFill();
    stroke("#FF0000")
    rect(490 ,200 , 130 , 180);

   
} 