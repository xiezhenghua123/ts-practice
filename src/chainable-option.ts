declare const a: Chainable


// never是所有类型的子类型，never可以赋值给任何类型，但是没有类型可以赋值给never
type Chainable<T = {}> = {
 option: <K extends string, V>(
   key: K extends keyof T ? never : K,
   value: V
 ) => K extends keyof T ? Chainable<Omit<T, K> & Record<K, V>>: Chainable<T & Record<K, V>>
 get: () => T
}

const result1 = a
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get()