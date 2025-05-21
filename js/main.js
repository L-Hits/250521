// // 요소 노드 추가하기
// const aEl = document.createElement("a");
// document.body.appendChild(aEl);

// // 텍스트 노드 추가하기
// const txtEl = document.createTextNode("길벗");
// document.querySelector("a").appendChild(txtEl);

// // href 속성 노드 추가하기
// const hrefAttr = document.createAttribute("href");
// hrefAttr.value = "https://www.gilbut.co.kr";
// document.querySelector("a").setAttributeNode(hrefAttr);

function isDisplayToggle() {
  const pEl = document.querySelector("p");
  if (pEl.style.display === "none") {
    pEl.style.display = ""; // 보이기
  } else {
    pEl.style.display = "none"; // 숨기기
  }
}

function removeAllA() {
  const childNodes = document.body.childNodes;
  childNodes.forEach((node) => {
    if (node.nodeName === "A") node.parentNode.removeChild(node);
  });
}

function focusEvent() {
  console.log("focus on");
}
function blurEvent() {
  console.log("focus out");
}

const inputAge = document.querySelector("#age");
inputAge.addEventListener("focus", () => {
  console.log("Age focus on");
});
inputAge.addEventListener("blur", () => {
  console.log("Age focus out");
});

// inputAge.onfocus = () => {
//   console.log("Age focus on");
// };
// inputAge.onblur = () => {
//   console.log("Age focus out");
// };

const btnEl = document.querySelector("#btn");
btnEl.addEventListener("click", function() {
  if(this.style.backgroundColor === "red") {
    this.style.backgroundColor = "blue";
    this.style.color = "white";
  }
  else {
    this.style.backgroundColor = "red";
  }
});
