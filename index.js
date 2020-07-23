let points, canvas;

function setup(){
	points = [];
	canvas = createCanvas(800, 800);
}

function mousePressed(){
	points.push(createVector(mouseX, canvas.height - mouseY));
}

function drawSystem(){
	background(50);
	stroke(255, 0, 0);
	line(canvas.width / 2, 0, canvas.width / 2, canvas.height);
	line(0, canvas.height / 2, canvas.width, canvas.height / 2);
	stroke(0);
}

function drawPoints(){
	for(let i = 0; i < points.length; i++)
		ellipse(points[i].x, canvas.height - points[i].y, 20, 20);
}

function liniarRegression(){

	let xAverage = 0, yAverage = 0;

	for(let i = 0; i < points.length; i++){
		xAverage += points[i].x;
		yAverage += points[i].y;
	}

	xAverage /= points.length;
	yAverage /= points.length;

	let numerator = 0, denominator = 0;

	for(let i = 0; i < points.length; i++){
		numerator += ((points[i].x - xAverage) * (points[i].y - yAverage));
		denominator += ((points[i].x - xAverage) * (points[i].x - xAverage));
	}

	let m = numerator / denominator;
	let b = yAverage - m * xAverage;

	stroke(0, 255, 0);
	strokeWeight(5);
	line(0, canvas.height - b, canvas.width, canvas.height - (canvas.width * m + b));
	stroke(0);
	strokeWeight(1);
}

function draw(){

	drawSystem();
	drawPoints();
	if(points.length > 1)
		liniarRegression();
}