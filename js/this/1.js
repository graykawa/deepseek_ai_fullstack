// 需要给speek 和 identify 显示传入一个上下文对象

// function identify(context) {
//   return context.name.toUpperCase()
// }

// function speek(context) {
//   var greeting = 'hello, I am ' + identify(context)
//   console.log(greeting);
// }

// var me = {
//   name: 'Tom'
// }
// speek(me)     





function identify() {
  return this.name.toUpperCase()
}

function speek() {
  var greeting = 'hello, I am ' + identify.call(this)
  console.log(greeting);
}

var me = {
  name: 'Tom'
}
speek.call(me)   