// bai 1
// let result = 0
// for (let i = 1; i <= 100; i++) {
//     result = result + 1;
// }
// console.log(result);


// bai 2
// for (let i = 0; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log(i);
//     }
// }


// bai 3
// let n = 5;
// let result =1;
// for (let i = 2; i <= n; i++) {
//     result = result * i;
// }
// console.log(result);


// bai 4
// for (let i = 2; i < 10; i++) {
//     for (let j = 1; j < 10; j++) {
//         console.log(`${i} x ${j} = ${i*j}`);
//     }
//     console.log("=====");
// }


// bai 5
// let number = parseInt(prompt("Nhap so a"));
// let binary = "";
// while (number > 0) {
//     binary = (number % 2) + binary;
//     number = Math.floor(number / 2);
// }
// console.log(binary);


// bai 6
// let n = parseInt(prompt("Nhập số nguyên dương n:"));
// if (isNaN(n)) {
//     alert("Vui lòng nhập một số hợp lệ!");
// } else {
//     let ketQua = tinhTongCan(n);
//     if (typeof ketQua === "string") {
//         alert(ketQua);
//     } else {
//         alert(`Kết quả với n = ${n} là: ${ketQua}`);
//     }
// }
// function tinhTongCan(n) {
//     if (n <= 0) {
//         return "Vui lòng nhập một số nguyên dương lớn hơn 0!";
//     }
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += Math.sqrt(i);
//     }
//     return sum;
// }

// bai 7
function tinhCanBacHai(n) {
    if (n <= 0) {
        return "n phải là số nguyên dương";
    }

    let ketQua = n;
    for (let i = n - 1; i >= 1; i--) {
        ketQua = Math.sqrt(i + ketQua);
    }

    return ketQua;
}
let n = parseInt(prompt("Nhập số nguyên dương n:"));
if (isNaN(n)) {
    alert("Vui lòng nhập một số hợp lệ!");
} else {
    let ketQua = tinhCanBacHai(n);
    if (typeof ketQua === "string") {
        alert(ketQua);
    } else {
        alert(`Kết quả với n = ${n} là: ${ketQua}`);
    }
}













