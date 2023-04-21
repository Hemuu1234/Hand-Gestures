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
function check() {
    var img = document.getElementById("captured_image");
    classifier.classify(img,gotresult);

}
function gotresult(error,results) {
    if(error){
        console.log(error);
        
    }
    else{
        console.log(results);
        document.getElementById("result_emotion_name1").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction1 = results[0].label;
        console.log(prediction1);
        prediction2 = results[1].label;
        speak();
        if(results[0].label=="Thumbs Up") {
            document.getElementById("update_emojie1").innerHTML = "&#128077;";
        }
        if(results[0].label=="Victory") {
            document.getElementById("update_emojie1").innerHTML = "&#9996;";
        }
        if(results[0].label=="Thumbs Down") {
            document.getElementById("update_emojie1").innerHTML = "&#128078;";
        }
        if(results[1].label=="Thumbs Up") {
            document.getElementById("update_emojie2").innerHTML = "&#128077;";
        }
        if(results[1].label=="Victory") {
            document.getElementById("update_emojie2").innerHTML = "&#9996;";
        }
        if(results[1].label=="Thumbs Down") {
            document.getElementById("update_emojie2").innerHTML = "&#128078;";
        }
    }
}

