// Mảng ban đầu
let names = [1, 2, 3, 4, 5];

// Cách 1: Sử dụng phương thức reverse()
let reversed1 = [...names].reverse();
console.log("Cách 1 - Sử dụng reverse():", reversed1);

// Cách 2: Sử dụng vòng lặp
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

let reversed2 = reverseArray(names);
console.log("Cách 2 - Sử dụng vòng lặp:", reversed2);

// Cách 3: Sử dụng reduce()
let reversed3 = names.reduce((acc, current) => [current, ...acc], []);
console.log("Cách 3 - Sử dụng reduce():", reversed3); 