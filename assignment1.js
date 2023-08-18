function fibs(num) {
    let arr = [0, 1];
    if (num === 0) return [];
    if (num === 1) return [0];
    for (let i = 2; i < num; i++) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }

    return arr;
}
function fibsRec(num, arr = [0, 1]) {
    if (num === 0) return [];
    if (num === 1) return [0];
    if (arr.length < num) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        return fibsRec(num, arr);
    }

    return arr;
}
console.log(fibsRec(8));
