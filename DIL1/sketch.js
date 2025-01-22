let Rhys;

function setup() {
	new Canvas(1200, 500);
	world.gravity.y= 10;

	 	Rhys = new Sprite(10,250,'d');


			Rhys.diameter = 20;

allPillars = new Group()

	PillarOne = new allPillars.Sprite(325,75,75,150,'s');
		PillarOne.colour = 'lime';
	PillarTwo = new allPillars.Sprite(325,height-125,75,250,'s');
		PillarTwo.colour = 'lime';

	PillarThree = new allPillars.Sprite(525,160,75,320,'s');
		PillarThree.colour = 'lime';
	PillarFour = new allPillars.Sprite(525,height-25,75,50,'s')
		PillarFour.colour = 'lime';

	PillarFive = new allPillars.Sprite(725,145,75,290,'s');
		PillarFive.colour = 'lime';
	PillarSix = new allPillars.Sprite(725,height-50,75,100,'s')
		PillarSix.colour = 'lime';

	PillarSeven = new allPillars.Sprite(925,40,75,80,'s');
		PillarSeven.colour = 'lime';
	PillarEight = new allPillars.Sprite(925,height-140,75,310,'s')
		PillarEight.colour = 'lime';

	PillarNine = new allPillars.Sprite(1125,105,75,210,'s');
		PillarNine.colour = 'lime';
	PillarTen = new allPillars.Sprite(1125,height-105,75,210,'s')
		PillarTen.colour = 'lime';

	Rhys.collides(allPillars,reset)
}
function reset(){
	Rhys.x = 50;
	Rhys.y  = 50;
}
function draw() {
 background('skyblue');
	Rhys.vel.x = 2



}

function keyPressed() {
	if ( key = ' '){
		Rhys.vel.y = -5;

	}



}