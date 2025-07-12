const arr = [1, 2, 3]

const newArr = arr.map((item, index, arr) => {
  return `<li key=${item}>${item}</li>`
})

console.log(newArr);


