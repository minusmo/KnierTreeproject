let minCanSize = (window.innerWidth * 30) / 100;
let viewHeight = window.innerHeight;
let upRatio;
let lowRatio;

Split(["#codeBox", "#canvas"], {
  gutterSize: 5,
  sizes: [50, 50],
  minSize: [300, 300]
});

Split(["#upper", "#lower"], {
  gutterSize: 10,
  sizes: [50, 50],
  direction: "vertical",
  minSize: [100, 100],
  onDragStart: e => {
    console.log(e);
  },
  onDragEnd: e => {
    console.log(e);

    upRatio = e[0];
    lowRatio = e[1];

    let upHeight = (upRatio * viewHeight) / 100;
    let lowHeight = (lowRatio * viewHeight) / 100;

    let upCmHeight = upHeight - desc[0].offsetHeight;
    let loCmHeight = lowHeight - desc[1].offsetHeight;

    upperCode.setSize(null, upCmHeight);
    lowerCode.setSize(null, loCmHeight);
  }
});
