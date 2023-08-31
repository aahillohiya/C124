function preload() {
    
}

function setup() {
 canvas = createCanvas(730,450);
 canvas.position(560,150);

 video = createCapture(VIDEO);
 video.size(550,550)

 poseNet = ml5.posenet(video,modelLoaded);
 poseNet.on('pose',gotPoses)
}

function draw() {
    background('#dcdcdc')
}

function modelLoaded() {
    console.log("Model is Loaded");
}

function gotPoses(error,results) {
    if(error){
        console.error("ERROR!!!");
    }
    else{
        console.log("RESULTS!!!");
        
    }
}