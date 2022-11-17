

const arr = [];
let srt;
do {
    srt = prompt('Num ?');
    const num = parseInt(srt);
    if (!isNaN(num)) {
        arr.push(num);
    }
} while (srt);
for (let j = 0; j < arr.length; j ++) {
    for (let i = 0; i < arr.length - 1; i++) {

        if (arr[i] > arr[i + 1]) {
            let temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
        }
    }
}
console.log(arr);

arr.splice(1,4);
console.log(arr);


