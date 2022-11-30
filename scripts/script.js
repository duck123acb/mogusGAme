const canvas = document.getElementById("canvas");
try {
	canvas.getContext("2d");
} catch {
	throw new Error("Cannot get 2D context of Canvas");
}

const ctx = canvas.getContext("2d");
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;
let running = true;

const playerSprite = new Image();
playerSprite.src = "sprites/player/mogus.jpg";

// x, y, width, height, speed
let player = new Player(canvas.width / 2, canvas.height / 2, 50, 100, 5);

playerSprite.addEventListener("load", function() {
	ctx.drawImage(playerSprite, player.x, player.y, player.width, player.height);
});

window.addEventListener("keydown", function(event) {
	player.move(event.key);
	if (player.x <= 0) player.x = 0;
	if (player.x + player.width >= canvas.width) player.x = canvas.width - player.width;
	if (player.y <= 0) player.y = 0;
	if (player.y + player.height >= canvas.height) player.y = canvas.height - player.height;
	
	
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(playerSprite, player.x, player.y, player.width, player.height);
});
