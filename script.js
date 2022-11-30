const canvas = document.getElementById("canvas");
if (!canvas.getContext) throw new Error("Cannot get 2D context of Canvas");
const ctx = canvas.getContext("2d");
let running = true;

const playerSprite = new Image();
playerSprite.src = "sprites/player/mogus.jpg";

let player = new Player(100, 100, 50, 100, 5, 10, canvas.height);

window.addEventListener("keydown", function(event) {
	player.move(event.key);
	
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(playerSprite, player.x, player.y, player.width, player.height);
});
