const config = {
  colors: ["#fcd34d", "#84cc16", "#2dd4bf", "#38bdf8", "#818cf8", "#f43f5e"],
};

let count = 0;

for (let i = 0; i < 1500; i++) {
  const box = document.querySelector("#box");
  const boxWrapper = document.querySelector(".box-wrapper");

  const newBox = document.createElement("span");
  newBox.className = "box";
  console.log("hi");

  boxWrapper.appendChild(newBox);
  const color = config.colors[count++ % config.colors.length];
  console.log(color);
  newBox.addEventListener("mouseover", (e) => {
    newBox.style.backgroundColor = color;
  });

  newBox.addEventListener("mouseleave", (e) => {
    newBox.animate(resetColors, {
      duration: 2000,
      iterations: 1,
      fill: "forwards",
    });
  });

  const resetColors = [
    {
      backgroundColor: color,
    },
    {
      backgroundColor: "transparent",
    },
  ];
}
