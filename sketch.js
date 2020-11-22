let contents = 'designersejinoh';
var fontSize = 30;
let typoPG;
let font;
// let permissionGranted = false;
let shake;
function preload() {
  font = loadFont('Helvetica.otf');

}

function setup() {
  createCanvas(420, 400);
  smooth();
  typoPG = createGraphics(420, 400);
  shake =0;
// //DeviceOrientationEvent, DeviceMotionEvent
//   if (typeof(DeviceOrientationEvent) !== 'undefined' && typeof(DeviceOrientationEvent.requestPermission) === 'function') {
//     //ios 13 device
//     DeviceOrientationEvent.requestPermission()
//       .catch(() => {
//         let button = createButton("버튼을 누른 후 센서를 허가해주십시오.");
//         button.style("font-size", "24px");
//         button.style("background-color", "black");
//         button.style("color", "white");
//         button.center();
//         button.mousePressed(requsetAccess);
//         throw error;
//       })
//       .then(() => {
//         // on any subsequent visits
//         permissionGranted = true;
//       })
//   } else {
//     //non ios 13 device
//     // text("non ios 13 device", 100, 100);
//     permissionGranted = true;
//   }
}
// function requsetAccess() {
//   DeviceOrientationEvent.requestPermission()
//     .then(response => {
//       if (response == 'granted') {
//         permissionGranted = true;
//       } else {
//         permissionGranted = false;
//       }
//     })
//     .catch(console.error);
//   this.remove();
// }
function createPG() {

  // typoPG.background(0, 0, 0);
    typoPG.blendMode(ADD);

  //배경화면 색상(R,G,B);

  typoPG.fill(255, 0, 0);
  //폰트 색상(R,G,B);

  typoPG.textFont(font);
  typoPG.textSize(fontSize);
  typoPG.push();
  typoPG.textAlign(CENTER, CENTER);
  typoPG.text(contents, width / 2-3, height / 2);
  typoPG.pop();
    typoPG.fill(0, 255, 0);

    typoPG.push();
  typoPG.textAlign(CENTER, CENTER);
  typoPG.text(contents, width / 2, height / 2);
  typoPG.pop();
    typoPG.fill(0, 0, 255);
      typoPG.push();
  typoPG.textAlign(CENTER, CENTER);
  typoPG.text(contents, width / 2+3, height / 2);
  typoPG.pop();

}

function draw() {
  //   if (!permissionGranted) {
  //   return;
  // }
  background(0);
  
  createPG();

  let tilesX = 10;
  //그리드의 가로 칸 갯수
  //Grid's row

  let tilesY = 2;
  //그리드의 세로 칸 갯수
  //Grid's col

  let tileW = width / tilesX;
  let tileH = height / tilesY;

  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {
      // WAVE
      // let wave =((constrain(winMouseY,0,height) + (x * y)) * 0.01) * 100;
      // SOURCE
if(mouseX >= 20 && mouseX<=width-20 && mouseY >= 20 && mouseY <= height-20){
	cursor('grab');
           shake += random(-1,1);

}
      let sx = x * tileW+shake;
      let sy = y * tileH;
      let sw = tileW;
      let sh = tileH;
      // DESTINATION
      let dx = x * tileW;
      let dy = y * tileH;
      let dw = tileW;
      let dh = tileH;
      copy(typoPG, sx, sy, sw, sh, dx, dy, dw, dh);
    }
  }
}