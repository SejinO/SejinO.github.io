		var canvas;
		let angle = 0;
		function setup() {
			canvas = createCanvas(windowWidth, windowHeight, WEBGL);
			smooth();
			noStroke();
		}

		function windowResized() {
			resizeCanvas(windowWidth, windowHeight);
		}

		function draw() {
			let dx = mouseX - width / 2;
			let dy = mouseY - height / 2;
			let v = createVector(-dx, -dy, 0);
			v.div(100);

			ambientLight(0, 0, 255, -200, 0, 0);
			directionalLight(255, 0, 0, v);
			//	pointLight(255, 0, 0, 200, 0, 200);

			//	for (i = 0; i < 500; i += 100) {
			//		pointLight(0, 0, 255, -200, 0, i)
			//		pointLight(255, 0, 0, 200, 0, i);
			//
			//	}
			background(0);
					push();
			rotateX(angle);
			rotateY(angle * 0.3);
			rotateZ(angle * 1.2);
			noStroke();
			ambientMaterial(255);
			torus(150, 50);
			angle += 0.03;
			pop();
		}


		function touchMoved() {

		}