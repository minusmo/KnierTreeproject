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
    this.size = 50;
    this.color = "#8f8";
  }
}

class Line {
  constructor(source, target, id) {
    this.source = source;
    this.target = target;
    this.id = id;
    this.size = 3;
    this.color = "#cf8";
    this.label = "line";
  }
}

// 노드 생성
const n1 = new Node(100, 30, "n1", "10");
const n2 = new Node(70, 60, "n2", "5");
const n3 = new Node(130, 60, "n3", "5");
console.log(n1);
g.nodes.push(n1);
g.nodes.push(n2);
g.nodes.push(n3);

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
  }
});
