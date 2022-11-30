class Player {
	constructor(x, y, width, height, speed, gravity, groundHeight) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.speed = speed;
		this.gravity = gravity;
		this.velocty = 0;
		this.groundHeight;
	}

	move(dir) {
		switch (dir) {
			case 'w':
				this.y -= this.speed;
				break;
			case 's':
				this.y += this.speed;
				break;
			case 'a':
				this.x -= this.speed;
				break;
			case 'd':
				this.x += this.speed;
				break;

			default:
				break
		}
	}
}
