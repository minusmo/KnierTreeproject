const node = {
  val: 3,
  leftChild: false,
  rightChild: false
};

const tree = {
  root: {
    val: 5,
    leftChild: node,
    rightChild: false
  }
};

// canvas 와 context를 변수로 잡는다.
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// canvas의 너비와 높이를 초기화 한다.
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

// stage를 생성한다.
const stage = new createjs.Stage("canvas");
// let circle = new createjs.Shape();

// circle.graphics
//   .setStrokeStyle(1)
//   .beginStroke("#000000")
//   .beginFill("red")
//   .drawCircle(0.5 * canvas.width, 0.1 * canvas.height, 20);

// 특정위치(원의 중심)에 특정 텍스트를 삽입하는 함수.
function drawText(x, y, text) {
  let newText = new createjs.Text(text, "20px Arial", "#000000");
  newText.textAlign = "center";
  newText.x = x;
  newText.y = y + 40;
  stage.addChild(newText);
  return;
}

// 특정 위치에 원을 그리는 함수. 선 스타일 과 색깔, 원의 반지름도 수정가능하도록 바꿀 수 있음.
function drawCircle(x, y) {
  let newCircle = new createjs.Shape();
  stage.addChild(newCircle);
  newCircle.graphics
    .setStrokeStyle(1)
    .beginStroke("#000000")
    .beginFill("red")
    .drawCircle(x, y, 20);
  return newCircle;
}

// 특정 위치로부터 다음위치까지 선을 그리는 함수. 선의 스타일과 색깔을 수정가능하도록 바꿀 수 있음.
function drawLine(x, y, X, Y) {
  let line = new createjs.Shape();
  let lineG = line.graphics;
  stage.addChild(line);
  lineG.setStrokeStyle(3).beginStroke("#000000");
  lineG.moveTo(x, y);
  lineG.lineTo(X, Y);
  lineG.endStroke();
  return line;
}

function drawNode(x, y, node) {
  // drawCircle(x, y);
  if (node.val !== null) {
    // ctx.fillText(`${node.val}`, x, y);
    // 텍스트와 도형을 그룹화하는 funtion
  }
  if (node.leftChild !== null) {
    // drawLine()
    drawNode(newX, newY, node.leftChild);
  }
  if (node.rightChild !== null) {
    //drawLine()
    drawNode();
  }
}

let circle = drawCircle(0.5 * canvas.width, 0.1 * canvas.height, 20);
stage.addChild(circle);

console.log(stage.children);

stage.update();
