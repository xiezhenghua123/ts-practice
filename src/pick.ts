interface Todo {
  title: string
  description: string
  completed: boolean
}
// type MyPick<T, R extends keyof T> = {
//   [Q in keyof T as Q extends R ? Q : never]: T[Q]
// }

// in 可以取联合类型的值， keyof可以获得联合类型
type MyPick<T, R extends keyof T> = {
 [Q in R]: T[Q]
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false
}
export {}
