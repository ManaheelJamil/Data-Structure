const arr1 = [80, 170, 11, 12, 3, 50]
var max;
for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr1.length; j++) {
        if (arr1[i] < arr1[j]) {
            max = arr1[j]
        }
    }
}
console.log(max)

