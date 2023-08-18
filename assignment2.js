function merge(a = [], b = [], c = []) {
    let i = (j = k = 0);
    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            c[k] = a[i];
            i++;
            k++;
        } else {
            c[k] = b[j];
            j++;
            k++;
        }
    }
    for (; i < a.length; i++) {
        c[k] = a[i];
        k++;
    }
    for (; j < b.length; j++) {
        c[k] = b[j];
        k++;
    }

    return c;
}
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let mid = ~~(arr.length / 2);

    return merge(
        mergeSort(arr.slice(0, mid)),
        mergeSort(arr.slice(mid, arr.length))
    );
}
