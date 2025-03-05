console.log("I am here!");
let viz;
const containerDiv = document.getElementById("vizContainer");
const btn = document.getElementById("btn");
const showBtn = document.getElementById("showBtn");
const exportPDF = document.getElementById("exportPDF");
const exportImage = document.getElementById("exportImage");

const url =
  "https://public.tableau.com/views/SprocketCentralAnalysisDashboard/Summary?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link";

function initViz() {
  if (viz) {
    viz.dispose(); // Remove old viz before initializing a new one
  }
  const options = {
    hideTabs: true,
    width: containerDiv.clientWidth + "px",
    height: containerDiv.clientHeight + "px",
    onFirstInteractive: function () {
      console.log("Dashboard is interactive!");
    },
  };
  viz = new tableau.Viz(containerDiv, url, options);
}

// Ensure it re-renders on window resize
window.addEventListener("resize", function () {
  initViz();
});

document.addEventListener("DOMContentLoaded", initViz);

//
