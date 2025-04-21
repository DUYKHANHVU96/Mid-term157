// Bài 1: Viết chương trình thêm một phần tử vào giữa mảng
// let names = ["Alice", "Bob", "Charlie", "David", "Eve"];
// for(let i=names.length-1;i>=3;i--){
//     names[i+1]=names[i];
// }
// names[3]="Mindx";
// console.log(names);


// bài2 xóa phần tử thứ 3 trong mảng
// let names = ["Alice", "Bob", "Charlie", "David", "Eve"];
// for (let i = 2; i < names.length - 1; i++){

//     names[i]=names[i+1];
// }
// names.length-=1;
// console.log(names);

// bài 3 in ra từng phần tử trong mảng
// let names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

// bài 4 thêm phần tử vào cuối mảng
// let names = ["Alice", "Bob", "Charlie", "David"];
// let i ="Mindx";
// names[names.length]=i;
// // giải thích length trong js là thuộc tính của mảng, nó trả về số lượng phần tử trong mảng.
// // vì vậy khi gán giá trị cho length thì nó sẽ tự động thêm phần tử vào cuối mảng 
// console.log(names);


// bài 5 in ra số lẻ trong mảng
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0)
//         // % là toán tử chia lấy dư, nếu số chia cho 2 mà không có dư thì nó là số chẵn, ngược lại là số lẻ, ! là toán tử phủ định, nó sẽ đảo ngược giá trị của biểu thức
//         console.log(numbers[i]);
// }


// bài 6 thay thế phần tử thứ 3 trong mảng
// let names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
// names="David";
// console.log(names);


// bài 7 Đếm Số Lần Xuất Hiện của một số trong Mảng
// let numbers = [1, 2, 3, 4, 2, 1, 3, 2, 4, 2];
// for (let i = 0; i < numbers.length; i++) {
//     let count = 0;
//     for (let j = 0; j < numbers.length; j++) {
//         if (numbers[i] === numbers[j]) {
//             count++;
//         }
//     }
//     console.log(`Số ${numbers[i]} xuất hiện ${count} lần`);
// }

// // giải thích cụ thể từng phần trong đoạn code trên:
// // 1. Tạo một mảng numbers chứa các số nguyên.
// // 2. Sử dụng vòng lặp for để duyệt qua từng phần tử trong mảng numbers.
// // 3. Khởi tạo biến count để đếm số lần xuất hiện của phần tử hiện tại trong mảng.
// // 4. Sử dụng một vòng lặp for lồng nhau để duyệt qua tất cả các phần tử trong mảng numbers.
// // 5. So sánh phần tử hiện tại (numbers[i]) với từng phần tử trong mảng (numbers[j]).
// // 6. Nếu hai phần tử bằng nhau, tăng biến count lên 1.
// // 7. Cuối cùng, in ra số lần xuất hiện của phần tử hiện tại trong mảng bằng cách sử dụng console.log


// bài 8 tìm số lớn nhất trong mảng
// let numbers = [5, 2, 9, 3, 7, 11, 8];
// solonnhat=numbers[0];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > solonnhat) {
//         solonnhat = numbers[i];
//     }
// }
// console.log("Số lớn nhất trong mảng là: ", solonnhat);

// // giải thích cụ thể từng phần trong đoạn code trên:
// // 1. Tạo một mảng numbers chứa các số nguyên.
// // 2. Khởi tạo biến solonnhat với giá trị là phần tử đầu tiên trong mảng numbers.
// // 3. Sử dụng vòng lặp for để duyệt qua từng phần tử trong mảng numbers.
// // 4. So sánh phần tử hiện tại (numbers[i]) với biến solonnhat.
// // 5. Nếu phần tử hiện tại lớn hơn solonnhat, cập nhật giá trị của solonnhat bằng phần tử hiện tại.
// // 6. Cuối cùng, in ra số lớn nhất trong mảng bằng cách sử dụng console.log
// // 7. Kết quả sẽ là số lớn nhất trong mảng numbers.


//bài 9 đảo ngược mảng
// let names = [1, 2, 3, 4, 5];
// let reversed1 = [...names].reverse();
// console.log("reverse():", reversed1);


// bài 10 tìm số trùng lặp trong mảng
const duplicatesArray = [1, 2, 2, 3, 4, 4, 5];
const duplicates = [];
const seen = new Set();
for (const num of duplicatesArray) {
    if (seen.has(num)) {
        duplicates.push(num);
    } else {
        seen.add(num);
    }
}
console.log("Số trùng lặp trong mảng là:", duplicates);

// bài 11: tổng các phần tử trong mảng
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }
// console.log("Tổng các phần tử trong mảng là:", sum);