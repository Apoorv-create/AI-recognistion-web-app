NoseX = 0;
NoseY = 0;
RightWristX = 0;
LeftWristX = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(500, 500);

   canvas = createCanvas(550, 500);
   canvas.position(500, 100);

   poseNet = ml5.poseNet(video, modalLoaded);
   poseNet.on('pose', gotPoses);
}

function draw() {
    background('#6ACCBC');
    fill('#DB4035');
    stroke('#DB4035');
    square(NoseX, NoseY, difference);
}

function modalLoaded() {
    console.log("Modal has been loaded")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        NoseX = results[0].pose.nose.x;
        NoseY = results[0].pose.nose.y;

        LeftWristX = results[0].pose.leftWrist.x;
        RightWristX = results[0].pose.rightWrist.x;
        difference = floor(LeftWristX - RightWristX);
        console.log("RightWristX = " + RightWristX + "LeftwristX = " + LeftWristX + "difference = " + difference);
    }
}