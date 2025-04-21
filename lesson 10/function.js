// function countTo100() {
//     // code đc thực thi khi hàm này đc gọi
//     for (let i=0; i <= 100; i++) {
//         console.log(i);
//     }
// }
// countTo100();

// // hàm tính chu vi hình chữ nhật
// const width=10;
// const height=15;
// function chuvihinhchunhat(){
//     const result =(width+height)*2;
//     console.log(result);
// }
// chuvihinhchunhat();


//arrow function
// const paramReg = (width, height) => {
//     return (width + height) * 2;
// };
// console.log(paramReg(25, 2));

//hàm nhận đầu vào tên người dùng sau đó hello ng đó
// const say = userName => {
//     return 'xin chào bạn ${userName}';
// };
// console.log(say("khánh đẹp zai"));


//bài 1
// A = 3, 
// B = 4, 
// x = 5
// function phuongtrinhbacnhat(x){
// return A*x+B;
// }
// console.log(phuongtrinhbacnhat(5));


// //bài 2 (chu vi hình chữ nhật)


// //bài 3
// const r = 5;
// function dientichhinhtron(r) {
//     return Math.PI * r * r;
// }
// console.log(dientichhinhtron(r));

// //bài 4
// function isPrime(n) {
//     if (n <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) return false;
//     }
//     return true;
// }
// console.log(isPrime(17));

// //bài 5
// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }
// console.log(sum(1, 2, 3, 4, 5));

//bài 6
// function Sum(start,end){
//     //cần đk
//     // tham số truyển vào là số
//     //start < end
//     if( start <= end)
// }


//bài 7
// const str = "madam";
// function isPalindrome(str) {

//   const length = str.length;
//   for (let i = 0; i < Math.floor(length / 2); i++) {
//     if (str[i] !== str[length - 1 - i]) {
//       return false; // Nếu không giống nhau, không phải Palindrome
//     }
//   }

//   return true; // Nếu duyệt hết mà không có sự khác biệt, là Palindrome
// }
// const str1 = "madam";
// console.log(isPalindrome(str1));


// bài 8 Viết một hàm kiểm tra tất cả các số trong một mảng có phải là số chẵn hay không
// n=[2, 4, 6, 8, 10];
// function areAllEven(numbers) {
//     return numbers.every(num => num % 2 === 0);
// }
// console.log(areAllEven(n));


//bài 9 Viết hàm tính tổng của một mảng số, nhưng bỏ qua tất cả số âm
// function SUM(n) {
//     let sum = 0; 
//     for (let i = 0; i < n.length; i++) {
//         if (n[i] >= 0) { 
//             sum += n[i];
//         }
//     }
//     return sum;
// }
// let n = [3, -1, 4, -2, 5];
// console.log(SUM(n)); 


//bài 10
// function maxnumber(...numbers){
//     return Math.max(...numbers);
// }
// console.log (maxnumber(1, 3, 7, 0, -2));


