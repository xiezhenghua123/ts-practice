
// 联合类型的遍历，利用三元表达式，所有的类型都会遍历一遍
type MyExclude<T, U> = T extends U ? never : T

type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'