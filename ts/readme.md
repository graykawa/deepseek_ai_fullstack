# TypeScript
1. 静态类型：声明一个变量要同时指定它的类型
2. 自带类型推断：当变量被赋值时，TS 会根据等号右边的类型推断变量的类型

## 类型
- any 任意类型
- unknown 未知类型
- never 永远不存在的值的类型

- string 字符串    String (当你将一个变量声明为 String，该变量即可以是字面量也可以是字符串对象)
- number 数字    Number
- boolean 布尔值    Boolean
- bigint 大整数    BigInt
- symbol 符号    Symbol
- undefined 未定义  
- null 空值

- Object  广义对象类型 约等于 any
- object  狭义对象类型 只包含 对象， 数组， 函数

- 值类型 

- type 类型别名
- interface 接口 （对象类型）
