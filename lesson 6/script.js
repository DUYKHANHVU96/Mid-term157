// let chieudai = 5;
// let chieurong = 10;
// let chuvi = (chieudai + chieurong) * 2;
// let dientich = chieudai * chieurong;
// console.log("Chu vi:", chuvi);
// let result= 'dien tich hinh chu nhat la' ${chieudai} * {chieurong} = ${dientich};
// console.log(result);


// let S = prompt("Nhap so");
// let gio=(S - S%3600)/3600;
// let phut=((S %3600)-(S % 3600) % 60)/60;
// let giay=S - phut*60-gio*3600;
// console.log(gio + " gio " + phut + " phut " + giay + " giay ");


// let luythua = prompt("Nhap so");
// luythua = parseInt(luythua);
// let coSo = prompt("Nhap so");
// coSo = parseInt(coSo);
// let ketQua = Math.pow(coSo, luythua);
// console.log("Ket qua la: ", ketQua);


// let a =parseInt(prompt("Nhap so a"));
// let b = prompt("Nhap so b");
// let c = prompt("Nhap so c");
// const avg = (a + b + c) / 3;
// console.log("Trung binh cong la: ", avg);


// bài 5:
// ý nghĩa của parseInt là chuyển đổi kiểu dữ liệu từ string sang int
// int là kiểu dữ liệu số nguyên, prompt trả về kiểu string
// let x1=prompt("Nhap x1");
// x1=parseInt(x1);
// let y1=prompt("Nhap y1");
// y1=parseInt(y1);
// let x2=prompt("Nhap x2");
// x2=parseInt(x2);
// let y2=prompt("Nhap y2");
// y2=parseInt(y2);
// let distance = Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
// // math.sqrt là hàm tính căn bậc 2
// // Math.pow là hàm tính lũy thừa
// console.log("Khoang cach giua 2 diem la: ", distance);


// bài 6:
// let a = parseInt(prompt("Nhap so a"));
// let b = parseInt(prompt("Nhap so b"));
// let c = parseInt(prompt("Nhap so c"));
// let max= Math.max(a,b,c);
// console.log("So lon nhat la: ", max==a);


// bai 7
// let a =prompt("Nhap so");
// let b =prompt("Nhap so");
// let equal = a===b;
// // equal nghĩa là so sánh 2 biến a và b với nhau, nếu giống nhau thì trả về true, ngược lại là false
// // === là toán tử so sánh, nó sẽ so sánh cả kiểu dữ liệu và giá trị của 2 biến với nhau
// console.log("a bang b: ", equal);


// bai 8
let a = parseInt(prompt("Nhap so a"));
let isInteger = Number.isInteger(a>0);
// Number.isInteger là hàm kiểm tra xem giá trị truyền vào có phải là số nguyên hay không
// a>0 là điều kiện kiểm tra xem a có lớn hơn 0 hay không
console.log("a la so nguyen duong: ", isInteger);

// bai 9



