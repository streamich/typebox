
import { Type, Static, TFacade, TSchema} from '@sinclair/typebox'

const T = Type.Facade<{                            // const T = {
    x: number,                                      //   type: 'object',
    y: number                                       //   properties: {
 }>({                                               //     a: { type: 'number' },
    type: 'object',                                 //     b: { type: 'number' },
    properties: {                                   //   }
      a: { type: 'number' },                        // }
      b: { type: 'number' }                          
    }                                               
 })                                                 
 
 type T = Static<typeof T>                          // type T = { a: number, b: number }
 
 const S = Type.Array(T)                            //

 console.log(JSON.stringify(Type.Strict(S), null, 2))

// // --------------------------------------------------------------------------------
// // Nullable<T>
// // --------------------------------------------------------------------------------

// export function Nullable<T extends TSchema>(schema: T): TFacade<Static<T> | null> {
//     return Type.Facade({ ...schema, nullable: true })
// }

// const T = Nullable(Type.String())     // const T = {
//                                       //    type: 'string',
//                                       //    nullable: true    
//                                       // }

// type T = Static<typeof T>             // type T = string | null


// // --------------------------------------------------------------------------------
// // StringUnion<T>
// // --------------------------------------------------------------------------------

// export type TStringUnion<T extends string[]> = {[K in keyof T]: T[K] }[number]

// function StringUnion<T extends string[]>(values: [...T]): TFacade<TStringUnion<T>> {
//     throw Type.Facade({ enum: values })
// }

// // const S = Nullable(Type.String())

// // type S = Static<typeof S>

// // const T = StringUnion(['A', 'B'])

// // type T = Static<typeof T>