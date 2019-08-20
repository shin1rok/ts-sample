// Intersection Types
// &で複数の型を結合できる

// Union Types
// |で複数の型を許容することを定義できる
let nullableString: string | null
nullableString = null
nullableString = 'string'

// Literal Types
// String Numeric Booleanで使える
let bit: 8 | 16 | 32 | 64
bit = 8
// bit = 12 // error

