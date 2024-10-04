const arr1 = [3, 10, 11, 12, 2, 30]
var min;
for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr1.length; j++) {
        if (arr1[i] > arr1[j]) {
            min = arr1[j]
        }
    }
}
console.log(min)
