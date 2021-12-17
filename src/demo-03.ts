// 接口
/* 接口修饰变量 接口修饰函数 接口修饰类 以及接口继承接口 */
(() => {
    console.log('这里是03的代码---接口...')

    // 使用接口定义数据对象
    interface iInfo {
        name: string
        readonly number: string   // readonly 表示该字段只读
        age: number
        gender?: boolean   // ? 表示 该字段可有可无
    }

    const myInfo: iInfo = {
        name: '一枚码农',
        number: '223321343',
        age: 13
    }

    function print(value: iInfo) {
        console.log(`你的名字是${value.name}, 你的证件号是${value.number}, 你的年龄是${value.age}, 你的性别是${value.gender}`)
    }
    print(myInfo)

    // 使用接口对函数进行约束 -- 使用赋值的形式去修饰
    /* 为了使用接口表示函数类型，我们需要给接口定义一个调用签名。它就像是一个只有参数列表和返回值类型的函数定义。
       参数列表里的每个参数都需要名字和类型。 */
    interface iFunc {
        (label: string, value: string, id: number): string  // 定义了函数的参数和返回值的类型
    }

    const myFunc: iFunc = function (label: string, value: string, id: number): string {
        return `你传入的标签是${label}， 值是${value}， id是${id}`
    }

    console.log(myFunc('姓名', '一枚码农', 3321))

    // 接口对类的约束 -- 使用 implements 修饰
    /* 在接口中定义的方法，在定义类时，必须要实现
       接口可以继承接口 使用extends
       可以使用多个接口去修饰一个类，有多个的时候用逗号分隔*/
    interface iCls1 {
        run(): string  // 定义了要在类中必须实现的方法
    }

    interface iCls2 {
        eat(val:string): string
    }

    // 继承 iCls1 接口
    interface iCls3 extends iCls1 {
        sleep(): string
    }

    class myCls implements iCls1, iCls2 {
        // name: string

        // constructor(name: string) {
        //     this.name = name
        // }

        // 被修饰后必须要实现这个run方法 不然会报错
        run(): string {
            return '我正在慢跑...'
        }
        eat(val:string): string {
            return `我正在吃${val}...`
        }
    }

    const myObj = new myCls()
    console.log(myObj.run(), myObj.eat('橘子'))

})()
