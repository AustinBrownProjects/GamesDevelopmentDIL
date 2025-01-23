let dvd;

function setup() {
	new Canvas(500, 500);

	dvd = new Sprite(150,100,20,'d')
		dvd.bounciness = 1;
		dvd.vel.y = 3;
		dvd.vel.x = 3;


	wallsGroup = new Group();
			LeftWalls = new wallsGroup.Sprite(width-width,height/2,10,height,'s');
				LeftWalls.colour = 'white'
			RightWalls = new wallsGroup.Sprite(width,height/2,10,height,'s');
				RightWalls.colour = 'white'

			TopWalls = new wallsGroup.Sprite(width/2,height-height,width,10,'s');
				TopWalls.colour = 'white'
			BottomWalls = new wallsGroup.Sprite(width/2,height,width,10,'s');
				BottomWalls.colour = 'white'

}

function draw() {
	background('skyblue');



}
