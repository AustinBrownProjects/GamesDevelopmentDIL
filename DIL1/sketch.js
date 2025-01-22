let Rhys;

function setup() {
	new Canvas(1200, 500);
	world.gravity.y= 10;

	 	Rhys = new Sprite(10,250,'d');
		 Rhys.vel.x = 2
			Rhys.diameter = 20;


	PillarOne = new Sprite(325,height-125,75,250,'s');
		PillarOne.colour = 'lime'
	PillarTwo = new Sprite(325,height-125,75,250,'s');
		PillarTwo.colour = 'lime'

	PillarThree = new Sprite(525,160,75,320,'s');

	PillarFour = new Sprite(525,height-25,75,50,'s')

	PillarFive = new Sprite(725,145,75,290,'s');
	PillarSix = new Sprite(725,height-50,75,100,'s')

	PillarSeven = new Sprite(925,40,75,80,'s');
	PillarEight = new Sprite(925,height-160,75,350,'s')

	PillarNine = new Sprite(1125,105,75,210,'s');
	PillarTen = new Sprite(1125,height-105,75,210,'s')
}

function draw() {
 background('skyblue');



}

function keyPressed() {
	if ( key = ' '){
	Rhys.y -= 50;
	Rhys.vel.y = 0;

	}



}