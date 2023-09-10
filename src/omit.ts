interface Todo {
 title: string
 description: string
 completed: boolean
}

// 利用as进行类型筛选
type MyOmit<T, R extends keyof T> = {
[Q in keyof T as Q extends R ? never : Q]: T[Q]
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
 completed: false,
}
