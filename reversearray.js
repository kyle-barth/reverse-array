arr = ['x', 'y', 'z'];
arrR = [];
x = arr.length;
for (var i = 0; i < arr.length; i++) {
  arrR[i] = arr[--x];
}
console.log(arrR.toString());
