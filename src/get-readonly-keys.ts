interface Todo {
 readonly title: string
 readonly description: string
 completed: boolean
 readonly abc: boolean
}


// Q: equal类型定义作用是什么？
// A: equal类型定义的作用是判断两个类型是否相等，如果相等返回true，否则返回false
type equal<X, Y> = (<T>() => T extends X ? 1 : 2 ) extends <T>() => T extends Y ? 1 : 2 ? true : false

// Q: {[K in keyof T]: T[K]}[keyof T] 和 keyof T 有什么区别？
// A: {[K in keyof T]: T[K]}[keyof T] 是T的所有属性的值的联合类型，keyof T 是T的所有属性的联合类型
type GetReadonlyKeys<T> =  { [K in keyof T]: equal<{ readonly [P in K]: T[K] }, { [P in K]: T[K] }> extends true ? K : never }[keyof T]

type Keys = GetReadonlyKeys<Todo> // expected to be "title" | "description"


export {}