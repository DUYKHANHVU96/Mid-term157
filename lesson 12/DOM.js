//bai 1&2
// const h1Dom = document.querySelector('.titleH1');
// console.dir(h1Dom)
// h1Dom.innerText = "Đây là nội dung"//1

// h1Dom.style.color = "blue"//2

//bai 3
const titleH1 = document.querySelector('.titleH1');
const btnClick = document.querySelector("#btnClick");

let isStyle = false;
btnClick.addEventListener("click", () => {
    if (isStyle) {
        titleH1.style.color = "black";
        titleH1.style.backgroundColor = "white";
        isStyle = false;
    } else {
        titleH1.style.color = "blue";
        titleH1.style.backgroundColor = "yellow";

        isStyle = true;
    }
});




