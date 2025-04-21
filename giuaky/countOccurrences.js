// Mảng số cho trước
let numbers = [1, 2, 3, 4, 2, 1, 3, 2, 4, 2];

// Hàm đếm số lần xuất hiện của một số trong mảng
function countOccurrences(arr) {
    // Tạo một đối tượng để lưu kết quả
    let count = {};
    
    // Duyệt qua từng phần tử trong mảng
    for (let num of arr) {
        // Nếu số đã tồn tại trong đối tượng count, tăng giá trị lên 1
        // Nếu chưa tồn tại, gán giá trị 1
        count[num] = (count[num] || 0) + 1;
    }
    
    return count;
}

// Gọi hàm và in kết quả
let result = countOccurrences(numbers);
console.log("Số lần xuất hiện của các số trong mảng:");
for (let num in result) {
    console.log(`Số ${num} xuất hiện ${result[num]} lần`);
} 