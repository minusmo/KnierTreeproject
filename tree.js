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

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.font = "1px Arial";

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

const stage = new createjs.Stage("canvas");
let circle = new createjs.Shape();

circle.graphics
  .beginFill("red")
  .drawCircle(0.5 * canvas.width, 0.2 * canvas.height, 40);

stage.addChild(circle);
stage.update();

function drawCircle(x ,y) {
    let newCircle = new createjs.Shape()
}

function drawNode(x, y, node) {
  // let cirle = drawCirle(x,y)
  if (node.val !== null) {
    ctx.fillText(`${node.val}`, x, y);
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
