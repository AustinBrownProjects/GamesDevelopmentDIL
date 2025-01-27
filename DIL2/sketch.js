let dvd;

let ySpeed = 10;

function setup() {
	new Canvas(window.innerWidth, window.innerWidth);


			AtlantaJeansFinalBoss = new Sprite(500,500,20,40,'d');
				// player.img = "AtlantaJeans.png"


			// BaggyJeans = new Sprite(500,500,20,40,'d');
			// BaggyJeans.img = "BaggyJeans.png"
			// BaggyJeans.moveTowards(AtlantaJeansFinalBoss,0.55)

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
					player.vel.y = player.vel.y + 0.1;}
				}
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
			// function corruption(){
			// 	if (BaggyJeans.collides(AtlantaJeansFinalBoss)){
			// 			AtlantaJeansFinalBoss.img = "BaggyJeans.png"
			// 			CorruptionScreen = new Sprite(width/2,100,width,100)
			// 			CorruptionScreen.text = "YOU HAVE BEEN CORRUPTED"

			// 			CorruptionScreenTwo = new Sprite(width/2,100,width,100)
			// 			CorruptionScreenTwo.text = "YOUR JEANS ARE BAGGY!"
			// 	}
			// }





