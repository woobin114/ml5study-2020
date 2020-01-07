// Copyright (c) 2018 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Image classification using MobileNet and p5.js
This example uses a callback pattern to create the classifier
=== */

// Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
// let classifier;

// // A variable to hold the image we want to classify
// let img;

// function preload() {
//   classifier = ml5.imageClassifier('MobileNet');
//   img = loadImage('images/bird.jpg');
// }

// function setup() {
//   createCanvas(400, 400);
//   classifier.classify(img, gotResult);
//   image(img, 0, 0);
// }

// // A function to run when we get any errors and the results
// function gotResult(error, results) {
//   // Display error in the console
//   if (error) {
//     console.error(error);
//   }
//   // The results are in an array ordered by confidence.
//   console.log(results);
//   createDiv('Label: ' + results[0].label);
//   createDiv('Confidence: ' + nf(results[0].confidence, 0, 2));
// }


console.log('ml5 version', ml5.version)

let classifier;

let img;


function preload(){
  //model
  classifier = ml5.imageClassifier('MobileNet');
  //image
  img = loadImage('images/whale.jpg');
}

function setup(){ 
  canvas = createCanvas(400, 400);
  // canvas.parent("")
  classifier.classify(img, gotResult);
  image(img, 0, 0, 400, 400);
}

//모델을 불러온 이후에, 결과물을 보여주고 싶으니까 js에서는 callback function을 사용
function gotResult(error, results){
	if (error) {
		console.error(error);
	}
	console.log(results);
	createDiv("Label:" + results[0].label);
  	createDiv("Confidence: " + nf(results[0].confidence, 0, 2));
}



