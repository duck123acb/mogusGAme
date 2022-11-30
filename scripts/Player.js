class Player {
	constructor(x, y, width, height, speed) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.speed = speed;
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
