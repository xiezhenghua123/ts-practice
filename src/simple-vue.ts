type SimpleVueProps<D, M, C> = {
  data: () => D
  computed: C & ThisType<D>
  methods: M & ThisType<D & GetComputed<C> & M>
}

// ThisType可以控制插入this
type GetComputed<C> = {
  [K in keyof C]: C[K] extends (...args: any) => any ? ReturnType<C[K]> : never
}
declare function SimpleVue<D, M, C>(options: SimpleVueProps<D, M, C>): any

const instance = SimpleVue({
  data() {
    return {
      firstname: 'Type',
      lastname: 'Challenges',
      amount: 10
    }
  },
  computed: {
    fullname() {
      return this.firstname + ' ' + this.lastname
    }
  },
  methods: {
    hi() {
      alert(this.fullname.toLowerCase())
    }
  }
})

export {}