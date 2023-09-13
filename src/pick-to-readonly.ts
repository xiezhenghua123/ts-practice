interface Todo {
  title: string
  description: string
  completed: boolean
}

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
  title: 'Hey',
  description: 'foobar',
  completed: false
}

type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [R in K]: T[R]
} & {
  [R in keyof T as R extends K ? never : R]: T[R]
}

todo.title = 'Hello' // Error: cannot reassign a readonly property
todo.description = 'barFoo' // Error: cannot reassign a readonly property
todo.completed = true // OK

export {}
