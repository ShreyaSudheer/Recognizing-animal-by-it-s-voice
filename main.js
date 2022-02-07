function start(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/hgkFVt7Uz/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error ,results){
    if(error){
        console.error(error);
    }
    else{
    console.log(results);
    random_red = Math.floor(Math.random() * 255) + 1;
    random_green = Math.floor(Math.random() * 255) + 1;
    random_blue = Math.floor(Math.random() * 255) + 1;
    }

    document.getElementById("result_label").innerHTML = "I Can Hear - "+results[0].label;
    document.getElementById("result_confidence").innerHTML = "Accuracy - "+ (results[0].confidence*100).toFixed(2) +" %";

    document.getElementById("result_label").style.color = "rgb("+random_red+","+random_green+","+random_blue+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_red+","+random_green+","+random_blue+")";

    img1 = document.getElementById("Cat Meowing.gif");
    img2 = document.getElementById("rover-bark-dribbble.gif");

    if(results[0].label == "Barking"){
        img1.src = 'rover-bark-dribbble.gif';
 }
    else if(results[0].label == "Meowing"){
        img2.src = 'Cat Meowing.gif';
    }
}