let square = document.querySelector(".square");
let area = document.querySelector(".area");

let startInnerX;
let startInnerY;

square.addEventListener("dragstart", (ev) => {
    ev.dataTransfer.setData("squareId", ev.target.id);

    startInnerX = ev.offsetX;
    startInnerY = ev.offsetY;
})

area.addEventListener("dragover", (ev) => {
    ev.preventDefault();
})

area.addEventListener("drop", (ev) => {
    let itemId = ev.dataTransfer.getData("squareId");
    let item = document.getElementById(itemId);

    ev.target.appendChild(item);

    let offsetX = `${ev.offsetX - startInnerX}px`;
    let offsetY = `${ev.offsetY - startInnerY}px`;

    item.style.left = offsetX;
    item.style.top = offsetY;
})
