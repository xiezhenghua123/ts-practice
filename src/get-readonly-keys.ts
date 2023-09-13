interface Todo {
 readonly title: string
 readonly description: string
 completed?: boolean
 readonly abc: boolean
}


// Q: equal类型定义作用是什么？
// A: equal类型定义的作用是判断两个类型是否相等，如果相等返回true，否则返回false
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2 ) extends <T>() => T extends Y ? 1 : 2 ? true : false

// Q: {[K in keyof T]: T[K]}[keyof T] 和 keyof T 有什么区别？
// A: {[K in keyof T]: T[K]}[keyof T] 是T的所有属性的值的联合类型，keyof T 是T的所有属性的联合类型
type GetReadonlyKeys<T> = keyof {
 [K in keyof T as Equal<
   { readonly [P in K]: T[P] },
   { [P in K]: T[P] }
 > extends true
   ? K
   : never]: T[K]
}

type Keys = GetReadonlyKeys<Todo> // expected to be "title" | "description"


export {}