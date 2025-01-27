let dvd;

let ySpeed = 10;

function setup() {
	new Canvas(window.innerWidth, window.innerWidth);


			player = new Sprite(500,500,40,40,'d');

			// wallsGroup = new Group(leftWall,rightWall,topWall,bottomWall);
			leftWall = new Sprite( width-width-1, height/2, 1, height,'s');
			rightWall = new Sprite( width+1, height/2, 1, height,'s');
			topWall = new Sprite( width/2, height-height-1, width, 1,'s');
			bottomWall = new Sprite( width/2 ,height+1 ,width, 1,'s');






}

function draw() {
	background('skyblue');
			accelerate();
			manMovement();






	}

			function accelerate(){
				if(player.vel.x > 0){
					player.vel.x = player.vel.x - 0.1
				}
				if(player.vel.y > 0){
					player.vel.y = player.vel.y - 0.1;
				}

				if(player.vel.x < 0){
					player.vel.x = player.vel.x + 0.1;

				}
				if(player.vel.y < 0 ){
					player.vel.y = player.vel.y + 0.1;
				}}
			function manMovement() {
				if (kb.pressing('w')) {
					player.vel.y = -3
				}

				if (kb.pressing('s')) {
					player.vel.y = 3
				}

				if (kb.pressing('a')) {
					player.vel.x = -3
				}

				if (kb.pressing('d')) {
					player.vel.x = 3
				}
			}





