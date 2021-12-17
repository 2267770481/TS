// 类
/* 基本定义，类的继承，公共(public)、私有(private)、受保护(protected)修饰符， 
   readonly修饰符，静态属性，存取器，抽象类*/
(()=>{
  console.log('这是04的代码...---类')
  // 基本定义
  class myClass1 {
    public name: string   // 属性默认都是public修饰 可不用专门写
    private age: number  // 私有属性只能在类内部使用 无法在实例对象和子类中使用
    protected address: string  // 受保护属性可以在类内部和子类中使用，无法在实力对象中使用
    readonly idCard: string  // 只读属性 在实例化的时候赋值之后就不能在修改了
    gender?:number    // 可选属性
    isStudent?: boolean

    constructor(name:string, age:number, address:string, idCard:string, gender:number, isStudent:boolean) {
      this.name = name
      this.age = age
      this.address = address
      this.idCard = idCard
      this.gender = gender
      this.isStudent = isStudent
    }

    getInfo():string {
      return `我的名字是${this.name},我的年龄是${this.age}, 我的住址是${this.address}, 我的身份证号是${this.idCard},
      我的性别是${this.gender}, 我的是否是学生${this.isStudent}`
    }
  }

  const clsTmp1 = new myClass1('zhangsan', 12, 'baijin', '11243x', 0, false)
  console.log(clsTmp1.getInfo())

  // 上边的类还可以定义成下边这样
  /* 在构造器中直接使用参数属性 */
  class myClass2 {
    constructor(public name:string, private age:number, protected address:string, 
      readonly idCard:string, public gender?:number, public isStudent?:boolean){
    }

    getInfo():string {
      return `我的名字是${this.name},我的年龄是${this.age}, 我的住址是${this.address}, 我的身份证号是${this.idCard},
      我的性别是${this.gender}, 我的是否是学生${this.isStudent}`
    }
  }
  
  const clsTmp2 = new myClass2('zhangsan', 12, 'baijin', '11243x', 0, false)
  console.log(clsTmp2.getInfo())

  // 继承
  /* 在子类中没法访问父类的private属性, 但可以访问protected属性 */
  class myClass3 extends myClass2 {
    constructor(public name:string, age:number, address:string, 
       idCard:string, public gender?:number, public isStudent?:boolean, public remark?:string){
        super(name, age, address, idCard, gender, isStudent)
    }
    
    getRemark():string|undefined{
      return this.remark + '_' + this.address
    }

  }

  const clsTmp3 = new myClass3('zhangsan', 12, 'baijin', '11243x', 0, false, '我是子类3中的remark')
  console.log(clsTmp3.getInfo())
  console.log(clsTmp3.getRemark())

  // 静态属性 存取器
  /* 静态属性只能通过类名去访问，不能用实例对象去访问 
     通过使用getter和setter来控制对类成员的访问*/
  class myClass4 {
    name: string 
    static group = 'human'  // 静态属性
    constructor(name:string){
      this.name = name
    }

    get info(){
      return '你的名字是' + this.name
    }

    set info(val:string) {
      console.log('你真在修改你的名字')
      this.name = val
    }
  }
  
  const clsTmp4 = new myClass4('张三')
  console.log(clsTmp4.name, myClass4.group, clsTmp4.info)
  clsTmp4.info = '罗翔'
  console.log(clsTmp4)
  
  // 抽象类
  /* 用abstract关键字申明，不仅能申明抽象类还可以在抽象类中申明抽象方法
     抽象类不能被实例化，只能被继承*/
  abstract class myAbsCls {
    constructor(public name:string) { 
    }
    eat(){
      console.log('正在吃...')
    }
    abstract run():void   // 抽象方法 必须要在子类中实现
  }

  class myClass5 extends myAbsCls{
    constructor(name:string, public age: number){
      super(name)
    }
    run(): void {
        console.log('我正在跑步...')
    }
    sleep(){
      console.log('我正在睡觉...')
    }
  }

  const clsTmp5 = new myClass5('zhangsan', 12)
  console.log('clsTmp5的输出如下...')
  console.log('名字:'+clsTmp5.name, clsTmp5.age, clsTmp5.run(), clsTmp5.eat(),clsTmp5.sleep())

})()