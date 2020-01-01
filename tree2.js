let g = {
  nodes: [],
  edges: []
};

class Node {
  constructor(x, y, id, label, size = 1) {
    this.x = x;
    this.y = y;
    this.id = id;
    this.label = label;
    this.size = size;
    this.color = "#f38";
  }
}

class Line {
  constructor(source, target = "", id) {
    this.source = source;
    this.target = target;
    this.id = id;
    this.size = 1;
    this.color = "#000";
    this.label = "line";
  }
}

// 노드 생성
// const n1 = new Node(70, 50, "n1", "10");
// const n2 = new Node(69, 51, "n2", "5");
// const n3 = new Node(71, 51, "n3", "5");
// // const n4 = new Node(71, 51, "n4", "3");
// console.log(n1);
// g.nodes.push(n1);
// g.nodes.push(n2);
// g.nodes.push(n3);
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

// const e1 = new Line("n1", "n2", "e1");
// const e2 = new Line("n1", "n3", "e2");
// console.log(e1);
// g.edges.push(e1);
// g.edges.push(e2);

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

// 예시 자료형

const json = {
  root: {
    val: 5,
    leftChild: {
      val: 3,
      leftChild: null,
      rightChild: null
    },
    rightChild: {
      val: 4,
      leftChild: null,
      rightChild: null
    }
  }
};

let var1 = {
  root: {
    val: 5,
    leftChild: {
      val: 3,
      leftChild: {
        val: 3,
        leftChild: {
          val: 3,
          leftChild: {
            val: 3,
            leftChild: null,
            rightChild: null
          },
          rightChild: {
            val: 3,
            leftChild: null,
            rightChild: null
          }
        },
        rightChild: {
          val: 3,
          leftChild: {
            val: 3,
            leftChild: null,
            rightChild: null
          },
          rightChild: {
            val: 3,
            leftChild: null,
            rightChild: null
          }
        }
      },
      rightChild: {
        val: 3,
        leftChild: {
          val: 3,
          leftChild: {
            val: 3,
            leftChild: null,
            rightChild: null
          },
          rightChild: {
            val: 3,
            leftChild: null,
            rightChild: null
          }
        },
        rightChild: {
          val: 3,
          leftChild: {
            val: 3,
            leftChild: null,
            rightChild: null
          },
          rightChild: {
            val: 3,
            leftChild: null,
            rightChild: null
          }
        }
      }
    },
    rightChild: {
      val: 4,
      leftChild: {
        val: 3,
        leftChild: {
          val: 3,
          leftChild: {
            val: 3,
            leftChild: null,
            rightChild: null
          },
          rightChild: {
            val: 3,
            leftChild: null,
            rightChild: null
          }
        },
        rightChild: {
          val: 3,
          leftChild: {
            val: 3,
            leftChild: null,
            rightChild: null
          },
          rightChild: {
            val: 3,
            leftChild: null,
            rightChild: null
          }
        }
      },
      rightChild: {
        val: 3,
        leftChild: {
          val: 3,
          leftChild: {
            val: 3,
            leftChild: null,
            rightChild: null
          },
          rightChild: {
            val: 3,
            leftChild: null,
            rightChild: null
          }
        },
        rightChild: {
          val: 3,
          leftChild: {
            val: 3,
            leftChild: null,
            rightChild: null
          },
          rightChild: {
            val: 3,
            leftChild: null,
            rightChild: null
          }
        }
      }
    }
  }
};

// Get depth of tree from yunsuk 2019.12.28

let num = 0;
let num_edge = 1;

function find_depth(node) {
  let a = 0;
  if (node.leftChild == null && node.rightChild == null) {
    return a;
  }
  if (node.leftChild == null) {
    return 1 + find_depth(node.rightChild);
  } else if (node.rightChild == null) {
    return 1 + find_depth(node.leftChild);
  } else {
    return Math.max(
      1 + find_depth(node.leftChild),
      1 + find_depth(node.rightChild)
    );
  }
}

let rootDepth = find_depth(var1.root);

// drawNode function by minusmo

const initX = 50;
const initY = 100;
let n = "n";
let e = "e";
let parentId;
let idNCount = 0;
let idECount = 0;
let initSize = 4;

function drawNode(x, y, node, initDepth = 0, node_size) {
  idNCount++;
  let nId = n + idNCount;

  if (node.val !== null) {
    let newNode = new Node(x, y, nId, String(node.val), node_size);
    console.log(newNode);
    g.nodes.push(newNode);
  }

  let newDepth = Math.pow(2, rootDepth - initDepth - 3);

  if (node.leftChild !== null) {
    idECount++;
    let eId = e + idECount;

    let newLine = new Line(nId, n + (idNCount + 1), eId);
    console.log(newLine);
    g.edges.push(newLine);
    let nodeSize = node_size * 0.5;
    drawNode(x - newDepth, y + 1, node.leftChild, initDepth + 1, nodeSize);
  }

  parentId = nId;

  if (node.rightChild !== null) {
    idECount++;
    let eId = e + idECount;

    let newLine = new Line(parentId, n + (idNCount + 1), eId);
    console.log(newLine);
    g.edges.push(newLine);
    let nodeSize = node_size * 0.5;
    drawNode(x + newDepth, y + 1, node.rightChild, initDepth + 1, nodeSize);
  }

  return;
}

const init = () => {
  if (var1.root) {
    drawNode(initX, initY, var1.root, 0, initSize);

    const s = new sigma({
      graph: g,
      renderer: {
        container: document.getElementById("canvas"),
        type: "canvas"
      },
      settings: {
        autoRescale: true,
        scalingMode: "inside",
        sideMargin: 1,
        borderSize: 1,
        minNodeSize: 10,
        maxNodeSize: 20,
        minEdgeSize: 1,
        maxEdgeSize: 2,
        zoomMin: 1,
        zoomMax: 10,
        enableEdgeHovering: true,
        labelSize: "proportional",
        labelSizeRatio: 2,
        edgeHoverExtremities: true
      }
    });

    s.bind("overEdges", event => {
      console.log(event.data.edges[0]);
    });

    const gutter = document.querySelector(".gutter");
    gutter.addEventListener("mouseup", () => {
      s.refresh();
    });

    const canvas = document.getElementById("canvas");
    canvas.addEventListener("resize", () => {
      s.refresh();
    });
  }
};

init();
