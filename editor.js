const upperOne = document.getElementById("upper");
const desc = document.getElementsByClassName("description");

const upperCode = CodeMirror(upperOne, {
  value: "def function():",
  mode: {
    name: "python",
    version: 3,
    singleLineStringErrors: false,
    hangingIndent: 4
  },
  lineNumbers: true,
  indentUnit: 4,
  matchBrackets: true,
  styleActiveLine: true,
  smartIndent: true,
  theme: "monokai",
  cursorBlinkRate: 0,
  coverGutterNextToScrollbar: true
});

upperCode.options.readOnly = true;

let upDescHeight = desc[0].offsetHeight;
let upHeight = upperOne.offsetHeight;
let upCodeHeight = upHeight - upDescHeight;

upperCode.setSize(null, upCodeHeight + "px");

const lowerOne = document.getElementById("lower");

const lowerCode = CodeMirror(lowerOne, {
  value: "def function():",
  mode: {
    name: "python",
    version: 3,
    singleLineStringErrors: false,
    hangingIndent: 4
  },
  lineNumbers: true,
  indentUnit: 4,
  matchBrackets: true,
  styleActiveLine: true,
  smartIndent: true,
  theme: "monokai",
  lineNumbers: true,
  lint: true,
  gutters: ["CodeMirror-lint-markers"]
});

let loDescHeight = desc[1].offsetHeight;
let loHeight = lowerOne.offsetHeight;
let loCodeHeight = loHeight - loDescHeight;

lowerCode.setSize(null, loCodeHeight + "px");

let canvas = document.getElementById("canvas");
let canHeight = canvas.offsetHeight;
let halfCanHieght = canHeight / 2;
