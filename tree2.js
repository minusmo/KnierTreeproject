let g = {
  nodes: [],
  edges: []
};

class Node {
  constructor(x, y, id, label) {
    this.x = x;
    this.y = y;
    this.id = id;
    this.label = label;
    this.size = 80;
    this.color = "#f38";
  }
}

class Line {
  constructor(source, target, id) {
    this.source = source;
    this.target = target;
    this.id = id;
    this.size = 3;
    this.color = "#000";
    this.label = "line";
  }
}

// 노드 생성
const n1 = new Node(70, 100, "n1", "10");
const n2 = new Node(69, 101, "n2", "5");
const n3 = new Node(71, 101, "n3", "5");
console.log(n1);
g.nodes.push(n1);
g.nodes.push(n2);
g.nodes.push(n3);
//실험 노드 하나 생성
// const aNode = {
//   id: "n4",
//   label: "3",
//   x: 68,
//   y: 102,
//   size: 70,
//   color: "#8f8",
//   leftChild: true,
//   rightChild: false
// };
// g.nodes.push(aNode);

//실험 라인 생성

const e1 = new Line("n1", "n2", "e1");
const e2 = new Line("n1", "n3", "e2");
console.log(e1);
g.edges.push(e1);
g.edges.push(e2);

// 노드 객체 생성 기준
// {
//     id: "n" + i,
//     label: "Node " + i * 1000000000,
//     x: Math.random(),
//     y: 50 + i,
//     size: 50,
//     color: "#8f8"
//   }

// 라인 객체 생성 기준
// {
//     id: "e" + i,
//     source: "n" + ((Math.random() * N) | 0),
//     target: "n" + ((Math.random() * N) | 0),
//     size: Math.random(),
//     color: "#ccc"
//   }

const s = new sigma({
  graph: g,
  renderer: {
    container: document.getElementById("canvas"),
    type: "canvas"
  },
  settings: {
    scalingMode: "inside",
    sideMargin: 10,
    minNodeSize: 1,
    maxNodeSize: 3,
    minEdgeSize: 0.5,
    maxEdgeSize: 2
    zoomMin: 0.5
  }
});

// 예시 자료형

const json = {
    root: {
        val: 10,
        leftChild: {
            val: 5
        }
        rightChild: {
            val: 15,
            rightChild: 16
        }
    }
}
