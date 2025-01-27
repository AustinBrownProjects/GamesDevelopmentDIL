let dvd;

let ySpeed = 10;

function preload(){
	AtlantaJeans = loadImage("AtlantaJeans.png");

	AtlantaJeans.resize(20,40);

	baggiestJeans = loadImage("baggyJeans.png");
	baggiestJeans.resize(20,40)

}
function setup() {
	new Canvas(window.innerWidth, window.innerWidth);


	AtlantaJeansFinalBoss = new Sprite(500,500,20,40,'d');
	AtlantaJeansFinalBoss.image = AtlantaJeans


	BaggyJeans = new Sprite(100,500,20,40,'d');
	BaggyJeans.speed = 1.5;
	BaggyJeans.image = baggiestJeans



	leftWall = new Sprite( width-width-1, height/2, 1, height,'s');
	rightWall = new Sprite( width+1, height/2, 1, height,'s');
	topWall = new Sprite( width/2, height-height-1, width, 1,'s');
	bottomWall = new Sprite( width/2 ,height+1 ,width, 1,'s');
}

function draw() {
	background('skyblue');
	accelerate();
	manMovement();
	corruption();
	hunting();
	Sprint();
}
function accelerate(){
	if(AtlantaJeansFinalBoss.vel.x > 0){
		AtlantaJeansFinalBoss.vel.x = AtlantaJeansFinalBoss.vel.x - 0.1
	}
	if(AtlantaJeansFinalBoss.vel.y > 0){
		AtlantaJeansFinalBoss.vel.y = AtlantaJeansFinalBoss.vel.y - 0.1;
	}

	if(AtlantaJeansFinalBoss.vel.x < 0){
		AtlantaJeansFinalBoss.vel.x = AtlantaJeansFinalBoss.vel.x + 0.1;

	}
	if(AtlantaJeansFinalBoss.vel.y < 0 ){
		AtlantaJeansFinalBoss.vel.y = AtlantaJeansFinalBoss.vel.y + 0.1;}
}
function manMovement() {
	if (kb.pressing('w')) {
		AtlantaJeansFinalBoss.vel.y = -3
	}

	if (kb.pressing('s')) {
		AtlantaJeansFinalBoss.vel.y = 3
	}

	if (kb.pressing('a')) {
		AtlantaJeansFinalBoss.vel.x = -3
	}

	if (kb.pressing('d')) {
		AtlantaJeansFinalBoss.vel.x = 3
	}
}
function corruption(){
	if (BaggyJeans.collides(AtlantaJeansFinalBoss)){
		AtlantaJeansFinalBoss.image = "BaggyJeans.png"
		CorruptionScreen = new Sprite(width/2,100,width,100)
		CorruptionScreen.colour = "blue";
		CorruptionScreen.text = "YOU HAVE BEEN CORRUPTED"

		CorruptionScreenTwo = new Sprite(width/2,100,width,100)
		CorruptionScreenTwo.colour = "blue"
		CorruptionScreenTwo.text = "YOUR JEANS ARE BAGGY!"

		BaggyJeans.remove();
	}
}
function hunting(){
	if(BaggyJeans.x != AtlantaJeansFinalBoss.x || BaggyJeans.x != AtlantaJeansFinalBoss.x){
		BaggyJeans.moveTo(AtlantaJeansFinalBoss)}
}
function Sprint(){
	if (kb.pressing('shift')) {
		AtlantaJeansFinalBoss.vel.x *= 1.5;
		AtlantaJeansFinalBoss.vel.y *= 1.5;
	}}










