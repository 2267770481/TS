// 函数
/* 基本类型 可选参数、默认参数 重载 */
(()=>{
  console.log('代码05...--函数')
  // 基本使用
  /* age是可选参数 用?号修饰 gender参数有默认值male, other是多值参数 */
  function myFunc1(name:string, age?:number, gender='male', ...other:any[]):string {
    return `你传入的名字是${name}, 年龄是${age}， 性别是${gender}, 其他参数是${other}`
  }
  console.log(myFunc1('zhangshan', 12, 'female', 'student', 'human', 233))

  // 另一种定义函数的方法
  const myFunc2 = function(name:string, age?:number, gender='male', ...other:any[]):string {
    return `你传入的名字是${name}, 年龄是${age}， 性别是${gender}, 其他参数是${other}`
  }
  console.log('func2的结果')
  console.log(myFunc2('zhangshan', 12, 'female', 'student', 'human', 233))

  // 重载
  /* 函数名相同, 而形参不同的多个函数 */
  
  // -- 1.申明重载函数
  function myFunc(name: string, age:number):string
  function myFunc(name:string, addr:string):string
  // -- 2.定义重载函数
  function myFunc(name:string|number, info:number|string):string{
    return `你输入的值是：${name}---${info}`
  }
  // -- 3.使用重载函数 -使用的时候参数类型要跟重载申明时候的类型一一对应上，不能混搭
  console.log('调用一个参数是字符串一个是数值的函数', myFunc('张三', 12))
  console.log('调用两个参数都是字符串的函数', myFunc('张三', 'beijin'))

})()