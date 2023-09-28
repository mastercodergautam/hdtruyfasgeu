function preload(){

}
function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(500,500);
    video.hide()
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on("pose",gotposes)
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        console.log("nosex="+results[0].pose.nose.x);
        console.log("nosey="+results[0].pose.nose.y);
    }
    
    
    }
    function modelloaded(){
            console.log("model has been initialized")}
function draw(){
    image(video,0,0,500,500)
}
function take_snapshot(){
    save ("my_snapshot.jpg")
}