const fn = (v: boolean,a:string) => {
 if (v)
   return 1
 else
   return 2
}

// inter关键字，表示在extends条件语句中待推断的类型变量
type MyReturnType<T extends Function> = T extends (...arg: any) => infer p ? p :never

type a = MyReturnType<typeof fn>