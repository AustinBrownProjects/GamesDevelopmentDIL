let block;
let index = 0

function setup() {
	new Canvas(600, 500);
	wallsGroup = new Group();
	wallsGroup.colour = 'white'
	world.gravity.y = 1

	topWall = new wallsGroup.Sprite(width/2,height-height,width,10,'s');
	bottomWall = new wallsGroup.Sprite(width/2,height,width,10,'s');
	leftWall = new wallsGroup.Sprite(width-width,height/2,10,height,'s');
	rightWall = new wallsGroup.Sprite(width,height/2,10,height,'s');


		block = new Sprite(width/2-20,20,100,20,'d')
			block.bounciness = 1;
				block.vel.x = 3;
				blockFloor = new Sprite(width/2,block.y+11,width,1,'s')
					blockFloor.friction = 0;
				blockFloor.visible = false;






}

function draw() {
	background('skyblue');


	let XPosition = block.x
}

function keyPressed() {
	if ( key = ' '){

			index += 1
			blockGap=index*20
		heightSpawn = height- blockGap;
		blockDropped =  new Sprite(block.x,heightSpawn,100,20,'d')
		blockDropped.vel.y = 0.2
		blockDropped.bounciness = 0;
	}





}