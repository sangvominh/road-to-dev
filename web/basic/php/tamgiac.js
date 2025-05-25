let n = Number(document.getElementById("input").value)
if(!Number.isInteger(n) || n < 0){
  alert("hay nhap so nguyen duong")
}
color = ["red", "green", "blue"];

document.getElementById("btn-vuong").onclick = function () {
  let container = document.getElementById("container");
  container.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    `;
  let n = document.getElementById("input").value;
  container.innerHTML = "";
  for (let i = 0; i < n; i++) {
    let div = document.createElement("div");
    div.style.cssText = `
    height: 30px;
    width: ${(n - i) * 30}px;
    background-color: ${color[i % 3]}; 
    `;
    document.getElementById("container").appendChild(div);
  }
};

document.getElementById("btn-vuong-can").onclick = function () {
  let container = document.getElementById("container");
  container.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center;
    `;
  let n = document.getElementById("input").value;
  container.innerHTML = "";
  for (let i = n; i > 0; i--) {
    let div = document.createElement("div");
    div.style.cssText = `
        height: 30px;
        width: ${(n - i) * 30}px;
        background-color: ${color[i % 3]}; 
        `;
    document.getElementById("container").appendChild(div);
  }
};
