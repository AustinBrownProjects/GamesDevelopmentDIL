let block;

function setup() {
	new Canvas(600, 500);
	wallsGroup = new Group();
	wallsGroup.colour = 'white'

	topWall = new wallsGroup.Sprite(width/2,height-height,width,10,'s');
	bottomWall = new wallsGroup.Sprite(width/2,height,width,10,'s');
	leftWall = new wallsGroup.Sprite(width-width,height/2,10,height,'s');
	rightWall = new wallsGroup.Sprite(width,height/2,10,height,'s');


		block = new Sprite(width/2-20,20,100,20,'d')
			block.bounciness= 1;
				block.vel.x = 3;
					block.collides(bottomWall,stop);






}

function draw() {
	background('skyblue');



}

function keyPressed() {
	if ( key = ' '){
		block.vel.x = 0;
		block.vel.y =10
	}
	function stop(){
		block.collider = 'static';
	}

}