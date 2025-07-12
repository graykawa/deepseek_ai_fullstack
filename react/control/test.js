function foo() {
  return new Promise(reslove => {
    setTimeout(() => {
      console.log('foo ok');
      reslove(123)
    }, 2000)
  })
}

function bar() {
  console.log('bar ok');
}

foo().then((res) => {
  bar()
  console.log(res, '---');
})