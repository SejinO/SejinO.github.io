var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var innerwidth = innerWidth;
var innerheight = innerHeight;

c.imageSmoothingEnabled = false;


window.addEventListener('resize', resizeCanvas);

function resizeCanvas() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	innerwidth = canvas.width;
	innerheight = canvas.height;
	animate();
}

function Circle(x, y, dx, dy, radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;

	this.draw = function () {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.strokeStyle = 'rgba(0,0,255,0.7)';
		c.stroke();
		c.fillStyle = 'rgba(10,10,10,0.9)';
		c.fill();
	}
	this.update = function (innerwidth, innerheight) {
		if (this.x + this.radius > innerwidth || this.x - this.radius < 0) {
			this.dx = -this.dx;
		}
		if (this.y + this.radius > innerheight || this.y - this.radius < 0) {
			this.dy = -this.dy;
		}
		this.x += this.dx;
		this.y += this.dy;

		this.draw();
	}
}

var circleArray = [];

for (var i = 0; i < 20; i++) {
	var x = radius + Math.random() * (innerwidth - radius * 2);
	var y = radius + Math.random() * (innerheight - radius * 2);
	var dx = (Math.random() - 0.5);
	var dy = (Math.random() - 0.5);
	var radius = 50 * Math.random();
	circleArray.push(new Circle(x, y, dx, dy, radius));
}




//draw
function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerwidth, innerheight);
	for (var i = 0; i < circleArray.length; i++) {
		//	circle.update();
		circleArray[i].update(innerwidth, innerheight);
	}
}

animate();
