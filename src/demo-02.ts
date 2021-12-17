// ts 数据类型练习
// 有布尔、数字、字符串、数组、元组、枚举、any、void
(() => {
	console.log('这是demo-02中的内容--数据类型...')
	// 字符串类型
	const name = 'ts'

	// 数值型 浮点数和整数都用number表示
	const age = 12;

	// 布尔型
	const isStudent = false;

	// 数组 ** 元素只能是相同的类型 有两种定义方式
	const aAble1: string[] = ['c', 'python']
	const aAble2: Array<number> = [3, 2]

	// 元组 ** 元素可以有不同类型，元素类型与元素个数要一一对应
	const tAble: [string, number, boolean] = ['c', 3, false]

	// 枚举
	enum colorType {
		red,
		green,
		blue
	}

	const myColor:colorType = colorType.red

	// any 和 void 
	// 对于不知道是什么类型的数据使用any定义 void 是无返回
	let anyTmp: any = 4
	anyTmp = '333'

	// object *** 非基础类型
	const objTmp = new String('abc')

	// 联合类型 *** 表示多个类型中某一个
	let uTmp: string|number = 'abc'
	uTmp = 3

	// 类型断言
	/* 
	通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，
	但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 TypeScript 会假设你，程序员，
	已经进行了必须的检查。
	有两种写法：
		1. (<类型>值)
		2. (值 as 类型)
	*/
	function getInfo(value:string|number) {
		if ((value as string)) {
			return (<string>value).length
		}else{
			return value
		}
	}

	function printFunc(name:string, age:number, isStudent:boolean, 
		aAble1:string[], aAble2:number[], tAble:[string, number, boolean]):void {
			console.log(`我叫${name}, 我今年${age}岁了， 我不是学生${isStudent}, 我有用的技能用ts的元组表示是${tAble}, 
			用数组表示是${aAble1}或者${aAble2}，枚举值${myColor}, any的值${anyTmp}, object类型${objTmp}, 联合类型${uTmp}, 类型断言${getInfo('abnc')}`)
		}
	
		printFunc(name, age, isStudent, aAble1, aAble2, tAble)

})()
