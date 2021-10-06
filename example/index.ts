import { Type, Static } from '@sinclair/typebox'

const T = Type.Object({
    value: Type.Facade<Date>(),
})

type T = Static<typeof T>

