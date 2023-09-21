type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`

// answer
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
  ? true
  : false
type Includes<T extends readonly any[], U> = T extends [infer F, ...infer L] ? Equal<F, U> extends true ? true : Includes<L, U> : false