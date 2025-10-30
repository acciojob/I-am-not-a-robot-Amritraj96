//your code here
const images = ["img1", "img2", "img3", "img4", "img5"];
let duplicate = images[Math.floor(Math.random() * images.length)];
let imgSet = [...images, duplicate];

imgSet = imgSet.sort(() => Math.random() - 0.5);

const container = document.getElementById("image-container");
const resetBtn = document.getElementById("reset");
const verifyBtn = document.getElementById("verify");
const msg = document.getElementById("h");
const para = document.getElementById("para");

let selected = [];

imgSet.forEach(cls => {
  let img = document.createElement("img");
  img.className = cls;

  img.addEventListener("click", () => {
    if (selected.length < 2 && !img.classList.contains("selected")) {
      img.classList.add("selected");
      selected.push(cls);

      resetBtn.style.display = "inline";

      if (selected.length === 2) {
        verifyBtn.style.display = "inline";
      }
    }
  });

  container.appendChild(img);
});

resetBtn.addEventListener("click", () => {
  selected = [];
  para.textContent = "";
  verifyBtn.style.display = "none";
  resetBtn.style.display = "none";
  document.querySelectorAll("img").forEach(i => i.classList.remove("selected"));
  msg.textContent = "Please click on the identical tiles to verify that you are not a robot.";
});

verifyBtn.addEventListener("click", () => {
  verifyBtn.style.display = "none";
  if (selected[0] === selected[1]) {
    para.textContent = "You are a human. Congratulations!";
  } else {
    para.textContent = "We can't verify you as a human. You selected the non-identical tiles.";
  }
});
