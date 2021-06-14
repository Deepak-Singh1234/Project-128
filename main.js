astronomia = "";
born_for_this = "";
unstoppable = "";
leftWristX = "";
leftWristY = "";
rightWristX = "";
rightWristY = "";
function preload(){
    astronomia = loadSound("Asronomia.mp3");
    bft = loadSound("Bornforthis.mp3");
    unstoppable = loadSound("Unstoppable.mp3");
}

function setup(){
    canvas = createCanvas(600 , 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on("pose" , gotPoses);
}

function modelLoaded(){
    console.log("MoDeL Is InIcIaLiSeD !");
}

function play(){
    var name = document.getElementById("name").value;
    if(name == "astronomia"){
     
        astronomia.play();
    }
    
    if(name == "born_for_this"){
       
        born_for_this.play();
    }

    if(name = "unstoppable"){
   
        unstoppable.play();
    }

}

function stop(){
    astronomia.stop();
    born_for_this.stop();
    unstoppable.stop();
}

function gotPoses(results){
    if(results.length > 0){
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightwristX = " + rightWristX + "rightwristY = "+ rightWristY);
        console.log("leftwristX = " + leftWristX + "leftwristY = "+ leftWristY);
    }
}