const arr = ['a', 'b', 'c', 'd', 'e'];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// const res = arr.forEach((item, index, array) => {
//   console.log(item, index, array);
// })
// console.log(res); // undefined


const res = arr.map((item, index, array) => {
  return item + 1  // 'a1'
})
console.log(res, arr);
