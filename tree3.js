const svg = SVG()
  .addTo("#svg-container")
  .size(500, 500);

let x = 250;
let y = 25;
let radius = 25;
svg
  .circle(radius * 2)
  .fill("#f66")
  .move(250, 0);

let line1 = svg
  .line(x + radius, y + radius, x + radius - 100, y + 100)
  .stroke({ width: 3, color: "#000" });
let line2 = svg
  .line(x + radius, y + radius, x + radius + 100, y + 100)
  .stroke({ width: 3, color: "#000" });
// let path = svg.path("M250 50 350 100 z");              
// path.stroke({ color: "#000", width: 3 });


