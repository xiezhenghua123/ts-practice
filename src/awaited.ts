type ExampleType = Promise<string>

type Result = MyAwaited<ExampleType> // string

// answer
type IsLikePromise<T> = {
 then: (onfulfilled: (arg: T) => any) => any
}
type MyAwaited<T extends IsLikePromise<any>> = T extends IsLikePromise<infer R> ? R extends IsLikePromise<any> ? MyAwaited<R> : R : never

export {}