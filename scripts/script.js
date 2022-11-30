const canvas = document.getElementById("canvas");
if (!canvas.getContext) {
	console.error("Cannot get 2D context of Canvas");
	window.stop();
}
const ctx = canvas.getContext("2d");
let running = true;

const playerSprite = new Image();
playerSprite.src = "sprites/player/mogus.jpg";

let player = new Player(100, 100, 50, 100, 5, 10, canvas.height);

playerSprite.addEventListener("load", function() {
	ctx.drawImage(playerSprite, player.x, player.y, player.width, player.height);
});

window.addEventListener("keydown", function(event) {
	player.move(event.key);
	
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(playerSprite, player.x, player.y, player.width, player.height);
});
