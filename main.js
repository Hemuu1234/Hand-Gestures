//https://teachablemachine.withgoogle.com/models/024zRt140/
var prediction1 = "";
var prediction2 = "";
Webcam.set({
    width:350,
    height:300,
    image_format:"jpeg",
    jpeg_quality:90
}); 
var camera = document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot() {
    Webcam.snap(function(data_uri){
     document.getElementById("result").innerHTML = "<img id='captured_image' src='"+data_uri+"'>";  
     }); 
}
console.log("ml5 version",ml5.version);
var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/024zRt140/model.json",modelloaded);
function modelloaded() {
    console.log("model loaded");
}
function speak() {
    var synth = window.SpeechSynthesis;
    var speak_data1 = "The first prediction is "+prediction1;
    var speak_data2 = "The second prediction is "+prediction2;
    var utter_this = new SpeechSynthesisUtterence(speak_data1+speak_data2);
    synth.speak(utter_this);
}

