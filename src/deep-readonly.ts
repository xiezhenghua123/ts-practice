type X = { 
 x: { 
   a: 1
   b: 'hi'
 }
 y: 'hey',
 z: Date
}

type Expected = { 
 readonly x: { 
   readonly a: 1
   readonly b: 'hi'
 }
 readonly y: 'hey' 
}

// keyof T extends never 巧妙的判断了是否为对象
type DeepReadonly<T> = keyof T extends never ? T : {
 readonly [K in keyof T]: DeepReadonly<T[K]>
}

type Todo = DeepReadonly<X> // should be same as `Expected`


export {}