// 泛型
/* 定义接口 函数 类的时候不指定使用某种类型，在使用的时候去指定类型 */
(() => {
  console.log('代码06...--泛型')
  // 泛型函数
  function getArry1<T>(val: T, count: number) {
    const tmp: Array<T> = []
    for (let i = 0; i < count; i++) {
      tmp.push(val)
    }
    return tmp
  }

  console.log(getArry1<string>('zhangsan', 3))

  // 泛型函数 -- 使用多个泛型参数(泛型变量可以随便起名字，这里用了K V)
  function getArry2<K, V>(key: K, val: V) {
    return `{${key}: ${val}}`
  }

  console.log('泛型函数--多个泛型参数...')
  console.log(getArry2<string, number>('age', 23), getArry2<string, string>('name', '张三'))

  // 泛型接口
  interface myInter<T> {
    data: T[]
    setNode(qury: T): string
    getNode(id: number): T
  }

  class baseUser {
    id: number
    name: string
    age?: number
    constructor(id: number, name: string, age?: number) {
      this.id = id
      this.name = name
      this.age = age
    }
  }

  class myUser implements myInter<baseUser> {
    data: baseUser[] = []
    getNode(id: number): baseUser {
      return this.data[id]
    }
    setNode(obj: baseUser) {
      this.data.push(obj)
      return 'ok'
    }
  }

  const tmp = new myUser()
  tmp.setNode(new baseUser(1, 'zhangsan', 12))
  tmp.setNode(new baseUser(2, 'luoxiang'))
  console.log('泛型接口...')
  console.log('第1个节点：', tmp.getNode(1))
  console.log('节点池：', tmp.data)

  // 泛型类
  class myCls<T>{
    baseValue: T
    constructor(baseValue:T){
      this.baseValue = baseValue
    }
    add(x: T) {
      return x + "+" + this.baseValue
    }
  }

  const tmpCls1 = new myCls<string>('abc')
  console.log('类泛型...')
  console.log(tmpCls1.add('ffg'))
  const tmpCls2 = new myCls<number>(1)
  console.log(tmpCls2.add(2))

  // 泛型约束
  /* 直接泛型参数使用length会报错，因为泛型没有这个属性 可以对泛型参数进行约束，先定义一个有该属性的接口，然后对
  泛型使用txtends进行约束 
     在使用传参是的时候，必须要传入有length属性的参数，比如字符串， 不能用数字 */
  interface myInter2 {
    length: number;
  }
  function myFunc3<T extends myInter2>(x:T):void{
    console.log('x.length :>> ', x.length);
  }
  console.log('泛型约束...')
  myFunc3('abc')
  //myFunc3(33) // 这个会报错

})()