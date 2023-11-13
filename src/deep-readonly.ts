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
 readonly z: Date 
}

type params = string | boolean | number | symbol | Function | Promise<any> | Date
type DeepReadonly<T> = T extends params ? T : { readonly [k in keyof T]: DeepReadonly<T[k]> }

type Todo = DeepReadonly<X> // should be same as `Expected`


export {}